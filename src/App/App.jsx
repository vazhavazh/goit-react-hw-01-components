import userProfile from "../user.json"
import data from "../data.json"
import { Profile } from "../components/Profile/Profile";
import { Container } from "./AppStyled";
import { Statistics } from "components/Statistics/Statistics";



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

    </Container>
  );
};
