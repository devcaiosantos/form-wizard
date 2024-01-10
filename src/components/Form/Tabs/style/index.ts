import styled from 'styled-components'
import { StyledButtonProps } from './types'

export const Tab = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    justify-content: space-between;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    height: 480px;
    width: 100%;
    padding: 0.5rem;
    overflow-y: auto;
      /* Estilo da barra de rolagem para navegadores WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme})=>theme.primary}; /* Cor do botão de rolagem */
        border-radius: 6px; /* Cantos arredondados do botão de rolagem */
    }

    &::-webkit-scrollbar-track {
        background-color: transparent; /* Cor de fundo da barra de rolagem */
        border-radius: 6px; /* Cantos arredondados da barra de rolagem */
    }
`

export const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({theme}) => theme.text};
    margin-bottom: 1rem;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`

export const Button = styled.button<StyledButtonProps>`
    min-width: 100px;
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
    gap: 1rem;
`