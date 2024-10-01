import * as stylex from '@stylexjs/stylex';
import PropTypes from 'prop-types';

const styles = stylex.create({
  card: {
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '16px',
    color: '#333',
  },
});

const Card = ({ title, text }) => {
  return (
    <div className={stylex.props(styles.card)}>
      <h2 className={stylex.props(styles.title)}>{title}</h2>
      <p className={stylex.props(styles.text)}>{text}</p>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Card;
