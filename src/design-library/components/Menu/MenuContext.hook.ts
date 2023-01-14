import { createContext, useContext } from 'react';

export interface MenuContext {
  handleClose: () => void;
}

export const MenuContext = createContext<MenuContext | undefined>(undefined);

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('No context found for the menucontext. Please define one.');
  }

  return context;
};

export default useMenuContext;
