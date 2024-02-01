import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({children}) => {

  const isAuth = useSelector(store => store.authReducer.isAuth)
  const location = useLocation()
  const token = localStorage.getItem("EnglishQuestToken")


  if (!token) {
    return <Navigate to="/login" state={location.pathname}/>
  }

  return <div>
    {children}
  </div>;
};
