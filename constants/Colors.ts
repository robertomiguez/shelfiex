// Colors.ts
export const Colors = {
  // Shared colors that don't change between themes
  shared: {
    primary: '#05b256',
    secondary: '#028a3d',
    warning: '#ffcc00',
  },

  // Theme-specific colors
  dark: {
    primary: '#05b256',
    secondary: '#028a3d',
    warning: '#ffcc00',
    background: '#021f04',
    navBackground: '#021f04',
    text: '#ffffff',
    title: '#fff',
    iconColor: '#ffffff',
    iconColorFocused: '#777777ff',
    uiBackground: '#021f04da',
    link: '#ffffff',
    btn: '#94fcc5ff',
    btnText: '#0a2e0a',
    card: '#0a2e0a',
    shadow: '#000',
  },

  light: {
    primary: '#05b256',
    secondary: '#028a3d',
    warning: '#ffcc00',
    background: '#94fcc5ff',
    navBackground: '#94fcc5ff',
    text: '#000000',
    title: '#000000',
    iconColor: '#000000',
    iconColorFocused: '#869676ff',
    uiBackground: '#94fcc5ff',
    link: '#014d2e',
    btn: '#05b256',
    btnText: '#ffffff',
    card: '#ffffff',
    shadow: '#000',
  },
};

export type ThemeColors = typeof Colors.light;
