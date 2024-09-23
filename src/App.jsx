import Button from './Button';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  override: {
    backgroundColor: 'black',
    color: 'white',
  },
});

const App = () => {
  return (
    <div>
      <h1>Meta StyleX</h1>
      <Button
        text="Get Started"
        isHighlighted
        variant="danger"
        style={styles.override}
      />
    </div>
  );
};

export default App;
