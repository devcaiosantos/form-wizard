import { Tab } from "./style/style";
import { FormData } from "../interfaces";

interface Step1Props {
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>
}

export default function Step1({data,setData}:Step1Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        const newStep1 = { ...data.step1, [name]: value };
        setData({ ...data, step1: newStep1 });
    }

    const { name, lastname, cpf, email, password } = data.step1;

    return (
        <Tab>
            <h3>Informações Básicas do Usuário:</h3>
            <label>Nome</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <label>Sobrenome</label>
            <input type="text" name="lastname" value={lastname} onChange={handleChange}/>
            <label>CPF</label>
            <input type="text" name="cpf" value={cpf} onChange={handleChange}  />
            <label>E-mail</label>
            <input type="email" name="email" value={email} onChange={handleChange} />
            <label>Senha</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
        </Tab>
    )
}