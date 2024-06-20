import { useState } from "react";
import { Container, Header, BodyWrapper } from "../Login/components";
import { EmailCard, PasswordCard, UsernameCard } from "./components";

const Register = () => {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  return (
    <Container>
      <Header />
      <BodyWrapper>
        {step === 0 && (
          <EmailCard setStep={setStep} email={email} setEmail={setEmail} />
        )}
        {step === 1 && (
          <PasswordCard
            setStep={setStep}
            password={password}
            setPassword={setPassword}
          />
        )}
        {step === 2 && (
          <UsernameCard
            setStep={setStep}
            username={username}
            setUsername={setUsername}
            email={email}
            password={password}
          />
        )}
      </BodyWrapper>
    </Container>
  );
};

export default Register;
