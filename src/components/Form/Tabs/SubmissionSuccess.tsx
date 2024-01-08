import { Tab } from "./style"
import { FormData } from "../interfaces"
interface SubmissionSuccessProps{
    setStep: React.Dispatch<React.SetStateAction<number>>,
    setData: React.Dispatch<React.SetStateAction<FormData>>,
    defaultData: FormData
}
export default function SubmissionSuccess({setStep, setData, defaultData}:SubmissionSuccessProps){

    const handleNewSubmission = () => {
        setStep(1);
        setData(defaultData);
    }

    return(
        <Tab>
            <h1>Usuário cadastrado com sucesso</h1>
            <button type="button" onClick={handleNewSubmission}>
                Registrar novo usuário
            </button>
        </Tab>
    )
}