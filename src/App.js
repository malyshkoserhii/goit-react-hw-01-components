import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import StatisticalTitle from './components/Statistic/StatisticalTitle/StatisticalTitle';
import StatisticalList from './components/Statistic/StatisticalList/StatisticalList';
import FriendList from './components/Friend/FriendList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import friends from './data/friends.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticalTitle title="Upload Stats">
        <StatisticalList stats={statisticalData} />
      </StatisticalTitle>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
