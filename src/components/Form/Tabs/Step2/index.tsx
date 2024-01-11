import { useEffect, useState } from "react";
import FloatingLabelInput from "../../../FloatingLabelInput";
import FloatingLabelSelect from "../../../FloatingLabelSelect";
import { Tab, Container, Title, InputGroup, ButtonGroup, Button } from "../style"
import { FormData } from "../../interfaces"
import { object, string, number,ValidationError } from 'yup';
import { states } from "../../../../utils/states";
import getAddressByCEP from "../../../../services/brasilAPI/getAddressByCEP";
import isValidCEP  from "../../../../utils/isValidCEP";
import useDebounceStr from "../../../../hooks/useDebounceStr";
import {FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

const step2YupSchema = object({
    cep: string().required().min(9).max(9).test('valid-cep', 'CEP inválido', (value) => isValidCEP(value)),
    city: string().required("Cidade é obrigatória"),
    state: string().max(2).required("Estado é obrigatório"),
    street: string().required("Rua é obrigatória"),
    number: number().min(1,"Número precisa ser maior que 0").required("Número é obrigatório"),
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
            <Container>
                <Title><IoIosPin/> Endereço:</Title>
                <InputGroup>
                    <FloatingLabelInput label="CEP" errorMessage={errors.cep} type="text" name="cep" maxLength={9} value={cep} onChange={handleChangeInput}/>
                    <FloatingLabelInput label="Cidade" errorMessage={errors.city} type="text" name="city" value={city} onChange={handleChangeInput}/>
                    <FloatingLabelSelect label="Estado" errorMessage={errors.state} name="state" value={state} onChange={handleChangeInput}>
                        {states.map((state,i) => <option key={i} value={state.ac}>{state.name}</option>)}
                    </FloatingLabelSelect>
                    <FloatingLabelInput label="Rua" errorMessage={errors.street} type="text" name="street" value={street} onChange={handleChangeInput}/>
                    <FloatingLabelInput label="Número" errorMessage={errors.number} type="number" name="number" min={1} value={number} onChange={handleChangeInput}/>
                </InputGroup>            
            </Container>
            <ButtonGroup>
                    <Button type="button" onClick={() => setStep(1)}>
                      <FaRegArrowAltCircleLeft/>  Voltar
                    </Button>
                    <Button type="submit"  onClick={(e) => handleNextStep(e)}>
                        Próximo <FaRegArrowAltCircleRight/>
                    </Button>
            </ButtonGroup>
        </Tab>
    )
}