import styled from "styled-components";

export const StepTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.text};
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
`

export const StepContent = styled.div`
    color: ${({theme}) => theme.text};
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid ${({theme}) => theme.text};
    padding: 1rem;
    border-radius: 10px;
`

export const ContentField = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-bottom: 0.5rem;
`

export const LinkToStep = styled.a`
    font-size: 0.8;
    font-weight: 500;
    color: ${({theme}) => theme.primary};
    cursor: pointer;
    transition: 0.2s;
    text-align: right;
   // border-bottom: 1px solid ${({theme}) => theme.primary};
    width: 100%;
    &:hover {
        color: ${({theme}) => theme.secondary};
    }
`


