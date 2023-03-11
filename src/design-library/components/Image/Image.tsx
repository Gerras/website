import styled, { CSSObject } from 'styled-components';
import React from 'react';
import RootStyled from '../Root/Root';

interface ImageBaseProps {
  directStyles?: CSSObject;
}

interface ImageProps {
  directStyles?: CSSObject;
  src?: string;
  alt?: string;
}

const ImageBaseContainer = styled.div`
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
  object-fit: fit;
  animation: materialize 3000ms 1 cubic-bezier(0.7, 0, 0.6, 1); // Make this more configurable
  @keyframes materialize {
    0% {
      filter: saturate(20%) contrast(50%) brightness(120%);
    }
    75% {
      filter: saturate(60%) contrast(100%) brightness(100%);
    }
    100% {
      filter: saturate(100%) contrast(100%) brightness(100%);
    }
  }
`;

const StyledImageBase = RootStyled(ImageBase);

const Image: React.FC<ImageProps> = (props) => {
  return (
    <ImageBaseContainer>
      <StyledImageBase
        src={props.src}
        alt={props.alt}
        directStyles={props.directStyles}
      >
        {/* Add loader when ready. */}
      </StyledImageBase>
    </ImageBaseContainer>
  );
};

export default Image;
