import styled, { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../RootStyled/RootStyled';

interface ImageBaseProps {
  directStyles?: CSSObject;
}

interface ImageBaseContainerProps {
  directStyles?: CSSObject;
}

interface ImageProps {
  containerStyles?: CSSObject;
  directStyles?: CSSObject;
  src?: string;
  alt?: string;
}

const ImageBaseContainer = styled.div<ImageBaseContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBase = styled.img<ImageBaseProps>`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: colorize 1000ms 1 cubic-bezier(0.7, 0, 0.6, 1); // Make this more configurable
  @keyframes colorize {
    0% {
      filter: saturate(1%) contrast(20%) brightness(120%);
    }
    75% {
      filter: saturate(60%) contrast(100%) brightness(100%);
    }
    100% {
      filter: saturate(100%) contrast(100%) brightness(100%);
    }
  }
`;

const StyledImageBaseContainer = RootStyled(ImageBaseContainer);
const StyledImageBase = RootStyled(ImageBase);

const Image: React.FC<ImageProps> = (props) => {
  return (
    <StyledImageBaseContainer directStyles={props.containerStyles}>
      <StyledImageBase
        src={props.src}
        alt={props.alt}
        directStyles={props.directStyles}
      >
        {/* Add loader when ready. */}
      </StyledImageBase>
    </StyledImageBaseContainer>
  );
};

export default Image;
