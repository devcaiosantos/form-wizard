import { useState } from "react"
import  FloatingLabelInput  from "../../../FloatingLabelInput";
import { Tab, Container, Title, InputGroup,ButtonGroup, Button } from "../style"
import { FormData } from "../../interfaces"
import { object, string, ValidationError } from 'yup';
import isValidRG from "../../../../utils/isValidRG";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
const step3YupSchema = object({
    rep_name: string().required("Nome é obrigatório"),
    relationship: string().required("Grau de parentesco é obrigatório"),
    rep_rg: string().required().min(12).max(12).test('valid-rg', 'RG inválido', (value) => isValidRG(value)),
    rep_phone: string().min(14,"Telefone precisa ter no mínimo 10 dígitos").max(15).required("Telefone é obrigatório"),
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
        let newStep3 = { ...data.step3, [name]: value }

        if(name=="rep_rg"){
            const maskedRG = value.replace(/\D/g, "").replace(/(\d{2})(\d{3})(\d{3})(\d{1})/g, "$1.$2.$3-$4")
            newStep3 = { ...data.step3, [name]: maskedRG };
        }

        if(name=="rep_phone"){
            const maskedPhone = value.replace(/\D/g, "").replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
            newStep3 = { ...data.step3, [name]: maskedPhone };
        }

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
            <Container>
                <Title><GoLaw/>Informações Representante Legal:</Title>
                <InputGroup>
                    <FloatingLabelInput label="Nome" errorMessage={errors.rep_name} type="text" name="rep_name" value={rep_name} onChange={handleChange}/>
                    <FloatingLabelInput label="Grau de parentesco" errorMessage={errors.relationship} type="text" name="relationship" value={relationship} onChange={handleChange}/>
                    <FloatingLabelInput label="RG" errorMessage={errors.rep_rg} type="tel" name="rep_rg" maxLength={12} value={rep_rg} onChange={handleChange}/>
                    <FloatingLabelInput label="Telefone" errorMessage={errors.rep_phone} type="tel" name="rep_phone" maxLength={15} value={rep_phone} onChange={handleChange}/>
                </InputGroup>
            </Container>
            <ButtonGroup>
                    <Button type="button" onClick={() => setStep(2)}>
                    <FaRegArrowAltCircleLeft/> Voltar
                    </Button>
                    <Button type="submit"  onClick={(e) => handleNextStep(e)}>
                        Próximo <FaRegArrowAltCircleRight/>
                    </Button>
            </ButtonGroup>
        </Tab>
    )
}