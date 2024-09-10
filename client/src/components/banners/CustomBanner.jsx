export default function CustomBanner({
    page,
    showCatalogButtons
}) {
    let titlePartOne = "";
    let titlePartTwo = "";
    let customClass = "";

    if (page === "home") {
        customClass = "home-page-heading";
        titlePartOne = "We Are ";
        titlePartTwo = '"Neat Fashion"';
    } else if (page === "women") {
        customClass = "women-page-heading";
        titlePartOne = "Women’s ";
        titlePartTwo = "Neat";
    } else if (page === "men") {
        customClass = "men-page-heading";
        titlePartOne = "Men’s ";
        titlePartTwo = "Neat";
    };

    return (
        <div className={`page-heading ${customClass}`} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content" style={{ textAlign: "center" }}>
                            <h2>{titlePartOne}<i>{titlePartTwo}</i></h2>
                            <span style={{ fontSize: "20px" }}>Be awesome. Be neat.</span>

                            {showCatalogButtons && (
                                <div className="main-border-button" style={{ marginTop: "20px" }}>
                                <a href="/catalog/women" style={{ marginRight: "10px" }}>Women</a>
                                <a href="/catalog/men" style={{ marginLeft: "10px" }}>Men</a>
                            </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};