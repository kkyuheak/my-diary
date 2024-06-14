import styled from "styled-components";

interface IDiaryBoxProps {
  postId?: number;
  title: string;
  main: string;
  weather: string;
  weatherIcon: string;
}

const Container = styled.div`
  width: 600px;
  height: 550px;
  background-color: #c4c4c4;
  border-radius: 10px;
  margin: auto;
  padding: 20px;
  margin-top: 30px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 500;
`;

const Main = styled.p`
  font-size: 18px;
  color: #5c5c5c;
  margin-top: 80px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Weather = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DiaryBox = ({ title, main, weatherIcon, weather }: IDiaryBoxProps) => {
  return (
    <Container>
      <Top>
        <Title>{title}</Title>
        <Weather>
          <p>날씨: {weather}</p>
          <img src={`./img/${weatherIcon}`} alt={weatherIcon} />
        </Weather>
      </Top>
      <Main>{main}</Main>
    </Container>
  );
};

export default DiaryBox;
