"use client";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { TfiLineDouble } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { useState } from "react";


export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <header className="mr-auto items-center gap-10 shadow-2xl  fixed p-6 top-0 w-full z-10 bg-black/15 backdrop-blur-md text-balance" >
      <nav className="mr-auto container flex items-center font-medium gap-10        ">
        <Link href="/" className="mr-auto">
          <BrandLogo
            className="text-4xl font-bold text-white"
            words={["ArcBot", "ArcLabs"]}
            framerProps={undefined}
          />
        </Link>
       
        <button onClick={handleClick} className="md:hidden block z-20 ">
          {" "}
          {isOpenMenu ? <AiOutlineClose /> : <TfiLineDouble />}
        </button>

        {/* ÷Desktop  */}
        <div className="hidden md:flex gap-10 items-center ">
          <Link href="#" className="text-lg font-medium">
            {" "}
            Home{" "}
          </Link>
          <Link href="#" className="text-lg font-medium">
            {" "}
            About{" "}
          </Link>
          <Link href="#pricing" className="text-lg font-medium ">
            {" "}
            Pricing
          </Link>

          <div className="relative inline-flex h-11 overflow-hidden rounded-xl p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ">
            <span className="buttonComp" />
            <span className=" relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6   text-sm font-medium text-white backdrop-blur-3xl text-balance">
              <SignedIn>
                <Link href="/dashboard"> Dashboard</Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">Login</SignInButton>
              </SignedOut>
            </span>
          </div>
        </div>

        {/* mobile */}

        {isOpenMenu && (
          <div className="fixed inset-0 z-10  flex items-center justify-center w-full bg-black/75 backdrop-blur-4xl md:hidden  h-full ">
            <div className=" flex flex-col pt-24  space-y-2 mr-auto pl-12  bg-gradient-to-t inset-x-0  " >
              <Link
                href="#"
                onClick={handleClick}
                className="text-lg font-medium text-red-200 "
                style={{
                  boxShadow:
                    "0px -1px 0px 0px #ffffff40 inset",
                }}>
                Home
              </Link>
              <Link
                href="#"
                onClick={handleClick}
                className="text-lg font-medium text-white"
                style={{
                  boxShadow:
                    "0px -1px 0px 0px #ffffff40 inset",
                }}>
                About
              </Link>
              <Link
                href="#pricing"
                onClick={handleClick}
                className="text-lg font-medium text-white"
                style={{
                  boxShadow:
                    "0px -1px 0px 0px #ffffff40 inset",
                }}>
                Pricing
              </Link>
              <SignedIn>
                <Link
                  href="/dashboard"
                  onClick={handleClick}
                  className="text-lg font-medium text-white"
                  style={{
                    boxShadow:
                      "0px -1px 0px 0px #ffffff40 inset",
                  }}>
                  Dashboard
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <span className="text-lg font-medium text-white">Login</span>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
