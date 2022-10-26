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
import DogFood from "./Component/Shop/Food/DogFood";
import CatFood from "./Component/Shop/Food/CatFood";
import AllProducts from "./Component/Shop/AllProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FishFood from "./Component/Shop/Food/FishFood";
import BirdFood from "./Component/Shop/Food/BirdFood";
import About from "./Component/About/About";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import AddFood from "./Component/AddFood/AddFood";

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
          <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/veterinarian" element={<Veterinarian />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/addFood" element={<AddFood />}></Route>

          <Route path="/shop" element={
          <RequireAuth>
            <Shop />
          </RequireAuth>
          }>

            <Route index element={
              <RequireAuth>
              <AllProducts />
            </RequireAuth>
            } />
            <Route path="dogFood" element={<DogFood />} />
            <Route path="catFood" element={<CatFood />} />
            <Route path="fishFood" element={<FishFood />} />
            <Route path="birdFood" element={<BirdFood />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
            </QueryClientProvider>
    </div>
  );
}

export default App;
