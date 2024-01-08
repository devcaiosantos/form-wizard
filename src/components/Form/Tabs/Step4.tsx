import { Tab, ButtonGroup, Button } from "./style";
import { FormData } from "../interfaces";

interface Step4Props {
    data: FormData,
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Step4({data, setStep}:Step4Props) {
    return (
        <Tab>
            <h3>Confirmação de Informações:</h3>
           <p>
            {JSON.stringify(data.step1)}
           </p>
           <p>
            {JSON.stringify(data.step2)}
           </p>
           <p>
            {JSON.stringify(data.step3)}
           </p>
           <ButtonGroup>
                    <Button type="button" onClick={() => setStep(3)}>
                        Voltar
                    </Button>
            </ButtonGroup>
        </Tab>
    );
}