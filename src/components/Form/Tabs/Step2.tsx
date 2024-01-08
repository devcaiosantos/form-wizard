import { useEffect, useState } from "react";
import { Tab, ButtonGroup, Button } from "./style"
import { FormData } from "../interfaces"
import { object, string, number,ValidationError } from 'yup';
import { states } from "../../../utils/states";
import getAddressByCEP from "../../../services/brasilAPI/getAddressByCEP";
import isValidCEP  from "../../../utils/isValidCEP";
import useDebounceStr from "../../../hooks/useDebounceStr";

const step2YupSchema = object({
    cep: string().required().min(9).max(9).test('valid-cep', 'CEP inválido', (value) => isValidCEP(value)),
    city: string().required(),
    state: string().max(2).required(),
    street: string().required(),
    number: number().min(1).required(),
});

interface Step2Props {
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Step2({data, setData, setStep}:Step2Props) {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const debouncedCEP = useDebounceStr(data.step2.cep, 500);

    useEffect(() => {
        if(debouncedCEP.length==9){
            autoFillAddressByCEP(debouncedCEP);
        }
    }, [debouncedCEP])

    async function autoFillAddressByCEP(cep: string){
        const response = await getAddressByCEP(cep);
        if(response.status=="success"){
            const { city, state, street } = response.data;
            const newStep2 = { ...data.step2, city, state, street };
            setData({ ...data, step2: newStep2 });
        }
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement> ): void => {
        const { name, value } = e.currentTarget;
        let newStep2 = { ...data.step2, [name]: value };
        if(name=="cep"){
            const maskedCEP = value.replace(/\D/g, "").replace(/(\d{5})(\d{3})/g, "$1-$2")
            newStep2 = { ...data.step2, [name]: maskedCEP };
        }
        setData({ ...data, step2: newStep2 });
    }
    
    const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        try {
            await step2YupSchema.validate(data.step2, { abortEarly: false });
            setStep(3);
        } catch (error) {
            if (error instanceof ValidationError) {

                const yupErrors: ValidationError = error;
                const newErrors: Record<string, string> = {};
        
                yupErrors.inner.forEach((e) => {
                  newErrors[e.path as string] = e.message;
                });
                setErrors(newErrors);
            }
        }
    }

    const { cep, city, state, street,number } = data.step2;
    return (
        <Tab>
            <div style={{display:"flex", flexDirection:"column", gap:5, marginBottom: 10 }}>
                <h3>Dados de Endereço:</h3>
                <label>CEP</label>
                <input type="text" name="cep" maxLength={9} value={cep} onChange={handleChangeInput}/>
                <label>Cidade</label>
                <input type="text" name="city" value={city} onChange={handleChangeInput} />
                <label>Estado</label>
                <select name="state" value={state} onChange={handleChangeInput}>
                    <option value="">Selecione um estado</option>
                    {states.map((state, index) => (
                    <option key={index} value={state.ac}>{state.name}</option>
                    ))}
                </select>
                <label>Rua</label>
                <input type="text" name="street" value={street} onChange={handleChangeInput} />
                <label>Número da residência</label>
                <input type="number" name="number" min={1} value={number} onChange={handleChangeInput} />
                {JSON.stringify(errors)!="{}" && "Preencha corretamente todos os campos"}
            </div>
           
            <ButtonGroup>
                    <Button type="button" onClick={() => setStep(1)}>
                        Voltar
                    </Button>
                    <Button type="button"  onClick={(e) => handleNextStep(e)}>
                        Próximo
                    </Button>
            </ButtonGroup>
        </Tab>
    )
}