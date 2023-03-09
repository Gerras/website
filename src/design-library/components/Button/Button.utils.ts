import { ButtonSize, ButtonType } from './Button.types';
import { DefaultTheme, StyledComponent } from 'styled-components';
import { ButtonRootProps } from './ButtonTypes/ButtonRoot';
import PrimaryButton from './ButtonTypes/PrimaryButton';
import RootStyled from '../Root/Root';
import SecondaryButton from './ButtonTypes/SecondaryButton';
import TertiaryButton from './ButtonTypes/TertiaryButton';

export const paddingMap: Record<ButtonSize, [number, number]> = {
  sm: [5, 15],
  md: [6, 16],
  lg: [8, 18]
};

export const buttonComponentMap: Record<
  ButtonType,
  StyledComponent<'button', DefaultTheme, ButtonRootProps>
> = {
  primary: RootStyled(PrimaryButton),
  secondary: RootStyled(SecondaryButton),
  tertiary: RootStyled(TertiaryButton)
};
