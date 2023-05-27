import { Container} from "react-bootstrap";
import './App.css';
import Register from "./Components/Register";
import FreeComponent from "./Components/FreeComponent";
import AuthComponent from "./Components/AuthComponent";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

return(
  <Container>
      {/* create routes here */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/free" element = {<FreeComponent />} />
        <Route path="/auth" element = {<AuthComponent />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
