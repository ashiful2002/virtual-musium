import React from "react";
import PageTitle from "../../../Components/Title/PageTitle";
import { useNavigate } from "react-router-dom";
import { CarInfo } from "../../../Constants/Index";
import Button from "../../../Components/Button";

const PhotoGallery = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/gallery");
  };
  return (
    <div className="container mx-auto">
      <PageTitle heading="photo gallery" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CarInfo.map((item) => (
          <div id={item.id}>
            <img className="w-[400px]" src={item.image} alt={item.title} />
            <h3>image title here</h3>
            <Button className="" onClick={handleNavigate}> show more / read more</Button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
