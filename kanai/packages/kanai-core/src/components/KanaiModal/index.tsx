import React from 'react';
import { Overlay, ModalContent } from './style';

export interface KanaiModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const KanaiModal: React.FC<KanaiModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default KanaiModal;
