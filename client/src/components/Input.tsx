import { Path, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const SInput = styled.input<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  margin-bottom: 10px;
  font-size: 17px;
  &:focus {
    border: 1.5px solid #5d7bff;
  }
  &::placeholder {
    font-size: 14px;
  }
`;

export interface IFormValues {
  email: string;
  password: string;
  nickname: string;
  checkPassword: string;
}

interface IInputProps {
  width: string;
  height: string;
  type?: string;
  id: string;
  name?: string;
  placeholder?: string;
  required: boolean;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}

const Input = ({
  width,
  height,
  type,
  id,
  placeholder,
  required,
  label,
  register,
}: IInputProps) => {
  return (
    <SInput
      $height={height}
      $width={width}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      {...register(label)}
    />
  );
};

export default Input;
