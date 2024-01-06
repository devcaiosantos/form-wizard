import { useEffect, useState } from "react";
import { Form, FooterForm, ButtonGroup, Button, StepsCounter } from "./style"
import Step1 from "./Tabs/Step1";
import Step2 from "./Tabs/Step2";
import Step3 from "./Tabs/Step3";
import Step4 from "./Tabs/Step4";
import { FormData } from "./interfaces";

const defaultFormData = {
    step1: {
        name: "",
        lastname: "",
        cpf: "",
        email: "",
        password: ""
    },
    step2: {
        cep: "",
        city: "",
        state: "",
        street: "",
        number: 0
    },
    step3: {
        rep_name: "",
        relationship: "",
        rep_rg: "",
        rep_phone: ""
    }
}

export default function FormComponent() {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(defaultFormData);

    useEffect(
        () => {
            console.log(formData.step3);
        },
        [formData]
    )
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(e.currentTarget);
    };

    const handlePrevStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(currentStep > 1) setCurrentStep(currentStep - 1);
    }
    const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(currentStep < 4) setCurrentStep(currentStep + 1);
    }

    const renderStep = (step: number) => {
        switch(step) {
            case 1:
                return <Step1 data={formData} setData={setFormData}/>;
            case 2:
                return <Step2 data={formData} setData={setFormData}/>;
            case 3:
                return <Step3 data={formData} setData={setFormData}/>;
            case 4:
                return <Step4 data={formData}/>;
            default:
                return null;
        }
    }

    return (
        <Form onSubmit={handleSubmit} >
            {renderStep(currentStep)}
            <FooterForm>
                <StepsCounter>
                    {currentStep+"/4"}
                </StepsCounter>
                <ButtonGroup>
                    <Button 
                        type="button" 
                        onClick={(e) => handlePrevStep(e)} 
                        disabled={currentStep === 1}
                    >
                        Voltar
                    </Button>
                    {
                        currentStep < 4 && 
                        <Button 
                            type="button" 
                            onClick={(e) => handleNextStep(e)}
                            disabled={currentStep === 4}
                        >
                            Próximo
                        </Button>
                    }
                    {
                        currentStep === 4 && 
                        <Button type="submit">
                            Enviar
                        </Button>
                    }
                </ButtonGroup>
               
            </FooterForm>
        </Form>
    )
}