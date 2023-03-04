import { Profile } from "../Profile/Profile";
import userProfile from "../Profile/user.json"
import { Container } from "./AppStyled";


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
    </Container>
  );
};
