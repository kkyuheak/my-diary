import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  width: calc(100% - 35%);
  height: 100vh;
  background-color: #a7a7a7;
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
    height: calc(100% - 100px);

    &::placeholder {
      font-size: 20px;
    }
  }
`;

const SelectBox = styled.div`
  border: 1px solid red;
  width: 300px;
`;

const SelWeather = styled.ul`
  list-style: none;
  background-color: #dfdfdf;
`;

const Post = () => {
  return (
    <Container>
      <Wrapper>
        <TextArea placeholder="제목을 입력해주세요"></TextArea>
        <SelectBox>
          <p>날씨를 선택하세요</p>
          <SelWeather>
            <li>맑음</li>
            <li>흐림</li>
            <li>비</li>
          </SelWeather>
        </SelectBox>
        <TextArea
          placeholder="오늘의 하루를 적어보세요!"
          className="main_text"
        ></TextArea>
        <button>등록하기</button>
      </Wrapper>
    </Container>
  );
};

export default Post;
