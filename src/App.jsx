import Button from './components/Button';
import Card from './components/Card';
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
      <h1>StyleX by Meta</h1>
      <Button
        text="Get Started"
        isHighlighted
        variant="danger"
        style={styles.override}
      />
      <Card text="This is a card" title="Card" />
    </div>
  );
};

export default App;
