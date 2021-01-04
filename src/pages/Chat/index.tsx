import React from 'react';
import ChatHeader from './components/Header';
import Online from './components/Online';
import Toolbar from './components/Toolbar';
import { StyledSplitPane } from './styles';

const ChatPage: React.FC = () => {
  return (
    <>
      <ChatHeader />

      <StyledSplitPane split="vertical" minSize={250} maxSize={500} defaultSize={340}>
        <Online />
        <Toolbar />
      </StyledSplitPane>
     
    </>
  );
};

export default ChatPage;