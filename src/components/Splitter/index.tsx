import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { getSplitterPosition, saveSplitterCollapseState, saveSplitterPosition } from 'utils/selectors';
import { StyledWrapper, StyledSeparator, StyledFragment } from './styles';

const SEPARATOR_WIDTH = 6;
const COLLAPSED_WIDTH = 50;

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
  position: number;
}

export const SplitterContext = createContext<ISplitterContext>({
  collapsed: false,
  setCollapsed: () => {},
  position: 0,
});

const Splitter: React.FC<IProps> = ({ min, max, defaultWidth = 400, isCollapsed, children }) => {
  const items: React.ReactElement[] = React.Children.toArray(children) as React.ReactElement[];
  const separatorPosition = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const [position, setPosition] = React.useState<number>(defaultWidth);
  const collapseBreakpoint = useMemo(() => min - min / 10, [min]);

  const onMouseMove = (e: MouseEvent) => {
    if (!separatorPosition.current) {
      return;
    }
    separatorPosition.current = e.clientX + SEPARATOR_WIDTH / 2;
    
    setCollapsed(separatorPosition.current <= collapseBreakpoint);

    if ((min && separatorPosition.current >= min) && (max && separatorPosition.current <= max)) {
      setPosition(separatorPosition.current);
    }
  };

  const separatorClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    rootRef!.current!.style.userSelect = 'none';
    separatorPosition.current = e.clientX;
  };

  const onMouseUp = () => {
    if (separatorPosition.current){
      rootRef!.current!.style.userSelect = 'auto';
      if (position! > COLLAPSED_WIDTH) saveSplitterPosition(position!);
    }
    separatorPosition.current = null;
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
      setPosition(COLLAPSED_WIDTH);
    } else {
      setPosition(separatorPosition!.current! ? min : getSplitterPosition() || defaultWidth);
    }
    saveSplitterCollapseState(collapsed);
  }, [collapsed]);

  return (
    <SplitterContext.Provider
      value={{
        collapsed,
        setCollapsed,
        position,
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