import { useState, MouseEvent } from 'react';

export const useMenuPopover = <T = HTMLElement>() => {
  const [anchorEl, setAnchorEl] = useState<T | null>(null);
  const openMenu = (e: MouseEvent<T>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return {
    open: !!anchorEl,
    closeMenu,
    openMenu,
    anchorEl,
  };
};
