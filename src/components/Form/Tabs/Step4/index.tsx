import { useState } from "react";
import { StepContent, StepTitle, ContentField, LinkToStep} from "./style";
import { Tab, Container, Title, ButtonGroup, Button } from "../style";
import { FormData } from "../../interfaces";
import Loader from "../../../LoaderBouncingBalls";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoSave } from "react-icons/io5";

interface Step4Props {
    data: FormData,
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Step4({data, setStep}:Step4Props) {
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        setIsLoading(true)
        /*Simula uma requisição post */
        setTimeout(() => {
            setIsLoading(false)
            setStep(0);
        }, 3000);
    }

    function maskPassword(password: string){
        return '*'.repeat(password.length);
    }

    function returnToStep(step: number){
        setStep(step);
    }

    const { step1, step2, step3 } = data;
    return (
        <Tab>
            <Container>
                <Title>Confirmação de Informações:</Title>
                <StepContent>
                    <StepTitle>Informações do Usuário</StepTitle>
                    <ContentField>Nome: {step1.name}</ContentField> 
                    <ContentField>Sobrenome: {step1.lastname}</ContentField>
                    <ContentField>CPF: {step1.cpf}</ContentField>
                    <ContentField>E-mail: {step1.email}</ContentField>
                    <ContentField>Senha: {maskPassword(step1.password)}</ContentField>
                    <LinkToStep onClick={()=>returnToStep(1)}>Editar informações</LinkToStep>
                </StepContent>
                <StepContent>
                    <StepTitle>Informações de Endereço</StepTitle>
                    <ContentField>CEP: {step2.cep}</ContentField>
                    <ContentField>Cidade: {step2.city}</ContentField>
                    <ContentField>Estado: {step2.state}</ContentField>
                    <ContentField>Rua: {step2.street}</ContentField>
                    <ContentField>Número: {step2.number}</ContentField>
                    <LinkToStep onClick={()=>returnToStep(2)}>Editar informações</LinkToStep>
                </StepContent>
                <StepContent>
                    <StepTitle>Informações do Responsável</StepTitle>
                    <ContentField>Nome: {step3.rep_name}</ContentField>
                    <ContentField>Grau de Parentesco: {step3.relationship}</ContentField>
                    <ContentField>RG: {step3.rep_rg}</ContentField>
                    <ContentField>Telefone: {step3.rep_phone}</ContentField>
                    <LinkToStep onClick={()=>returnToStep(3)}>Editar informações</LinkToStep>
                </StepContent> 
            </Container>
            
            
            <ButtonGroup>
                <Button type="button" disabled={isLoading}  onClick={() => setStep(3)}>
                    <FaRegArrowAltCircleLeft/>
                    Voltar
                </Button>
                <Button type="submit" disabled={isLoading} onClick={(e)=>handleSubmit(e)} >
                     {isLoading?<Loader/>:"Cadastrar"} <IoSave/>
                </Button>
            </ButtonGroup>
        </Tab>
    );
}