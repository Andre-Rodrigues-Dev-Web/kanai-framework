import React from 'react';
import { KanaiButton, KanaiModal } from './SharedComponents';
import { Theme } from './styles/theme';

const App: React.FC = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <Theme>
      <KanaiButton primary onClick={() => setModalVisible(true)}>
        Open Modal
      </KanaiButton>
      <KanaiModal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal dialog.</p>
        <KanaiButton onClick={() => setModalVisible(false)}>Close</KanaiButton>
      </KanaiModal>
    </Theme>
  );
};

export default App;