export default function CustomBanner({
    page
}) {
    let titleOne = "";
    let titleTwo = "";
    let customClass = "";

    if (page === "home") {
        customClass = "home-page-heading";
        titleOne = "We Are ";
        titleTwo = '"Neat Fashion"';
    } else if (page === "women") {
        customClass = "women-page-heading";
        titleOne = "Women’s ";
        titleTwo = "Neat";
    } else if (page === "men") {
        customClass = "men-page-heading";
        titleOne = "Men’s ";
        titleTwo = "Neat";
    };

    return (
        <div className={`page-heading ${customClass}`} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content" style={{ textAlign: "center" }}>
                            <h2>{titleOne}<i>{titleTwo}</i></h2>
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