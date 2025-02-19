import Carousel from "react-bootstrap/Carousel";
import { CarInfo } from "../../Constants/Index";
function VCarousel() {
  return (
    <Carousel>
      {CarInfo.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          <img src={item.image} className="w-50 mx-auto p-4" />
          <p>{item.title}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default VCarousel;
