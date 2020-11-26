import PropTypes from 'prop-types';

const StatisticalTitle = ({ title, children }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
};

StatisticalTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StatisticalTitle;
