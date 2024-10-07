import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

// SupTheme theme
export const supTheme = stylex.createTheme(colors, {
  primaryText: { default: 'navy', [DARK]: 'cyan' },
  background: { default: '#ccc', [DARK]: 'black' },
  borderRadius: '2px',
  border: '2px solid',
  borderColor: { default: 'navy', [DARK]: 'cyan' },
});
