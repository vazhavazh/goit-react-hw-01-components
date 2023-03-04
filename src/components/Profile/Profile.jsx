import {Card} from "./ProfileStyled"
import PropTypes from "prop-types"
import { ContainerDetailsStyled } from "./ContainerDetails/ContainerDetailsStyled"
import { StatsListStyled } from "./StatsList/StatsListStyled"
import { StatItemStyled } from "./StatsList/StatItem/StatItemStyled"
import {UserNameStyled} from "./ContainerDetails/UserName/UserNameStyled"
import {UserMainTextStyled} from "./UserMainText/UserMainTextStyled"
import {StatValueStyled} from "./StatsList/StatItem/StatValue/StatValueStyled"


export const Profile = ({
    userName,
    tag,
    location,
    avatar,
    stats
}) => {
    const { followers, views, likes } = stats
    return (
        <Card>
  <ContainerDetailsStyled>
<div className="frame1">
<div className="frame2">
<img
 src={avatar}
alt="User avatar"
 className="avatar"
width="450"
    />
</div>
</div>
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
    )
}

Profile.propTypes = {
    userName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,

}