import styled from 'styled-components'
import { StyledButtonProps } from './types'
export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
`

export const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({theme}) => theme.text};
    margin-bottom: 1rem;

`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    gap: 73%;
`

export const Button = styled.button<StyledButtonProps>`
    width: max-content;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
   
    &:hover{
        background-color: #555;
    }
    &:disabled{
        background-color: #999;
        cursor: not-allowed;
    }
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    gap: 1rem;
`