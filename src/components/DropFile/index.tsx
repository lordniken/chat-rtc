import React, { useCallback, useState } from 'react';
import DropIcon from './icons/dropfile.svg';
import { StyledWrapper, StyledShadow, StyledText, StyledImage, StyledContainer, StyledContent } from './styles';

interface IProps {
  dragText?: string;
  onDrop?: (e: React.DragEvent) => void;
  children: JSX.Element;
}

const DragNDrop: React.FC<IProps> = ({ children, dragText = 'Отправить файл', onDrop }) => {
  const [isDragging, setDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);

  const onDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files){
      setDragging(true);
      setDragCount(prev => prev + 1);
    }
  }, [dragCount]);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCount(prev => prev - 1);

    if (dragCount > 1) return;
    setDragging(false);
  }, [dragCount]);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (onDrop) onDrop(e);
    }

    setDragCount(0);
    setDragging(false);
  };
  
  return (
    <StyledWrapper
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDragDrop}
    >
      {isDragging &&
        <StyledContainer>
          <StyledShadow />
          <StyledContent>
            <StyledImage src={DropIcon} alt="" />
            <StyledText component="h1">{dragText}</StyledText>
          </StyledContent>
        </StyledContainer>}
      {children}
    </StyledWrapper>);

};

export default React.memo(DragNDrop);
