import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Authentication/Login";
import Register from "./Component/Authentication/Register";
import Home from "./Component/Home/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Shop from "./Component/Shop/Shop";
import Veterinarian from "./Component/Veterinarian/Veterinarian";
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/veterinarian" element={<Veterinarian />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
