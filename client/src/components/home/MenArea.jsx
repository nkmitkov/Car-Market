export default function MenArea() {

    return (
        <section className="section" id="men" style={{ margin: "0 auto" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>Men's Latest</h2>
                            <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        {/* {{#each products}} */}
                        <div className="col-lg-4" style={{ margin: "10px 0" }}>
                            <div className="team-item">
                                <div className="thumb">
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <ul>
                                                <li><a href="/catalog/men/productId" style={{ width: "100px" }}>Details</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src="/images/men-01.jpg" alt="productName" style={{ width: "350px", height: "500px" }} />
                                </div>
                                <div className="down-content">
                                    <h4 style={{ width: "350px", height: "90px" }}>productName</h4>
                                    <h6>$ price</h6>
                                </div>
                            </div>
                        </div>
                        {/* {{else}} */}
                        <h4>No products yet.</h4>
                        {/* {{/each}} */}

                    </div>
                </div>
            </div>
        </section>
    );
};