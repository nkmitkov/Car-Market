import { useParams, useLocation } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import GeneralBanner from "../banners/GeneralBanner";

export default function Details() {
    // const { productId } = useParams();
    const { pathname } = useLocation();
    const { data: product, updateData} = useFetch(`http://127.0.0.1:3000${pathname}`);

    return (
        <>
            <GeneralBanner title={product.title} />

            <div className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={product.image} alt={product.title} style={{ width: "400px", height: "550px" }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading" style={{ width: "500px" }}>
                                <h2 style={{ margin: "10px 0"}}>{product.title}</h2>
                                <span style={{ margin: "10px 0"}}>{product.description}</span>
                                <h4 style={{ margin: "10px 0"}}>$ {product.price}</h4>
                                <button id="buy">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};