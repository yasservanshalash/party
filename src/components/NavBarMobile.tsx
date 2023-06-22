"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NavBarMobile = () => {
  const [headerVisibile, setHeaderVisibile] = useState(true);
  const [navbarVisible, setNavBarVisible] = useState(false);
  const router = useRouter();

  return (
    <nav className="relative bg-[#222222] text-white    ">
      <section
        className="relative flex justify-center items-center"
        style={{ display: headerVisibile ? "flex" : "none" }}
      >
        <h1 className="text-center py-20 font-extrabold">BERLIN FEVER</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-20 right-5 font-extrabold"
          style={{ transform: "scale(1.5)" }}
          onClick={() => {
            setHeaderVisibile(false);
            setNavBarVisible(true);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </section>
      <section
        className="absolute bg-[#222222] w-[100vw] h-[100vh] z-10 flex flex-col justify-center items-center gap-10"
        style={{ display: navbarVisible ? "flex" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute top-20 right-5 text-white"
          style={{ transform: "scale(1.5)" }}
          onClick={() => {
            setHeaderVisibile(true);
            setNavBarVisible(false);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <h1 className="text-white font-bold" onClick={() => {
          router.push("/")
          setNavBarVisible(false);
          setHeaderVisibile(true);
        }}>INVITATION</h1>
        <h1 className="text-white font-bold" onClick={() => {
          router.push("/RSLP")
          setNavBarVisible(false);
          setHeaderVisibile(true);

        }}>RSLP</h1>
        <h1 className="text-white font-bold" onClick={() => {
          router.push("/inspiration")
          setNavBarVisible(false);
          setHeaderVisibile(true);

        }}>INSPIRATION</h1>
        <h1 className="text-white font-bold" onClick={() => {
          router.push("/remerciements")
          setNavBarVisible(false);
          setHeaderVisibile(true);

        }}>REMERCIEMENTS</h1>
        <h1 className="text-white font-bold" onClick={() => {
          router.push("/souvenirs")
          setNavBarVisible(false);
          setHeaderVisibile(true);

        }}>SOUVENIRS</h1>
      </section>
    </nav>
  );
};

export default NavBarMobile;
