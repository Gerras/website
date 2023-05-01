import React, { useMemo } from 'react';
import { CSSObject } from 'styled-components';
import Label from '../Label';
import { TypographyProps } from '../../Typography/Typography';
import { useFormContext } from '../Form.context';

interface LabelProps extends TypographyProps {
  htmlFor: string;
}

const FormLabel: React.FC<LabelProps> = (props) => {
  const { inline } = useFormContext();
  const styles = useMemo<CSSObject>(() => {
    return {
      marginRight: inline ? '8px' : undefined
    };
  }, [inline]);
  return (
    <Label directStyles={styles} gutterBottom={!inline} id={props.htmlFor}>
      {props.children}
    </Label>
  );
};

export default FormLabel;
