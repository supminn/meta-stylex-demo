import * as stylex from '@stylexjs/stylex';

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});

// A constant can be used to avoid repeating the media query
export const DARK = '@media (prefers-color-scheme: dark)';

// This function is processed at compile-time and CSS variable names are automatically generated.
export const colors = stylex.defineVars({
  primaryText: { default: 'black', [DARK]: 'white' },
  background: { default: 'white', [DARK]: 'black' },
  borderRadius: '4px',
  border: '4px solid',
  borderColor: { default: 'black', [DARK]: 'white' },
});
