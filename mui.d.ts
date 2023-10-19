import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    blue: Palette['primary'];
    black: Palette['primary'];
    gray: Palette['primary'];
    white: Palette['primary'];
    priority: Palette['primary'];
  }

  interface PaletteOptions {
    accent: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    priority: PaletteOptions['primary'];
  }
}
