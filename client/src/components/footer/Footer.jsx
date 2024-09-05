export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row" style={{ justifyContent: "space-between"}} >
                    <div className="col-lg-3">
                        <div className="first-item">
                            <div className="logo">
                                <img src="/images/white-logo.png" alt="neatfashion ecommerce" style={{ width: "130px" }} />
                            </div>
                            <ul>
                                <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                                <li><a href="#">neatfashion@company.com</a></li>
                                <li><a href="#">010-020-0340</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4>Shopping &amp; Categories</h4>
                        <ul>
                            <li><a href="/catalog/men">Men’s Shopping</a></li>
                            <li><a href="/catalog/women">Women’s Shopping</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="/">Homepage</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contacts">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* {{!-- < div className="col-lg-3">
                    <h4>Help &amp; Information</h4>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Tracking ID</a></li>
                    </ul>
                </div> --}} */}
                    <div className="col-lg-12">
                        <div className="under-footer">
                            <p>Copyright © 2024 NeatFashion Co., Ltd. All Rights Reserved.

                                <br />Design: <a href="https://templatemo.com" target="_blank"
                                    title="free css templates">TemplateMo</a>
                            </p>
                            <ul>
                                <li><a href="#fb-neat-fashion"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#twitter-neat-fashion"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#linkedin-neat-fashion"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};