import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-[50vh] border-t-[1px] border-black  text-balck ">
        <div className="px-6 grid grid-cols-4 mt-12 ">
          <div className="   px-8 ">
            <h1 className="font-normal mb-4 ">OFFLINE STORE</h1>
            <span className="">
              <Link
                to="/"
                className="underline text-[0.9rem] font-light hover:font-normal hover:text-[0.9rem] transition-all ease-in-out "
              >
                Find store near you
              </Link>
            </span>
          </div>
          <div className="grid gap-6 px-8">
            <h1 className="font-normal ">GET TO KNOW US</h1>
            <ul className="font-light text-[0.9rem] gap-4 ">
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditons</Link>
              </li>
            </ul>
          </div>
          <div className="grid gap-6 px-8">
            <h1 className="font-normal  ">
              TRACK THE ORDER / EXCHANGE THE ORDER
            </h1>
            <ul className="font-light text-[0.8rem] gap-4 ">
              <li>
                <Link to="/">TRACK ORDER</Link>
              </li>
              <li>
                <Link to="/">PLACE RETURN REQUEST</Link>
              </li>
              <li>
                <Link to="/">RETURN/EXCHANGE POLICY</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-2">CUSTOMER CARE</h1>
            <div className="grid ">
              <span className="text-[0.8rem] font-light  ">
                Timming: 10 AM - 7 PM
              </span>
              <span className="text-[0.8rem] font-light flex ">
                WhatsApp:
                <p className=" mx-1 underline">+91 6548528363</p>
              </span>
              <span className="text-[0.8rem] font-light      ">
                instagram: @vibes
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
