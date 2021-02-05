import React, { createContext, useState } from 'react';
import { Wrapper, Shadow, Content } from './styles';

interface IModalContext {
  setContent: (c: null | React.ReactElement) => void;
}

export const ModalContext = createContext<IModalContext>({
  setContent: () => {},
});

const Modal: React.FC = ({ children }) => {
  const [content, setContent] = useState<null | React.ReactElement>(null);

  return (
    <ModalContext.Provider
      value={{
        setContent
      }}
    >
      <>
        {children}
        {content && (
          <Wrapper>
            <Shadow onClick={() => setContent(null)} />
            <Content>
              {content}
            </Content>
          </Wrapper>
        )}
      </>
    </ModalContext.Provider>
  );
};

export default Modal;
