import { Tab } from "./style"
import { StyledTabProps } from "./types";


export default function SecondTab({$isActive}:StyledTabProps) {
    return (
        <Tab $isActive={$isActive}>
            {JSON.stringify($isActive)}
            <label>CEP</label>
            <input type="text" name="cep" />
            <label>Endereço</label>
            <input type="text" name="endereço" />
        </Tab>
    )
}