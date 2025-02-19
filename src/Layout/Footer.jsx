import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-neutral-700 text-white">
      <div className="container mx-auto">
        <div className="lex items-center justify-between">
          <div>
            <p className="mx-auto">
              {currentYear} All right reserved by <a href="#">RMRC&M</a>
            </p>
          </div>
          {/* <p>
            Developed by
            <a className="ml-2" href="ashiful-islam.vercel.app" target="_blank">
              mukto
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
