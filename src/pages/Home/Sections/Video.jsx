import React from "react";
import PageTitle from "../../../Components/Title/PageTitle";

const Video = () => {
  return (
    <div>
      <PageTitle heading="this is video section for youtube videos" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <iframe
          className="rounded w-full h-[300px]"
          src="https://www.youtube.com/embed/OYonZWCmMWo?si=Vb2pik2M9dMu7PUT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe className="rounded w-full h-[300px]"
          src="https://www.youtube.com/embed/kdXp0WP10Pg?si=Z9ngxXs-RmuuGm9u"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe className="rounded w-full h-[300px]"
          src="https://www.youtube.com/embed/YWFaz5rlHEs?si=DrroPUbLVSuOCGW-"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
