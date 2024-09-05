import MenMainBanner from "./MenMainBanner";

export default function MenCatalog() {

    return (
        <>
            <MenMainBanner />

            <section className="our-team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Men's choice</h2>
                                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                            </div>
                        </div>
                        <div className="col-lg-12" style={{ display: "flex", flexWrap: "wrap" }}>

                        {/* {{> catalogListItem}} */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};