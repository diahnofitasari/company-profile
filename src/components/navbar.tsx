"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import lognav from "../../public/images/lognav.png";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [navbarFixed, setNavbarFixed] = useState<boolean>(false);
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll(): void {
          const header = document.querySelector("header") as HTMLElement;
          const fixedNav = header.offsetTop;

          if (window.pageYOffset > fixedNav) {
              setNavbarFixed(true);
          } else {
              setNavbarFixed(false);
          }
      }

    const handleHamburgerClick = () => {
      const hamburger = document.querySelector("#hamburger") as HTMLElement;
      const navMenu = document.querySelector("#nav-menu") as HTMLElement;
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
      setHamburgerActive(!hamburgerActive);
    };

    window.addEventListener("scroll", handleScroll);

    const hamburger = document.querySelector("#hamburger") as HTMLElement;
    hamburger.addEventListener("click", handleHamburgerClick);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      {/* NavBar start*/}
      <header
        className={`header ${
          navbarFixed && !hamburgerActive ? "navbar-fixed" : ""
        }`}
        style={{
          background: "transparent",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div className="container">
          <div className="flex items-center w-screen justify-between relative px-10">
            {/* element kiri */}
            <div>
              <Link
                href="/"
                className="font-bold text-lg text-primary block py-6"
              >
                <Image
                  src={lognav}
                  alt="panah merah"
                  className="h-8 w-auto"
                ></Image>
              </Link>
            </div>

            {/* element kanan (elemen hamburger saat versi mobile dan element nav saat versi dekstop/large) */}
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden ${
                  hamburgerActive ? "hamburger-active" : ""
                }`}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className={`${
                  hamburgerActive ? "" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] z-10 w-full right-2 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link
                      href="/"
                      className=" text-base font-bold text-black py-2 mx-8 flex group-hover:text-green-800"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      href="/about-us"
                      className="text-base font-bold text-black py-2 mx-8 flex group-hover:text-green-800"
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      href="/product"
                      className="text-base font-bold text-black py-2 mx-8 flex group-hover:text-green-800"
                    >
                      Product
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      href="/our-teams"
                      className="text-base font-bold text-black py-2 mx-8 flex  group-hover:text-green-800"
                    >
                      Our Teams
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* NavBar end*/}
    </div>
  );
}
