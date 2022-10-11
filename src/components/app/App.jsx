import { Profile } from 'components/profile/Profile';
import { Statistics } from '../statistics/Statistics';
import userData from '../user.json';
import statsData from '../data.json';

export const App = () => {

  const { username, tag, location, avatar, stats: { followers, views, likes } } = userData;
  const { label, percentage } = statsData;
  
  return (
    <>
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
      title={label}
      stats={percentage}
    />
    </>
  );
};
