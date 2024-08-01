export default function About() {
  return (
    <>
      <section id="about" className="bg-secondry-color pt-section-padding-nav pb-section-padding vh relative">
        <div className="container-custom">
          <h2 className="uppercase text-5xl font-bold text-center">about</h2>
          <div className="flex justify-center w-72 mx-auto relative before:bg-white after:bg-white b-line a-line">
            <i className="fa-solid fa-star fa-2x"></i>
          </div>
          <div className="grid lg:grid-cols-2 *:text-xl *:tracking-tight *:leading-8 *:px-11 lg:*:px-0 py-8 gap-8">
            <p className="lg:w-1/2 lg:ms-auto">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className="lg:w-1/2 lg:me-auto">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>
      </section>
    </>
  );
}
