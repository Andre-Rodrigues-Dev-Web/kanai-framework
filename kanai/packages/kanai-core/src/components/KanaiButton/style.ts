import styled from 'styled-components';
import { KanaiButtonProps } from './KanaiButtonProps';

export const StyledButton = styled.button<KanaiButtonProps>`
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
