import React, { useRef, useState } from 'react';
import DropIcon from './icons/dropfile.svg';
import { StyledWrapper, StyledShadow, StyledText, StyledImage } from './styles';

interface IProps {
  dragText?: string;
}

const DragNDrop: React.FC<IProps> = ({ children, dragText = 'Отправить файл' }) => {
  const [isDragging, setDragging] = useState(false);
  const dragCounterRef = useRef(1);

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) dragCounterRef.current += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0){
      setDragging(true);
    }
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) dragCounterRef.current -= 1;
    
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
      console.log('file dropped!');
      dragCounterRef.current = 1;
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
      {isDragging ? 
        <>
          <StyledShadow />
          <StyledImage src={DropIcon} alt="" />
          <StyledText component="h1">{dragText}</StyledText>
        </> : children}
    </StyledWrapper>);

};

export default DragNDrop;
