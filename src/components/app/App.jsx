import { Profile } from '../profile';
import { Statistics } from '../statistics';
import { FriendList } from '../friendList';
import { TransactionHistory } from '../transactionHistory';
import userData from '../user.json';
import statsData from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Container } from './App.styled';

export const App = () => {

  const { username, tag, location, avatar, stats: { followers, views, likes } } = userData;

  return (
    <Container>
      <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}
      />
      <Statistics
          stats={statsData}
          title='Upload stats'
      />
      <FriendList
          friends={friends}
      />
      <TransactionHistory
          items={transactions}
      />
    </Container>
  );
};
