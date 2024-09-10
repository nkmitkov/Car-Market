import { useFetch } from "../../hooks/useFetch";

import CustomBanner from "../banners/CustomBanner";
import ProductListItem from "../partials/ProductListItem";

export default function MenCatalog() {
    const { data: products, updateData } = useFetch("http://127.0.0.1:3000/catalog/men");

    return (
        <>
            <CustomBanner page="men" />

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

                            <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

                                {products.map(product => (<ProductListItem key={product._id} {...product} />))}

                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};