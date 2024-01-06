import { Tab } from "./style"
import { StyledTabProps } from "./types";


export default function FirstTab({$isActive}:StyledTabProps) {
    return (
        <Tab $isActive={$isActive}>
            {JSON.stringify($isActive)}
            <label>Nome</label>
            <input type="text" name="name" />
            <label>Sobrenome</label>
            <input type="text" name="lastName" />
            <label>CPF</label>
            <input type="text" name="cpf" />
            <label>E-mail</label>
            <input type="email" name="email" />
            <label>Senha</label>
            <input type="password" name="password" />
        </Tab>
    )
}