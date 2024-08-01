import React from "react";

export default function ItemsCard({ eachItem: { src }, popUps }) {
  return (
    <>
      <div
        onClick={popUps}
        className="item relative rounded-xl cursor-pointer overlay hover:after:opacity-100"
      >
        <img className="rounded-xl" src={src} alt="" />
      </div>
    </>
  );
}
