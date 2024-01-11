import styled from "styled-components";

export const StepTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({theme}) => theme.text};
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
`

export const StepContent = styled.div`
    color: ${({theme}) => theme.text};
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid ${({theme}) => theme.text};
    padding: 1rem;
    border-radius: 10px;
    @media (max-width: 500px) {
        padding: 0.5rem;
    }
`

export const ContentField = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const LinkToStep = styled.a`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8;
    font-weight: 500;
    color: ${({theme}) => theme.primary};
    cursor: pointer;
    transition: 0.2s;
    width: 100%;
    &:hover {
        color: ${({theme}) => theme.secondary};
    }
    @media (max-width: 500px) {
        font-size: 0.9rem;
    }
`


