import Profile from './Profile/Profile';
import user from '../database/user.json';

import Statistics from './Statistics/Statistics';
import data from '../database/data.json';

import FriendList from './FriendList/FriendList';
import dataFriends from '../database/friends.json';

import TransactionHistory from './TransactionHistory/TransationHistory';
import transactions from '../database/transactions.json';

export const App = () => {
  return (
    <>
      < Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      < Statistics title="Upload stats" stats={data} />
      < FriendList friends={dataFriends} />
      < TransactionHistory items={transactions} />;
    </>
  );
};
