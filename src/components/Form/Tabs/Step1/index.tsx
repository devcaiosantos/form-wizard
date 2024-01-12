import { useState } from "react";
import FloatingLabelInput from "../../../FloatingLabelInput";
import { Tab, Container, Title, ButtonGroup, Button, InputGroup } from "../style";
import { FormData } from "../../interfaces";
import { object, string, ValidationError } from 'yup';
import  isValidCPF  from "../../../../utils/isValidCPF";
import {FaRegArrowAltCircleRight, FaUserEdit } from "react-icons/fa";

const step1YupSchema = object({
  name: string().required("Nome é obrigatório"),
  lastname: string().required("Sobrenome é obrigatório"),
  cpf: string().min(14).max(14).test('valid-cpf', 'CPF inválido', (value) => isValidCPF(value)),
  email: string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: string().min(8,"A senha precisa ter pelo menos 8 caracteres").required("Senha é obrigatória"),
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
        console.log(name, value)
        let newStep1 = { ...data.step1, [name]: value };

        if(name == "cpf"){
            
            const maskedCPF = value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
            console.log(maskedCPF)
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
            <Container>
                <Title> <FaUserEdit />Informações do Usuário:</Title>
                <InputGroup>
                    <FloatingLabelInput label={"Nome "} errorMessage={errors.name} type="text" name="name" value={name} onChange={handleChange}/>
                    <FloatingLabelInput label={"Sobrenome"} errorMessage={errors.lastname}  type="text" name="lastname" value={lastname} onChange={handleChange} />
                    <FloatingLabelInput label={"CPF"} errorMessage={errors.cpf} type="tel" name="cpf" maxLength={14} value={cpf} onChange={handleChange}  />
                    <FloatingLabelInput label={"E-mail"} errorMessage={errors.email} type="email" name="email" value={email} onChange={handleChange} />
                    <FloatingLabelInput label={"Senha"} errorMessage={errors.password} type="password" name="password" value={password} onChange={handleChange} />
                </InputGroup>
            </Container>
            <ButtonGroup>
                    <Button 
                        type="submit" 
                        onClick={(e) => handleNextStep(e)}
                    >
                        Próximo <FaRegArrowAltCircleRight/>
                    </Button>
            </ButtonGroup>
        </Tab>
    )
}