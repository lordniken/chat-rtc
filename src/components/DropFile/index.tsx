import React, { useRef, useState } from 'react';
import DropIcon from './icons/dropfile.svg';
import { StyledWrapper, StyledShadow, StyledText } from './styles';

const DragNDrop: React.FC = () => {
  const [isDragging, setDragging] = useState(false);
  const dragCounterRef = useRef(0);

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dragCounterRef.current += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0){
      setDragging(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dragCounterRef.current -= 1;
    if (dragCounterRef.current > 1){
      return;
    }
      
    setDragging(false);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      dragCounterRef.current = 0;
    }
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
        <>
          <StyledShadow />
          <img src={DropIcon} alt="" />
          <StyledText component="h1">Отправить файл</StyledText>
        </>}      
    </StyledWrapper>);

};

export default DragNDrop;
