import { useState } from "react";
import { InputWrapper, Label, Input, ErrorMessage } from "./style";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const FloatingLabelInput : React.FC<FloatingLabelInputProps> = ({ label, errorMessage, ...props }) => {
    const [isFloating, setIsFloating] = useState(!!props.value);
  
    const handleFocus = () => {
      setIsFloating(true);
    };
  
    const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if (!e.currentTarget.value) {
            setIsFloating(false);
        }
    };
  
    return (
      <InputWrapper>
       
        <Label focused={isFloating}>{label}</Label>
        <Input onFocus={handleFocus} onBlur={handleBlur} autoComplete="off" {...props} />
        <ErrorMessage>
            {errorMessage}
        </ErrorMessage>
      </InputWrapper>
    );
  };
  
export default FloatingLabelInput;