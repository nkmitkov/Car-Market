import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

export default function Header() {
    const { onLogout, email, isAuthenticated } = useContext(AuthContext);
    
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src="/images/logo.png" style={{ width: "120px" }} />
                            </Link>
                            <ul className="nav">
                                <li className="scroll-to-section"><Link to="/">Home</Link></li>
                                <li className="scroll-to-section"><Link to="/catalog/women">Women's</Link></li>
                                <li className="scroll-to-section"><Link to="/catalog/men">Men's</Link></li>
                                <li className="scroll-to-section"><Link to="/contacts">Contacts</Link></li>

                                {!isAuthenticated
                                    ?
                                        <>
                                            <li className="scroll-to-section"><Link to="/login">Login</Link></li>
                                            <li className="scroll-to-section"><Link to="/register">Register</Link></li>
                                        </> 
                                    :
                                        <>
                                            <li className="scroll-to-section"><Link onClick={onLogout}>Logout</Link></li>
                                            <span> | {email}</span>
                                        </>
                                }

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};