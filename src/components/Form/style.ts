import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    border: 2px solid ${({theme}) => theme.primary};
    border-radius: 10px;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    height: 600px;
    padding: 2rem;
` 
export const Footer = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: max-content;
    margin-top: 1rem;
`
export const StepsCounter = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({theme}) => theme.primary};
`