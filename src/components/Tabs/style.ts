import styled from 'styled-components'
import { StyledTabProps } from './types'

export const Tab = styled.div<StyledTabProps>`
    display: ${({$isActive})=>$isActive?"flex":"none"};
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
`