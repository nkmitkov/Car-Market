import { useFetch } from "../../hooks/useFetch";
import HomeListItem from "../partials/HomeListItem";

export default function MenArea() {
    const { data: products, updateData } = useFetch("http://127.0.0.1:3000/catalog/men");

    return (
        <div style={{ margin: "50px auto 50px 200px" }}>
            <div className="section-heading">
                <h2>Men's Latest</h2>
                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
            </div>
            <div className="main-banner" style={{ paddingTop: "60px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">

                                    {products.map(product => (<HomeListItem key={product._id} {...product} />))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};