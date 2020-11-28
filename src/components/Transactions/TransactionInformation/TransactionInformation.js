import styles from './TransactionInformation.module.css';
import PropTypes from 'prop-types';

const TransactionInformation = ({ type, amount, currency }) => {
  return (
    <tr className={styles.currencyInfoString}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionInformation.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
};

export default TransactionInformation;
