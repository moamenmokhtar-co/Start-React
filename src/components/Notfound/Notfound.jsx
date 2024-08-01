import React from "react";
import notFondSvg from "../../assets/404Error.svg";

export default function Notfound() {
  return (
    <div className="container-custom vh flex justify-center items-center pb-section-padding pt-section-padding-nav">
      <img className="w-[36rem]" src={notFondSvg} />
    </div>
  );
}
