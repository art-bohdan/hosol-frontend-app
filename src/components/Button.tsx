import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 12px;
  color: #d7d7ef;
  cursor: pointer;
  text-transform: uppercase;
`;
interface IButton {
  title: string;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
