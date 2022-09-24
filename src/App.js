import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Authentication/Login";
import Register from "./Component/Authentication/Register";
import Home from "./Component/Home/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
