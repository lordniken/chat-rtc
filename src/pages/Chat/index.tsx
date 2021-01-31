import React, { useEffect } from 'react';
import { Row } from 'components/Grid';
import Splitter from 'components/Splitter';
import { getSplitterCollapseState, getSplitterPosition } from 'utils/selectors';
import { useDispatch } from 'react-redux';
import { WsConnect } from 'store/app/actions';
import ChatHeader from './components/Header';
import Online from './components/Online';
import { StyledSplitPane } from './styles';
import ChatContainer from './components/Container';

const ChatPage: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(WsConnect());
  }, []);

  return (
    <>
      <ChatHeader />
      <Splitter 
        min={300} 
        max={800} 
        defaultWidth={getSplitterPosition() || 300} 
        isCollapsed={getSplitterCollapseState()}
      >
        <StyledSplitPane>
          <Online />
        </StyledSplitPane>
        <Row gap={0} wrap>
          <ChatContainer />
        </Row>
      </Splitter>     
    </>
  );
};

export default ChatPage;