import { useEffect, useState } from "react";
import CustomBanner from "../banners/CustomBanner";
import WomenListItem from "./WomenListItem";

export default function WomenCatalog() {
    const [womenProducts, setWomenProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://127.0.0.1:3000/catalog/women");

            const result = await response.json();

            setWomenProducts(state => result)
        })()
    }, []);


    return (
        <>
            <CustomBanner page="women" />

            <section className="our-team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Ladies choice</h2>
                                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
                            </div>
                        </div>

                        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

                            {womenProducts.map(product => (<WomenListItem key={product._id} {...product} />))}

                        </ul>
                        
                    </div>
                </div>
            </section>
        </>
    );
};