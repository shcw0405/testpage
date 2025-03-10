import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import News from "./pages/News";
import Team from "./pages/Team";
import Docs from "./pages/Docs";
import ErrorBoundary from "./components/ErrorBoundary";

// 使用与vite.config.js中相同的基础路径
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/docs",
          element: <Docs />,
        },
      ],
    },
  ],
  {
    basename: "/ArticuChic_DSD/", // 添加与vite.config.js中相同的基础路径
  }
);

export default router;
