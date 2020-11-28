import styles from './StatisticalInformation.module.css';
import PropTypes from 'prop-types';

const StatisticalInformation = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
};

StatisticalInformation.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticalInformation;
