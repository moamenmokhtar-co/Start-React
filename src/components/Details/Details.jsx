export default function Details() {
  return (
    <>
      <section
        id="footer"
        className="bg-primary-color text-center py-section-padding flex justify-center items-center "
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-y-16 gap-x-11">
            <div>
              <h5 className="text-3xl font-bold mb-5 tracking-tight">
                LOCATION
              </h5>
              <p className="tracking-tight">
                2215 John Daniel Drive Clark, MO 65243
              </p>
            </div>
            <div>
              <h5 className="text-3xl font-bold mb-5 tracking-tight">
                AROUND THE WEB
              </h5>
              <div className="social flex gap-3 justify-center items-center">
                <div className="border size-11 md:size-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f fa-l"></i>
                  </a>
                </div>
                <div className="border size-11 md:size-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter fa-l"></i>
                  </a>
                </div>
                <div className="border size-11 md:size-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                  <a href="#">
                    <i className="fa-brands fa-linkedin fa-l"></i>
                  </a>
                </div>
                <div className="border size-11 md:size-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
                  <a href="#">
                    <i className="fa-brands fa-youtube fa-l"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-3xl font-bold mb-5 tracking-tight">
                ABOUT FREELANCER
              </h5>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Mo'men Mokhtar
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
