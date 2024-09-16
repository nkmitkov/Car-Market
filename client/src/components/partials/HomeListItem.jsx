export default function HomeListItem({
    description,
    id,
    image,
    price,
    sex,
    title,
    _id,
}) {

    return (
        <div className="col-lg-6">
            <div className="right-first-image">
                <div className="thumb">
                    <div className="inner-content">
                        <h4>{title}</h4>
                        <span>$ {price}</span>
                    </div>
                    <div className="hover-content">
                        <div className="inner">
                            <h4>{title}</h4>
                            <div className="main-border-button">
                                <a href={`/catalog/men/${_id}`}>Details</a>
                            </div>
                        </div>
                    </div>
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    );
};