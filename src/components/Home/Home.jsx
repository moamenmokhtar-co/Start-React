import Person from "../../assets/Person.svg";

export default function Home() {
  return (
    <>
      <section id="home" className="bg-secondry-color text-center pt-section-padding-nav pb-section-padding vh">
        <div className="container-custom">
          <div className=" image w-64 mx-auto mb-5">
            <img className="w-full" src={Person} alt="Person" />
          </div>

          <h2 className="uppercase text-6xl font-bold">start react</h2>
          <div className="flex justify-center w-72 mx-auto relative before:bg-white after:bg-white b-line a-line">
            <i className="fa-solid fa-star fa-2x"></i>
          </div>
          <p className="mt-5 text-xl">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
