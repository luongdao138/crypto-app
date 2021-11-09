import millify from 'millify';
import NumberFormat from 'react-number-format';

export const convertNumber = (value, options) => {
  return millify(value, options);
};

const NumberFormatFc = ({ value }) => {
  return <NumberFormat thousandSeparator value={value} displayType='text' />;
};

export default NumberFormatFc;
