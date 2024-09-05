export default function MainBanner() {

    return (
        <div className="page-heading home-page-heading" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content" style={{ textAlign: "center" }}>
                            <h2>We Are <i>Neat Fashion</i></h2>
                            <span style={{ fontSize: "20px" }}>Be awesome. Be neat.</span>
                            <div className="main-border-button" style={{ marginTop: "20px" }}>
                                <a href="/catalog/women" style={{ marginRight: "10px" }}>Women</a>
                                <a href="/catalog/men" style={{ marginLeft: "10px" }}>Men</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};