import { useState } from "react";
import { Tab, ButtonGroup, Button } from "./style";
import { FormData } from "../interfaces";

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
            {isLoading && "Cadastrando..."}
            <ButtonGroup>
                <Button type="button" onClick={() => setStep(3)}>
                    Voltar
                </Button>
                <Button type="submit" onClick={(e)=>handleSubmit(e)} >
                    Cadastrar
                </Button>
            </ButtonGroup>
        </Tab>
    );
}