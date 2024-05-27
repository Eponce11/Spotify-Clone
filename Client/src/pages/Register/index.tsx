import { Container, Header, BodyWrapper } from "../Login/components";
import { EmailCard, PasswordCard, UsernameCard } from "./components";

const Register = () => {
  return (
    <Container>
      <Header />
      <BodyWrapper>
        <UsernameCard />
      </BodyWrapper>
    </Container>
  );
};

export default Register;
