import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MultipleItemsCarousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items.map(item => (
                    <Link to={`/products/${item.id}`}>
                        <img src={item.image} height={300} width={300} style={{ objectFit: "contain" }} />
                    </Link>
                ))}


            </Slider>
        </div>
    );
}

export default MultipleItemsCarousel;
