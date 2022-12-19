import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ZIndex } from "../../constants/z-index.const";

interface OverlayProps {
  id: string;
  children?: React.ReactNode;
}

const OverlayRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${() => ZIndex.overlay};
`;

const Overlay: React.FC<OverlayProps> = (props) => {
  //   useEffect(() => {
  //     return () => {
  //       const element = document.getElementById("overlay");
  //       element?.remove();
  //     };
  //   }, []);

  useEffect(() => {
    console.log("mounting");
    return () => {
      console.log("CLEANUP");
    };
  }, []);

  return createPortal(
    <OverlayRoot id={props.id}>{props.children}</OverlayRoot>,
    document.body
  );
};

export default Overlay;
