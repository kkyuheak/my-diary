import DiaryBox from "../../components/DiaryBox";
import { userData } from "../../user_data";

const Home = () => {
  const data = userData.diary;

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <DiaryBox
            title={item.title}
            main={item.main}
            weather={item.weather}
            weatherIcon={item.weatherIcon}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default Home;
