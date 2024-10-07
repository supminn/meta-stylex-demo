import * as stylex from '@stylexjs/stylex';
import PropTypes from 'prop-types';

const styles = stylex.create({
  base: {
    fontSize: 18,
    backgroundColor: {
      default: 'black',
      ':hover': 'blue',
    },
    color: 'white',
    width: {
      default: '100px',
      '@media (max-width: 800px)': '100%',
    },
  },
  highlighted: {
    margin: '1rem',
    backgroundColor: 'orange',
  },
  danger: {
    backgroundColor: 'red',
  },
  primary: {
    margin: '1rem',
    backgroundColor: 'green',
  },
});

const Button = ({ text, isHighlighted, variant, style, theme }) => {
  return (
    <button
      {...stylex.props(
        theme,
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
  theme: PropTypes.object,
};

export default Button;
