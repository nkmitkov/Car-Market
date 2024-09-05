import WomenMainBanner from "./WomenMainBanner";

export default function WomenCatalog() {

    return (
        <>
            <WomenMainBanner />

            <section className="our-team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Ladies choice</h2>
                                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                            </div>
                        </div>
                        <div className="col-lg-12" style={{ display: "flex", flexWrap: "wrap" }}>

                            <div className="item" style={{ maxWidth: "370px" }}>
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src="/images/men-01.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Spring</h4>
                                    <span>$120.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};