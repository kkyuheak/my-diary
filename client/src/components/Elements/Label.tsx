import styled from "styled-components";

const SLabel = styled.label``;

interface ILabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: ILabelProps) => {
  return <SLabel htmlFor={htmlFor}>{children}</SLabel>;
};

export default Label;
