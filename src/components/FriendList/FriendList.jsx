import PropTypes from 'prop-types';

import { FriendListElem } from './FriendListItem/FriendListItem';
import { FriendListStyled } from './FriendListStyled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => (
        <FriendListElem friend={friend} key={friend.id} />
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
