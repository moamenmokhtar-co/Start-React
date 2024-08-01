export default function ContactMe() {
  return (
    <>
      <section
        id="contactMe"
        className="pt-section-padding-nav pb-section-padding bg-white text-primary-color vh"
      >
        <h2 className="uppercase text-5xl font-bold text-center ">
          contact me
        </h2>
        <div className="flex justify-center w-72 mx-auto relative before:bg-primary-color after:bg-primary-color b-line a-line">
          <i className="fa-solid fa-star fa-2x"></i>
        </div>
        <form className=" md:w-1/2 w-2/3 mx-auto">
          <div className="inputs-container grid grid-cols-1 *:py-4 *:text-2xl *:my-4 *:placeholder:text-[#6C757D] *:tracking-tight">
            <input
              type="text"
              placeholder="Name"
              className="focus-visible:outline-none"
            />
            <input
              type="Email"
              placeholder="Email"
              className="focus-visible:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="focus-visible:outline-none"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="focus-visible:outline-none min-h-24 max-h-40"
            ></textarea>
          </div>
          <button className="bg-secondry-color py-4 px-7 text-2xl rounded-lg text-white hover:bg-[#19AC90]">
            send
          </button>
        </form>
      </section>
    </>
  );
}
