export default function ContactsBanner({
    title
}) {

    return (
        <div className="page-heading about-page-heading" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <h2>{title}</h2>
                            <span style={{ fontSize: "20px" }}>Be awesome. Be neat.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};