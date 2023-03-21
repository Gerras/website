import React from 'react';
interface TextProps {
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = (props) => {
  return <>{props.children}</>;
};

export default Text;
