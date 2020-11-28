import TransactionInformation from '../TransactionInformation/TransactionInformation';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.headString}>
          <th className={styles.headStringBox}>Type</th>
          <th className={styles.headStringBox}>Amount</th>
          <th className={styles.headStringBox}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <TransactionInformation
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default TransactionHistory;
