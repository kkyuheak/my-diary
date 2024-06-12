import styled from "styled-components";
import "../App.css";
import Input, { IFormValues } from "./Elements/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Elements/Button";
import { useNavigate } from "react-router-dom";
import Label from "./Elements/Label";
import { userData } from "../user_data";

const Wrapper = styled.div`
  background-image: url("/img/main_background.png");
  background-repeat: no-repeat;
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

const MainPage = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = ({ email, password }) => {
    console.log(typeof email, typeof password);
    if (email === userData.email && password === userData.password) {
      navigate("/home");
    }
  };

  return (
    <Wrapper>
      <Section>
        <LeftSection>
          <h1>나만의 일기를 기록해보세요</h1>
          <p>로그인 후 이용 가능합니다</p>
        </LeftSection>

        <RightSection onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">아이디</Label>
          <Input
            width="300px"
            height="45px"
            type="email"
            id="email"
            label="email"
            register={register}
            required
          />

          <Label htmlFor="password">비밀번호</Label>
          <Input
            width="300px"
            height="45px"
            type="password"
            id="password"
            label="password"
            register={register}
            required
          />
          <Button disabled={isSubmitting} width="300px" height="45px">
            로그인
          </Button>

          <p
            className="register_btn"
            onClick={() => {
              navigate("/register");
            }}
          >
            회원가입하기
          </p>
        </RightSection>
      </Section>
    </Wrapper>
  );
};

export default MainPage;
