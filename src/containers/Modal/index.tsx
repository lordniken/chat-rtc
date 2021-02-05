import React, { createContext, useState } from 'react';
import { Wrapper, Shadow, Content } from './styles';

interface IModalContext {
  setModalShown: (v: boolean) => void;
  setContent: (c: null | React.ReactElement) => void;
}

export const ModalContext = createContext<IModalContext>({
  setModalShown: () => {},
  setContent: () => {},
});

const Modal: React.FC = ({ children }) => {
  const [isModalShown, setModalShown] = useState(true);
  const [content, setContent] = useState<null | React.ReactElement>(null);

  return (
    <ModalContext.Provider
      value={{
        setModalShown,
        setContent
      }}
    >
      <>
        {children}
        {(isModalShown && content) && (
          <Wrapper>
            <Shadow onClick={() => setModalShown(false)} />
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
