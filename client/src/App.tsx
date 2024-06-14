import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import Post from "./pages/write/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },

  {
    path: "/write",
    element: <Post />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
