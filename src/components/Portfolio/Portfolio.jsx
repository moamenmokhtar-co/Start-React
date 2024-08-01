import { useState } from "react";
import ItemsCard from "../Items/ItemsCard";
import item0 from "../../assets/0.png";
import item1 from "../../assets/1.png";
import item2 from "../../assets/2.png";
import item3 from "../../assets/3.png";
import item4 from "../../assets/4.png";
import item5 from "../../assets/5.png";
import Items from "../Items/ItemsCard";

export default function Portfolio() {
  const [items, setItems] = useState([
    { src: item0 },
    { src: item1 },
    { src: item2 },
    { src: item3 },
    { src: item4 },
    { src: item5 },
  ]);

  function popUp(index) {
    document.getElementById("pop-up").classList.remove("hidden");
    document.getElementById("pop-up").classList.add("flex");
    document.querySelector("#pop-up img").setAttribute("src", index.src);
    document.body.classList.add("overflow-hidden");
  }

  function popUpExit(e) {
    document.body.classList.remove("overflow-hidden");
    document.getElementById("pop-up").classList.remove("flex");
    document.getElementById("pop-up").classList.add("hidden");
  }
  return (
    <>
      <section
        id="portfolio"
        className="pt-section-padding-nav py-section-padding bg-white text-primary-color vh"
      >
        <div className="container-custom">
          <h2 className="uppercase text-5xl font-bold text-center ">
            portfolio
          </h2>
          <div className="flex justify-center w-72 mx-auto relative before:bg-primary-color after:bg-primary-color b-line a-line">
            <i className="fa-solid fa-star fa-2x"></i>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-10 p-11">
            {items.map((item, index) => (
              <ItemsCard
                popUps={() => popUp(items[index])}
                key={index}
                itemIndex={index}
                eachItem={item}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        onClick={(e) => popUpExit(e)}
        id="pop-up"
        className="hidden fixed inset-0  justify-center items-center bg-black/75"
      >
        <div onClick={(e) => e.stopPropagation()} className="w-3/4 md:w-2/4">
          <img className="w-full mx-auto rounded-xl " alt="" />
        </div>
      </section>
    </>
  );
}
