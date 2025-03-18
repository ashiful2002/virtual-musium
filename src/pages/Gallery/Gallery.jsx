import React from "react";
import PageTitle from "../../Components/Title/PageTitle";
import { galleryImages } from "../../Constants/Index";

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <div>
          <div>
            <PageTitle heading="ছবি গ্যালারী" />
          </div>
          <div className="">
            <div className="grid grid-cols-1 rounded border p-3 shadow hover:text-white md:grid-cols-2 xl:grid-cols-3">
              {galleryImages &&
                galleryImages.map((item) => (
                  <div
                    key={item.id}
                    className="hover:bg-opacity- delay-250 my-2 rounded p-2 text-secondary-color transition-all shadow-xl ease-out hover:bg-green-700 hover:text-white hover:transition"
                  >
                    <img src={item.url} alt={item.title} />
                    <p className="text--color text-center capitalize hover:text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Gallery;
