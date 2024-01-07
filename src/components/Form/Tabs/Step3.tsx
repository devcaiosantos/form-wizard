import { Tab } from "./style"
import { FormData } from "../interfaces"

interface Step3Props {
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>
}

export default function Step3({data,setData}:Step3Props) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        const newStep1 = { ...data.step3, [name]: value };
        setData({ ...data, step3: newStep1 });
    }

    const { rep_name, relationship, rep_phone, rep_rg  } = data.step3; 

    return (
        <Tab>
            <h3>Dados do Representante Legal:</h3>
            <label>Nome:</label>
            <input type="text" name="rep_name" value={rep_name} onChange={handleChange} />
            <label>Grau de parentesco:</label>
            <input type="text" name="relationship" value={relationship} onChange={handleChange} />
            <label>RG:</label>
            <input type="text" name="rep_rg" value={rep_rg} onChange={handleChange}/>
            <label>Telefone:</label>
            <input type="phone" name="rep_phone" value={rep_phone} onChange={handleChange}/>
        </Tab>
    )
}