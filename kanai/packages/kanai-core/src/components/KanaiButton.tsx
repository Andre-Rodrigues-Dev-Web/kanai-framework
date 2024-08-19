// packages/kanai-core/src/components/KanaiButton.tsx
import React from 'react';
import styled from 'styled-components';

interface KanaiButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
}

const StyledButton = styled.button<KanaiButtonProps>`
  background-color: ${({ primary }) => (primary ? '#007BFF' : '#6C757D')};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const KanaiButton: React.FC<KanaiButtonProps> = ({ onClick, children, primary = false }) => {
  return <StyledButton onClick={onClick} primary={primary}>{children}</StyledButton>;
};

export default KanaiButton;
