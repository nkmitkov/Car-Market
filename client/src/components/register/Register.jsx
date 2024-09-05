import RegisterBanner from "./RegisterBanner";

export default function Register() {

    return (
        <>
            <RegisterBanner />

            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" style={{ margin: "0 auto" }}>
                            <div className="section-heading" style={{ marginBottom: "20px" }}>
                                <h2>Some text</h2>
                                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                            </div>
                            <form id="register" action="" method="post">
                                <div className="row" style={{ display: "block" }}>
                                    <div className="col-lg-6" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your name" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <input name="email" type="text" id="email" placeholder="Your email" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <input name="password" type="password" placeholder="Your password" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <input name="rePassword" type="password" placeholder="Retype your password" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12" style={{ margin: "10px 0" }}>
                                        <fieldset>
                                            <button type="submit" id="form-submit" style={{ width: "100px" }}>Register</button>
                                        </fieldset>
                                    </div>
                                    <div className="section-heading" style={{ margin: "10px 0" }}>
                                        <span style={{ paddingLeft: "15px" }}>If you already have an account&nbsp;<a href="/login"
                                            className="redirect-btn">Login</a></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};