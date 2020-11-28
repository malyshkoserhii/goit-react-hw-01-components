import styles from './StatisticalTitle.module.css';
import PropTypes from 'prop-types';

const StatisticalTitle = ({ title, children }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

StatisticalTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticalTitle;
