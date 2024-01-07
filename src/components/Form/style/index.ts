import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    height: 500px
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