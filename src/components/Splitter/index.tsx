import React, { useEffect, useRef } from 'react';
import { StyledWrapper, StyledSeparator, StyledFragment } from './styles';

const SEPARATOR_WIDTH = 6;

interface IProps {
  children: React.ReactElement[];
  max: number;
  min: number;
  defaultWidth?: number;
}

const Splitter: React.FC<IProps> = ({ min, max, defaultWidth = 300, children }) => {
  const items: React.ReactElement[] = React.Children.toArray(children) as React.ReactElement[];
  const separatorPosition = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const [position, setPosition] = React.useState<number | null>(defaultWidth || null);

  const onMouseMove = (e: MouseEvent) => {
    if (!separatorPosition.current) {
      return;
    }

    separatorPosition.current = e.clientX + SEPARATOR_WIDTH / 2;

    if ((min && separatorPosition.current >= min) && (max && separatorPosition.current <= max)) {
      setPosition(separatorPosition.current);
    }
  };

  const separatorClicked = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    rootRef!.current!.style.userSelect = 'none';
    separatorPosition.current = e.clientX;
  };

  const onMouseUp = () => {
    rootRef!.current!.style.userSelect = 'auto';
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

  return (
    <StyledWrapper>
      {
        items.map((item, index) => ( 
          <StyledFragment key={item.key} position={position} index={index}>
            {item}
            {index !== items.length - 1 && 
              <StyledSeparator
                onMouseDown={separatorClicked}
                width={SEPARATOR_WIDTH}
              />}
          </StyledFragment>
        ))
      }
    </StyledWrapper>
  );
};

export default Splitter;