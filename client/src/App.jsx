import { Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {

  return (
    <>
        <Preloader />
        <Header />

        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/contacts" element={ <Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
    </>
  );
};

export default App