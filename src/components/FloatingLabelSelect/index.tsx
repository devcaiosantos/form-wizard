import { useEffect, useState } from "react";
import { InputWrapper, Label, SelectInput, ErrorMessage } from "./style";

interface FloatingLabelSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  errorMessage?: string;
}

const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({ label, errorMessage, ...props }) => {
  const [isFloating, setIsFloating] = useState(!!props.value);

  useEffect(() => {
      setIsFloating(!!props.value);
  },
  [props.value])

  const handleFocus = () => {
    setIsFloating(true);
  };

  const handleBlur: React.FocusEventHandler<HTMLSelectElement> = (e) => {
    if (!e.currentTarget.value) {
      setIsFloating(false);
    }
  };

  return (
    <InputWrapper>
      <Label focused={isFloating}>{label}</Label>
      <SelectInput onFocus={handleFocus} onBlur={handleBlur} {...props} autoComplete="off">
        {props.children}
      </SelectInput>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputWrapper>
  );
};

export default FloatingLabelSelect;