import { Container, Header, BodyWrapper } from "../Login/components";
import { SpotifyLoginCard } from "../../common/components";

const SpotifyLogin = () => {
  return (
    <Container>
      <Header />
      <BodyWrapper>
        <SpotifyLoginCard />
      </BodyWrapper>
    </Container>
  );
};

export default SpotifyLogin;
