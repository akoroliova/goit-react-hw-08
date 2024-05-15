import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations.js";
import { useAuth } from "../hooks";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route
    //       path="/register"
    //       element={
    //         <RestrictedRoute
    //           redirectTo="/contacts"
    //           component={<RegisterPage />}
    //         />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
    //       }
    //     />
    //     <Route
    //       path="/contacts"
    //       element={
    //         <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
    //       }
    //     />
    //   </Routes>
    //   </Layout>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/cntacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
