import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import Preloader from "./components/preloader/Preloader";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import WomenCatalog from "./components/women-catalog/WomenCatalog";
import MenCatalog from "./components/men-catalog/MenCatalog";
import Details from "./components/details/Details";

function App() {

    return (
        <>
            <AuthProvider>
                <Preloader />
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/women" element={<WomenCatalog />} />
                    <Route path="/catalog/men" element={<MenCatalog />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/catalog/men/:productId" element={<Details />} />
                    <Route path="/catalog/women/:productId" element={<Details />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                <Footer />
            </AuthProvider>
        </>
    );
};

export default App