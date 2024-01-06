export interface Step1Data {
    name: string;
    lastname: string;
    cpf: string;
    email: string;
    password: string;
}

export interface Step2Data {
    cep: string;
    city: string;
    state: string;
    street: string;
    number: number;
}

export interface Step3Data {
    rep_name: string;
    relationship: string;
    rep_rg: string;
    rep_phone: string;
}

export interface FormData {
    step1: Step1Data;
    step2: Step2Data;
    step3: Step3Data;
}