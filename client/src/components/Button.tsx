import React from "react";
import styled from "styled-components";

const SButton = styled.button<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: #5a63ff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgba(56, 115, 255, 0.5);
  }
`;

interface IButtonProps {
  width: string;
  height: string;
  children: React.ReactNode;
  disabled: boolean;
}

const Button = ({ disabled, width, height, children }: IButtonProps) => {
  return (
    <SButton $width={width} $height={height} disabled={disabled}>
      {children}
    </SButton>
  );
};

export default Button;
