import userProfile from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Container } from './AppStyled';
import { Profile } from '../components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistoryTable } from '../components/TransactionHistoryTable/TransactionHistoryTable';

export const App = () => {
  return (
    <Container>
      <Profile
        userName={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistoryTable transactions={transactions} />
    </Container>
  );
};
