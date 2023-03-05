import userProfile from "../user.json"
import data from "../data.json"
import friends from "../friends.json"

import { Container } from "./AppStyled";
import { Profile } from "../components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import {FriendList} from "components/FriendList/FriendList"


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
      
    </Container>
  );
};
