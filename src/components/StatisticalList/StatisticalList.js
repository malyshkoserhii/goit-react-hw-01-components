import StatisticalInformation from '../StatisticalInformation/StatisticalInformation';
import PropTypes from 'prop-types';

const StatisticalList = ({ stats }) => {
  return (
    <ul>
      {stats.map(el => (
        <li key={el.id}>
          <StatisticalInformation label={el.label} percentage={el.percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticalList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default StatisticalList;
