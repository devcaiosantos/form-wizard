import { useState } from "react"
import { Tab, ButtonGroup, Button } from "./style"
import { FormData } from "../interfaces"
import { object, string, ValidationError } from 'yup';
import isValidRG from "../../../utils/isValidRG";
const step3YupSchema = object({
    rep_name: string().required(),
    relationship: string().required(),
    rep_rg: string().required().test('valid-rg', 'RG inválido', (value) => isValidRG(value)),
    rep_phone: string().required(),
});


interface Step3Props {
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Step3({data,setData,setStep}:Step3Props) {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        const newStep3 = { ...data.step3, [name]: value };
        setData({ ...data, step3: newStep3 });
    }

    const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        try {
            await step3YupSchema.validate(data.step3, { abortEarly: false });
            setStep(4);
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


    const { rep_name, relationship, rep_phone, rep_rg  } = data.step3; 

    return (
        <Tab>
            <h3>Dados do Representante Legal:</h3>
            <label>Nome:</label>
            <input type="text" name="rep_name" value={rep_name} onChange={handleChange} />
            <label>Grau de parentesco:</label>
            <input type="text" name="relationship" value={relationship} onChange={handleChange} />
            <label>RG:</label>
            <input type="text" name="rep_rg" value={rep_rg} onChange={handleChange}/>
            <label>Telefone:</label>
            <input type="phone" name="rep_phone" value={rep_phone} onChange={handleChange}/>
            {JSON.stringify(errors)!="{}" && "Preencha corretamente todos os campos"}
            <ButtonGroup>
                    <Button type="button" onClick={() => setStep(2)}>
                        Voltar
                    </Button>
                    <Button type="button"  onClick={(e) => handleNextStep(e)}>
                        Próximo
                    </Button>
            </ButtonGroup>
        </Tab>
    )
}