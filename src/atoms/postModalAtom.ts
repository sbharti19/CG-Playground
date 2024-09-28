import { atom } from 'recoil';

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});

export const postState = atom<any>({
  key: 'postState',
  default: null,
});