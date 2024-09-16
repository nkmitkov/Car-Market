import { useFetch } from "../../hooks/useFetch";
import HomeListItem from "../partials/HomeListItem";

export default function WomenArea() {
    const { data: products, updateData } = useFetch("http://127.0.0.1:3000/catalog/women");

    return (
        <div style={{ margin: "50px auto 50px 200px" }}>
            <div className="section-heading">
                <h2>Women's Latest</h2>
                <span>Details to details is what makes <b>Neat Fashion</b> different from the other brands.</span>
            </div>
            <div className="main-banner" style={{ paddingTop: "60px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">

                                    {products.map(product => (<HomeListItem key={product._id} {...product} />))}

                                    {/* <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>productName</h4>
                                                    <span>$ price</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>productName</h4>
                                                        <p>description</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="/images/baner-right-image-01.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Men</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="/images/baner-right-image-02.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Kids</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Kids</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="/images/baner-right-image-03.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="/images/baner-right-image-04.jpg" />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};