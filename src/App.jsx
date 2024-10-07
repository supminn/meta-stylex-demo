import Button from './components/Button';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from './tokens.stylex';
import { supTheme } from './theme';

const styles = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background,
    padding: spacing.medium,
    border: colors.border,
    borderRadius: colors.borderRadius,
  },
  override: {
    backgroundColor: 'purple',
    color: 'white',
  },
  main: {
    margin: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
});

const App = () => {
  return (
    <div {...stylex.props(supTheme, styles.container)}>
      <h1>StyleX by Meta</h1>
      <p>
        StyleX is a CSS-in-JS library that generates atomic CSS classes at
        compile-time.
      </p>
      <div {...stylex.props(styles.main)}>
        <Button text="Base Button" />
        <Button text="Highlighted Button" isHighlighted />
        <Button text="Danger Button" isHighlighted variant="danger" />
        <Button text="Primary Button" variant="primary" />
        <Button
          text="Overriden Button"
          isHighlighted
          variant="danger"
          style={styles.override}
        />
      </div>
    </div>
  );
};

export default App;
