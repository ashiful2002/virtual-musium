import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, heading, className }) => {
  return (
    <>
      {title && (
        <Helmet>
          <title>{title} - Rowmari Muktancal Research Center &  Museum </title>
        </Helmet>
      )}
      {heading && <h1 className={`heading  ${className} `}>{heading}</h1>}
    </>
  );
}; 

export default PageTitle;
