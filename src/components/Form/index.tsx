import { useState } from "react";
import { Form, FooterForm, ButtonGroup, Button, StepsCounter } from "./style"
import FirstTab from "../Tabs/first";
import SecondTab from "../Tabs/second";

export default function FormComponent() {

    const [step, setStep] = useState(1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(e.currentTarget);
    };

    const handlePrevStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(step > 1) setStep(step - 1);
    }
    const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(step < 4) setStep(step + 1);
    }

    return (
        <Form onSubmit={handleSubmit} >
            <FirstTab $isActive={step===1}/>
            <SecondTab $isActive={step===2}/>
            <FooterForm>
                <StepsCounter>
                    {step+"/4"}
                </StepsCounter>
                <ButtonGroup>
                    <Button 
                        type="button" 
                        onClick={(e) => handlePrevStep(e)} 
                        disabled={step === 1}
                    >
                        Voltar
                    </Button>
                    {
                        step < 4 && 
                        <Button 
                            type="button" 
                            onClick={(e) => handleNextStep(e)}
                            disabled={step === 4}
                        >
                            Próximo
                        </Button>
                    }
                    {
                        step === 4 && 
                        <Button 
                            type="submit"
                        >
                            Enviar
                        </Button>
                    }
                </ButtonGroup>
               
            </FooterForm>
        </Form>
    )
}