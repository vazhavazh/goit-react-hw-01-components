import PropTypes from 'prop-types';

import { FriendListItem, Status, Avatar, Name } from './FriendListItemStyled';

export const FriendListElem = ({ friend }) => {
  return (
    <FriendListItem>
      <Status status={friend.isOnline}></Status>
      <Avatar src={friend.avatar} alt="User avatar" width="48" />
      <Name>{friend.name}</Name>
    </FriendListItem>
  );
};

FriendListElem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
