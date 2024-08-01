import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  function navbarToggle() {
    const navbar = document.getElementById("Navbar");
    if (navbar.style.maxHeight) {
      navbar.style.cssText = "maxHeight = null; padding-block:null;";
    } else {
      navbar.style.cssText = "max-height:212px; padding-block:1rem;";
    }
  }

  return (
    <>
      <nav className="bg-primary-color primary-color fixed top-0 start-0 end-0 z-30 py-4 md:py-0">
        <div className="container-custom grid grid-cols-2 md:flex justify-between items-center py-8 md:py-1 max-w-full">
          <div className="logo">
            <Link to="" className="uppercase font-bold text-3xl">
              Start React
            </Link>
          </div>
          <button
            onClick={navbarToggle}
            className="navbar-toggler flex md:hidden items-center justify-center gap-2 text-white bg-secondry-color py-1 px-2 rounded-md text-2xl font-bold "
            type="button"
          >
            <p className="capitalize">menu</p>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul
            id="Navbar"
            className=" text-center max-h-0 py-0 overflow-hidden md:py-4 md:overflow-visible md:max-h-[132px] md:h-[132px] *:mx-5 *:*:px-5 *:py-4 *:*:py-4 *:*:rounded-xl *:*:font-bold *:*:text-xl md:flex md:items-center"
          >
            <li className="group">
              <NavLink
                to="portfolio"
                id="portfolioLink"
                className="capitalize group-hover:text-secondry-color transition-colors duration-200 "
              >
                portfolio
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="about"
                id="aboutLink"
                className="capitalize group-hover:text-secondry-color transition-colors duration-200"
              >
                about
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="contact"
                id="contactLink"
                className="capitalize group-hover:text-secondry-color transition-colors duration-200"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
