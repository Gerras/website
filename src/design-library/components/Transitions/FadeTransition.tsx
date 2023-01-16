import React, { useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import styled, { CSSObject } from 'styled-components';

interface FadeTransitionProps {
  children: React.ReactNode;
  in: boolean;
  duration: number;
}

const FadeRoot = styled.div`
  opacity: 0;
`;

const transitionStyles: Record<TransitionStatus, CSSObject> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { display: 'none' }
};

const FadeTransition: React.FC<FadeTransitionProps> = (props) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={props.in} timeout={props.duration}>
      {(state) => (
        <FadeRoot
          ref={nodeRef}
          style={{
            transition: `opacity ${props.duration}ms ease-in-out`,
            opacity: 0,
            ...transitionStyles[state]
          }}
        >
          {props.children}
        </FadeRoot>
      )}
    </Transition>
  );
};

export default FadeTransition;
