import styled from "styled-components";
import Button from "../../components/Button";
import Input, { IFormValues } from "../../components/Input";
import Label from "../../components/Label";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/img/regi_back.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const RegForm = styled.form`
  width: 600px;
  height: 600px;
  /* border: 1px solid blue; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);

  .regi_title {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 500;
  }

  .log_btn {
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    width: 420px;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 3px;
  }
`;

const Register = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const navigate = useNavigate();

  return (
    <Container>
      <RegForm onSubmit={handleSubmit(() => {})}>
        <p className="regi_title">회원 가입</p>

        <InputBox>
          <Label htmlFor="email">이메일</Label>
          <Input
            width="350px"
            height="60px"
            id="email"
            placeholder="이메일 주소"
            label="email"
            register={register}
            required
          />
        </InputBox>

        <InputBox>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            width="350px"
            height="55px"
            id="nickname"
            placeholder="닉네임"
            label="nickname"
            register={register}
            required
          />
        </InputBox>

        <InputBox>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            width="350px"
            height="55px"
            id="password"
            placeholder="비밀번호"
            label="password"
            register={register}
            required
          />
        </InputBox>

        <InputBox>
          <Label htmlFor="checkPassword">비밀번호 확인</Label>
          <Input
            width="350px"
            height="55px"
            id="checkPassword"
            placeholder="비밀번호를 한번 더 입력해주세요"
            label="checkPassword"
            register={register}
            required
          />
        </InputBox>

        <Button width="350px" height="50px">
          가입하기
        </Button>

        <p
          className="log_btn"
          onClick={() => {
            navigate("/");
          }}
        >
          로그인하러 가기
        </p>
      </RegForm>
    </Container>
  );
};

export default Register;
