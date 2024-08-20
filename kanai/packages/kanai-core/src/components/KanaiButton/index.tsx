import React from 'react';
import { StyledButton } from './style';

export interface KanaiButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
}

const KanaiButton: React.FC<KanaiButtonProps> = ({ onClick, children, primary = false }) => {
  return <StyledButton onClick={onClick} primary={primary}>{children}</StyledButton>;
};

export default KanaiButton;
