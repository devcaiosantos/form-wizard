import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.backgroundLight};
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin-bottom: 1rem;
`