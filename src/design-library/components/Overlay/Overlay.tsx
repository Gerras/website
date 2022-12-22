import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ZIndex } from "../../constants/z-index.const";
import useMenuContext from "../Menu/MenuContext.hook";

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
  const context = useMenuContext();

  return createPortal(
    <OverlayRoot onClick={context.handleClose} id={props.id}>
      {props.children}
    </OverlayRoot>,
    document.body
  );
};

export default Overlay;
