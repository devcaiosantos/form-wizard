import { useState } from "react";
import { Container, Footer, StepsCounter } from "./style"
import Step1 from "./Tabs/Step1";
import Step2 from "./Tabs/Step2";
import Step3 from "./Tabs/Step3";
import Step4 from "./Tabs/Step4";
import Success from "./Tabs/Success";
import { FormData } from "./interfaces";
import { states } from "../../utils/states";

export const defaultFormData = {
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
        state: states[0].ac,
        street: "",
        number: 1
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

    const renderStep = (step: number) => {
        switch(step) {
            case 0:
                return <Success setStep={setCurrentStep} setData={setFormData} defaultData={defaultFormData}/>;
            case 1:
                return <Step1 data={formData} setData={setFormData} setStep={setCurrentStep} />;
            case 2:
                return <Step2 data={formData} setData={setFormData} setStep={setCurrentStep}/>;
            case 3:
                return <Step3 data={formData} setData={setFormData} setStep={setCurrentStep}/>;
            case 4:
                return <Step4 data={formData} setStep={setCurrentStep}/>;
            default:
                return null;
        }
    }

    return (
        <Container>
            {renderStep(currentStep)}
            <Footer>
                {
                    currentStep ?
                    <StepsCounter>
                        {currentStep+"/4"}
                    </StepsCounter>
                    : ""
                }
                
            </Footer>
        </Container>
    )
}