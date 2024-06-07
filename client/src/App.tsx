import styled from "styled-components";
import "./App.css";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import Button from "./components/Button";

const Wrapper = styled.div`
  background-image: url("public/img/main_background.png");
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  width: calc(100vw - 40%);
  height: calc(100vh - 20%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(50px);
  /* background-color: #73b9ff; */
  border-radius: 10px;

  @media screen and (max-width: 1250px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 357px;
    height: 603px;
  }
`;

const LeftSection = styled.div`
  /* height: 300px; */
  h1 {
    font-size: 40px;
    color: #a9eaff;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 18px;
    color: #000000;
    text-align: center;
  }
`;

const RightSection = styled.form`
  display: flex;
  flex-direction: column;

  .register_btn {
    margin-top: 15px;
    text-underline-offset: 3px;
    text-align: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const App = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onClick = () => {
    alert("Asd");
  };

  return (
    <Wrapper>
      <Section>
        <LeftSection>
          <h1>나만의 일기를 기록해보세요</h1>
          <p>로그인 후 이용 가능합니다</p>
        </LeftSection>

        <RightSection onSubmit={handleSubmit(onClick)}>
          <p>아이디</p>
          <Input width="300px" height="45px" type="email" id="email" required />

          <p>비밀번호</p>
          <Input
            width="300px"
            height="45px"
            type="password"
            id="password"
            required
          />
          <Button disabled={isSubmitting} width="300px" height="45px">
            로그인
          </Button>

          <p className="register_btn">회원가입하기</p>
        </RightSection>
      </Section>
    </Wrapper>
  );
};

export default App;
