// 임시 유저데이터

interface IDiary {
  postId: number;
  title: string;
  main: string;
  weatherIcon: string;
  weather: string;
  createdAt: Date;
}

interface IUserData {
  email: string;
  password: string;
  nickname: string;
  diary: IDiary[];
}

export const userData: IUserData = {
  email: "test@test.com",
  password: "12345",
  nickname: "토뭉",
  diary: [
    {
      postId: 1,
      title: "어지러운 하루",
      main: "오늘은 비가 오는 날씨이다.",
      weatherIcon: "rain_icon.png",
      weather: "비",
      createdAt: new Date(),
    },
    {
      postId: 2,
      title: "상쾌한 하루",
      main: "오늘은 해가 짱짱한 날씨이다.",
      weatherIcon: "rain_icon.png",
      weather: "맑음",
      createdAt: new Date(),
    },
  ],
};
