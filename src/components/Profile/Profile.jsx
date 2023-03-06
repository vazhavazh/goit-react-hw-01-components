import { Card } from './ProfileStyled';
import PropTypes from 'prop-types';
import {
  ContainerDetailsStyled,
  StatsListStyled,
  StatItemStyled,
  UserNameStyled,
  UserMainTextStyled,
  StatValueStyled,
  Frame1,
  Frame2,
} from './ProfileStyled';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Card>
      <ContainerDetailsStyled>
        <Frame1>
          <Frame2>
            <img
              src={avatar}
              alt="User avatar"
              className="avatar"
              width="450"
            />
          </Frame2>
        </Frame1>
        <UserNameStyled>{userName}</UserNameStyled>
        <UserMainTextStyled>@{tag}</UserMainTextStyled>
        <UserMainTextStyled>{location}</UserMainTextStyled>
      </ContainerDetailsStyled>
      <StatsListStyled>
        <StatItemStyled>
          <UserMainTextStyled>Followers</UserMainTextStyled>
          <StatValueStyled>{followers}</StatValueStyled>
        </StatItemStyled>
        <StatItemStyled>
          <UserMainTextStyled>Views</UserMainTextStyled>
          <StatValueStyled>{views}</StatValueStyled>
        </StatItemStyled>
        <StatItemStyled>
          <UserMainTextStyled>Likes</UserMainTextStyled>
          <StatValueStyled>{likes}</StatValueStyled>
        </StatItemStyled>
      </StatsListStyled>
    </Card>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
