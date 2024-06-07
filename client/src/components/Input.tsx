import { useForm } from "react-hook-form";
import styled from "styled-components";

const SInput = styled.input<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  margin-bottom: 10px;

  &:focus {
    border: 1.5px solid #5d7bff;
  }
`;

interface IInputProps {
  width: string;
  height: string;
  type?: string;
  id: string;
  name?: string;
  placeholder?: string;
  required: boolean;
}

const Input = ({
  width,
  height,
  type,
  id,
  placeholder,
  required,
}: IInputProps) => {
  const { register } = useForm();

  return (
    <SInput
      $height={height}
      $width={width}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      {...register(id)}
    />
  );
};

export default Input;
