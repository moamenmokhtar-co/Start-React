import Details from "../Details/Details";
export default function Footer() {
  return (
    <>
      <Details />
      <p className="bg-[#1A252F] py-8 text-center">
        Copyright ©{" "}
        <a
          className="text-secondry-color relative hover:after:content-[''] hover:after:bg-secondry-color hover:after:h-1 hover:after:left-0 hover:after:bottom-[-.25rem] hover:after:right-0 hover:after:absolute "
          target="_blank"
          href="https://www.linkedin.com/in/moamenmokhtar-co/"
        >
          Mo'men Mokhtar
        </a>{" "}
        2022
      </p>
    </>
  );
}
