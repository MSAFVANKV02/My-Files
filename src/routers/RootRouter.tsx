import App from "@/App";
import ProtectedRoute from "@/middlewares/ProtectedRoute";
import UserLoginPage from "@/pages/(auth)/login/UserLoginPage";
import UserRegisterPage from "@/pages/(auth)/register/UserRegisterPage";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const rootRouter = createBrowserRouter([
  {
    path: "/login",
    element: <UserLoginPage />,
  },
  {
    path: "/",
    element: (
      <>
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      </>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
   
      {
        path: "/register",
        element: <UserRegisterPage />,
      },
    ],
  },
]);

export default rootRouter;
