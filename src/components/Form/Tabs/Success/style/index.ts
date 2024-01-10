import styled from 'styled-components'
import { FaCheckCircle } from 'react-icons/fa'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const Title = styled.h2`
    font-size: 2.0rem;
    font-weight: 600;
    color: ${({theme}) => theme.text};
    margin-bottom: 2rem;
    gap: 10;

`

export const SuccessIcon = styled(FaCheckCircle)`
    font-size: 6rem;
    color: ${({theme}) => theme.primary};
    margin-bottom: 1rem;
`

export const SuccessMessage = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin-bottom: 2rem;
`