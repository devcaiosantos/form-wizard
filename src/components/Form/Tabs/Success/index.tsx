import { Container, Title, SuccessIcon,SuccessMessage } from "./style"
import { Tab, Button } from "../style"
import { FormData } from "../../interfaces"

interface SubmissionSuccessProps{
    setStep: React.Dispatch<React.SetStateAction<number>>,
    setData: React.Dispatch<React.SetStateAction<FormData>>,
    defaultData: FormData
}
export default function SubmissionSuccess({setStep, setData, defaultData}:SubmissionSuccessProps){

    const handleNewSubmit = (e:React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        setStep(1);
        setData(defaultData);
    }

    return(
        <Tab>
            <Container>
                <SuccessIcon />
                <Title>Tudo certo!</Title>
                <SuccessMessage>
                    Cadastro realizado com sucesso
                </SuccessMessage>
                <Button type="button" onClick={(e)=>handleNewSubmit(e)}>
                    Novo usuário
                </Button>
            </Container>
        </Tab>
    )
}