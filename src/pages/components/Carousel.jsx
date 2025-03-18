import { Carousel } from "antd";
import { CarInfo } from "../../Constants/Index";
function VCarousel() {
  return (
    <div className="pt-4 bg-slate-400">
      <Carousel arrows infinite dotPosition="bottom" className="">
        
          {CarInfo.map((item) => (
            <div key={item.id} >
              <img src={item.image} className="w-50 mx-auto rounded" />
              <p>{item.title}</p>
            </div>
          ))}
        
      </Carousel>
    </div>
  );
}

export default VCarousel;
