export default function Header() {

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <a href="/" className="logo">
                                <img src="/images/logo.png" style={{ width: "120px" }} />
                            </a>
                            <ul className="nav">
                                <li className="scroll-to-section"><a href="/">Home</a></li>
                                <li className="scroll-to-section"><a href="/catalog/women">Women's</a></li>
                                <li className="scroll-to-section"><a href="/catalog/men">Men's</a></li>
                                <li className="scroll-to-section"><a href="/contacts">Contacts</a></li>
                                <li className="scroll-to-section"><a href="/login">Login</a></li>
                                <li className="scroll-to-section"><a href="/register">Register</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};