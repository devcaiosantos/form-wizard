import styled from 'styled-components';
import { LabelProps } from './interfaces';

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
  option {
    font-size: 16px;
    background-color: ${({ theme }) => theme.background}; /* Cor de fundo da opção selecionada */
    color: ${({ theme }) => theme.text}; /* Cor do texto da opção selecionada */
  }
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${(props) => (props.focused ? '-5px' : '25%')};
  left: 10px;
  font-size: ${(props) => (props.focused ? '12px' : '16px')};
  color: ${({focused, theme}) => (focused ? theme.primary : "#ccc" )};
  background-color: ${({focused,theme}) =>focused? theme.background: 'transparent'};
  transition: top  0.3s, font-size 0.3s, background-color 0.4s;
`;

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: -17px;
    left: 10px;
    font-size: 12px;
    color: ${({theme}) => theme.error};
    font-weight: bold;
    background-color: ${({theme}) => theme.background};
`;
