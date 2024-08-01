import "./App.css";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import { useEffect, useState } from "react";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactMe /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let navUl = document.getElementById("Navbar");
    let nav = document.querySelector("nav");

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (
        scrollPosition > 60 &&
        window.matchMedia("(min-width: 768px)").matches
      ) {
        navUl.style.height = "90px";
      } else if (
        scrollPosition < 60 &&
        window.matchMedia("(min-width: 768px)").matches
      ) {
        navUl.style.height = "132px";
      }

      if (scrollPosition > 60 && window.matchMedia("(max-width: 768px)").matches) {
        nav.classList.remove('py-4')
      }
      else if(scrollPosition < 60 && window.matchMedia("(max-width: 768px)").matches){
        nav.classList.add('py-4')

        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
