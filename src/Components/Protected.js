import { useNavigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children}) => {
 const navigate = useNavigate()
 
 if (isLoggedIn !== "login success") {
    alert(isLoggedIn);
    
    setTimeout(() => { navigate("/") }, 1000)
  }
  return children;
};
export default Protected;