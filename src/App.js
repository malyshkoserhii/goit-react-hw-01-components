import Profile from './components/Profile/Profile';
import StatisticalTitle from './components/Statistic/StatisticalTitle/StatisticalTitle';
import StatisticalList from './components/Statistic/StatisticalList/StatisticalList';
import FriendList from './components/Friend/FriendList/FriendList';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

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
      <div>
        <FriendList friends={friends} />
      </div>
    </>
  );
};

export default App;
