import { Tab } from "./style/style"
import { FormData } from "../interfaces"

interface Step2Props {
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>
}

export default function Step2({data,setData}:Step2Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        const newStep1 = { ...data.step2, [name]: value };
        setData({ ...data, step2: newStep1 });
    }

    const { cep, city, state, street,number } = data.step2;
    return (
        <Tab>
            <h3>Dados de Endereço:</h3>
            <label>CEP</label>
            <input type="text" name="cep" value={cep} onChange={handleChange}/>
            <label>Cidade</label>
            <input type="text" name="city" value={city} onChange={handleChange} />
            <label>Estado</label>
            <input type="text" name="state" value={state} onChange={handleChange} />
            <label>Rua</label>
            <input type="text" name="street" value={street} onChange={handleChange} />
            <label>Número da residência</label>
            <input type="number" name="number" value={number} onChange={handleChange} />
        </Tab>
    )
}