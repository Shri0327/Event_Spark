import "./App.css";
import "./Org.css"
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Events from "../components/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Organise from "../components/Organise";
import Offline from "../components/Offline";
import Online from "../components/Online";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/organise" element={<Organise/>}></Route>
          <Route path="/offline" element={<Offline/>}></Route>
          <Route path="/online" element={<Online/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
