import DetailsBanner from "./DetailsBanner";

export default function Details() {

    return (
        <>
            <DetailsBanner />

            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="imageUrl" alt="productName" style={{ width: "400px", height: "550px" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading" style={{ width: "500px" }}>
                                <h2 style={{ margin: "10px 0"}}>productName</h2>
                                <span style={{ margin: "10px 0"}}>description</span>
                                <h4 style={{ margin: "10px 0"}}>$ price</h4>
                                <button id="buy">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};