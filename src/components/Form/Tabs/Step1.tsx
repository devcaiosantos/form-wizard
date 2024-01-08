import { useState } from "react";
import { Tab, ButtonGroup, Button } from "./style";
import { FormData } from "../interfaces";
import { object, string, ValidationError } from 'yup';
import  isValidCPF  from "../../../utils/isValidCPF";

const step1YupSchema = object({
  name: string().required(),
  lastname: string().required(),
  cpf: string().min(14).max(14).test('valid-cpf', 'CPF inválido', (value) => isValidCPF(value)),
  email: string().email().required(),
  password: string().min(8).required(),
});

interface Step1Props {
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>,
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Step1({data,setData, setStep}:Step1Props) {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        
        let newStep1 = { ...data.step1, [name]: value };

        if(name == "cpf"){
            const maskedCPF = value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
            newStep1 = { ...data.step1, [name]: maskedCPF };
        }

        setData({ ...data, step1: newStep1 });
    }

    const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        /*
            Validate data
        */
        try {
            await step1YupSchema.validate(data.step1, { abortEarly: false });
            setStep(2);
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


    const { name, lastname, cpf, email, password } = data.step1;

    return (
        <Tab>
            <div style={{display:"flex", flexDirection:"column", gap:5, marginBottom: 10 }}>
                <h3>Informações Básicas do Usuário:</h3>
                <label>Nome</label>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <label>Sobrenome</label>
                <input type="text" name="lastname" value={lastname} onChange={handleChange}/>
                <label>CPF</label>
                <input type="text" name="cpf" maxLength={14} value={cpf} onChange={handleChange}  />
                <label>E-mail</label>
                <input type="email" name="email" value={email} onChange={handleChange} />
                <label>Senha</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
                
                {JSON.stringify(errors)!="{}" && "Preencha corretamente todos os campos"}
            </div>
            <ButtonGroup>
                    <Button 
                        type="button" 
                        onClick={(e) => handleNextStep(e)}
                    >
                        Próximo
                    </Button>
            </ButtonGroup>
        </Tab>
    )
}