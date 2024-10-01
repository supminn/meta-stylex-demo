import * as stylex from '@stylexjs/stylex';
import PropTypes from 'prop-types';

const styles = stylex.create({
  base: {
    fontSize: 18,
    backgroundColor: {
      default: 'teal',
      ':hover': 'blue',
    },
    color: 'white',
    width: {
      default: '100px',
      '@media (max-width: 800px)': '100%',
    },
  },
  highlighted: {
    backgroundColor: 'orange',
  },
  danger: {
    backgroundColor: 'red',
  },
  primary: {
    backgroundColor: 'green',
  },
});

const Button = ({ text, isHighlighted, variant, style }) => {
  return (
    <button
      {...stylex.props(
        styles.base,
        isHighlighted && styles.highlighted,
        styles[variant],
        style
      )}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
  variant: PropTypes.oneOf(['highlighted', 'danger', 'primary']),
  style: PropTypes.object,
};

export default Button;
