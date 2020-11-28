import StatisticalInformation from '../StatisticalInformation/StatisticalInformation';
import styles from './StatisticalList.module.css';
import PropTypes from 'prop-types';

const StatisticalList = ({ stats }) => {
  return (
    <ul className={styles.statList}>
      {stats.map(el => (
        <li key={el.id} style={{ backgroundColor: el.color }}>
          <StatisticalInformation label={el.label} percentage={el.percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticalList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default StatisticalList;
