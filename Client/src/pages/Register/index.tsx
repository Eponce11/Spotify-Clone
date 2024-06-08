import { useState } from "react";
import { Container, Header, BodyWrapper } from "../Login/components";
import { EmailCard, PasswordCard, UsernameCard } from "./components";

const Register = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <Container>
      <Header />
      <BodyWrapper>
        {step === 0 && <EmailCard setStep={setStep} />}
        {step === 1 && <PasswordCard setStep={setStep} />}
        {step === 2 && <UsernameCard setStep={setStep} />}
      </BodyWrapper>
    </Container>
  );
};

export default Register;
