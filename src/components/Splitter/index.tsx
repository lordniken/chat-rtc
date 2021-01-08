import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { StyledWrapper, StyledSeparator, StyledFragment } from './styles';

const SEPARATOR_WIDTH = 6;
const COLLAPSE_BREAKPOINT = 50;

interface IProps {
  children: React.ReactElement[];
  max: number;
  min: number;
  defaultWidth?: number;
  isCollapsed: boolean;
}

interface ISplitterContext {
  collapsed: boolean;
  setCollapsed: (key: boolean) => void;
  separatorPosition: number;
  setSeparatorPosition: (pos: number) => void;
}

export const SplitterContext = createContext<ISplitterContext>({
  collapsed: false,
  setCollapsed: () => {},
  separatorPosition: 0,
  setSeparatorPosition: () => {},
});

const Splitter: React.FC<IProps> = ({ min = 300, max = 600, defaultWidth = 400, isCollapsed, children }) => {
  const items: React.ReactElement[] = React.Children.toArray(children) as React.ReactElement[];
  const cursorPosition = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const [position, setPosition] = React.useState<number>(defaultWidth);
  const [separatorPosition, setSeparatorPosition] = React.useState<number>(defaultWidth);
  const collapseBreakpoint = useMemo(() => min - min / 10, [min]);

  const onMouseMove = (e: MouseEvent) => {
    if (!cursorPosition.current) {
      return;
    }

    cursorPosition.current = e.clientX + SEPARATOR_WIDTH / 2;    
    setCollapsed(cursorPosition.current <= collapseBreakpoint);

    if ((min && cursorPosition.current >= min) && (max && cursorPosition.current <= max)) {
      setPosition(cursorPosition!.current!);
    }
  };

  const separatorClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    rootRef!.current!.style.userSelect = 'none';
    cursorPosition.current = e.clientX;
  };

  const onMouseUp = () => {
    if (cursorPosition.current){
      rootRef!.current!.style.userSelect = 'auto';     
      if (!collapsed) setSeparatorPosition(position);
    }
    cursorPosition.current = null;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    rootRef.current = (document.querySelector('#root') as HTMLElement);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  useEffect(() => {
    if (collapsed) {
      setPosition(COLLAPSE_BREAKPOINT);
    } else {
      setPosition(cursorPosition!.current! ? min : separatorPosition);
    }
  }, [collapsed]);

  return (
    <SplitterContext.Provider
      value={{
        collapsed,
        setCollapsed,
        separatorPosition,
        setSeparatorPosition
      }}
    >
      <StyledWrapper>
        {
          items.map((item, index) => ( 
            <StyledFragment key={item.key} position={position} index={index}>
              {item}
              {!index && 
                <StyledSeparator
                  onMouseDown={separatorClicked}
                  onDoubleClick={() => setCollapsed(prev => !prev)}
                  width={SEPARATOR_WIDTH}
                />}
            </StyledFragment>
          ))
        }
      </StyledWrapper>
    </SplitterContext.Provider>
  );
};

export default Splitter;