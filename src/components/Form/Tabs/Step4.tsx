import { Tab } from "./style/style";
import { FormData } from "../interfaces";

interface Step4Props {
    data: FormData
}

export default function Step4({data}:Step4Props) {


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
        </Tab>
    );
}