import styled from "styled-components";
import { ButtonProps } from "./types";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
` 
export const FooterForm = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: max-content;
    margin-top: 1rem;

`
export const StepsCounter = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    gap: 1rem;
`

export const Button = styled.button<ButtonProps>`
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