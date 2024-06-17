import styled from "styled-components";
import { PiSun, PiCloudSunFill } from "react-icons/pi";
import { TiWeatherDownpour, TiWeatherCloudy } from "react-icons/ti";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.form`
  width: calc(100% - 35%);
  height: 100vh;
  background-color: #e4e4e4;
  padding: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  height: 65px;
  outline: none;
  font-size: 35px;
  padding: 10px;

  &.main_text {
    font-size: 20px;
    height: calc(100vh - 45%);

    &::placeholder {
      font-size: 20px;
    }
  }
`;

const SelectBox = styled.div`
  width: 300px;
  background-color: #d1d1d1;
  padding: 10px;
  border-radius: 10px;
  margin: 8px 0;
`;

const BoxTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const SelWeather = styled.ul`
  margin: 5px 0;
  list-style: none;
  background-color: #dfdfdf;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 7px 10px;
  border-radius: 10px;

  li {
    font-size: 14px;
    padding: 4px 0;
    width: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &.click {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const UpBtn = styled.button`
  display: block;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  float: right;
  background-color: rgb(135, 242, 205);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface IPostText {
  title: string;
  main: string;
}

const Post = () => {
  const [weather, setWeather] = useState(0);

  const { handleSubmit, register } = useForm<IPostText>();

  const onSubmit: SubmitHandler<IPostText> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          placeholder="제목을 입력해주세요"
          {...register("title")}
        ></TextArea>
        <SelectBox>
          <BoxTitle>오늘의 날씨</BoxTitle>
          <SelWeather>
            <li
              className={weather === 0 ? "click" : ""}
              onClick={() => {
                setWeather(0);
              }}
            >
              <p>맑음</p>
              <PiSun size={35} />
            </li>
            <li
              className={weather === 1 ? "click" : ""}
              onClick={() => {
                setWeather(1);
              }}
            >
              <p>흐림</p>
              <TiWeatherCloudy size={35} />
            </li>
            <li
              className={weather === 2 ? "click" : ""}
              onClick={() => {
                setWeather(2);
              }}
            >
              <p>약간 흐림</p>
              <PiCloudSunFill size={35} />
            </li>
            <li
              className={weather === 3 ? "click" : ""}
              onClick={() => {
                setWeather(3);
              }}
            >
              <p>비</p>
              <TiWeatherDownpour size={35} />
            </li>
          </SelWeather>
        </SelectBox>
        <TextArea
          placeholder="오늘의 하루를 적어보세요!"
          className="main_text"
          {...register("main")}
        ></TextArea>
        <UpBtn>등록하기</UpBtn>
      </Wrapper>
    </Container>
  );
};

export default Post;
