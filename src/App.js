import Profile from './components/Profile/Profile';
import StatisticalTitle from './components/StatisticalTitle/StatisticalTitle';
import StatisticalList from './components/StatisticalList/StatisticalList';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';

const App = () => {
  return (
    <>
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <StatisticalTitle title="Upload Stats">
          <StatisticalList stats={statisticalData} />
        </StatisticalTitle>
      </div>
    </>
  );
};

export default App;
