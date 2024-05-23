import { Container, Header, BodyWrapper } from "../Login/components";
import { EmailCard, PasswordCard } from "./components";

const Register = () => {
  return (
    <Container>
      <Header />
      <BodyWrapper>
        <PasswordCard />
      </BodyWrapper>
    </Container>
  );
};

export default Register;
