export default function WomenListItem({
    _id,
    id,
    title,
    price,
    description,
    sex,
    image,
}) {

    return (
        <li style={{ display: "inline-block", marginBottom: "20px" }}>
            <div className="item" style={{ maxWidth: "370px" }}>
                <div className="thumb">
                    <div className="hover-content">
                        <ul>
                            <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                            <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                            <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <img src="/images/men-01.jpg" alt="" />
                </div>
                <div className="down-content">
                    <h4>{title}</h4>
                    <span>$ {price}</span>
                    {/* <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul> */}
                </div>
            </div>
        </li>
    );
};