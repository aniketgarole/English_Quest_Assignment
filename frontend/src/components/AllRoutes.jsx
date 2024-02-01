import { Route, Routes } from "react-router-dom";
import AllBooks from "../pages/AllBooks";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import { PrivateRoutes } from "./PrivateRoutes";



export const AllRoutes = () => {
  return <Routes >
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>

      <Route path="/" element={<PrivateRoutes><AllBooks/></PrivateRoutes>}></Route>
  </Routes>;

};
