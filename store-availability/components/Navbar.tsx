import React from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-darkgray">
      <nav className="flex px-32 py-2 place-content-between">
        <span className="mt-2 w-8">
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
        </span>
        <span className="flex my-auto h-full ">
          <ul className="flex h-full text-medgray font-sf tracking-wider">
            <li className="ml-10 mr-10 transition ease-in-out hover:text-lightgray">
              <Link href="/store-availability">
                <a>Store availability</a>
              </Link>
            </li>
            <li className="ml-10 transition ease-in-out hover:text-lightgray">
              <Link href="/">
                <a>SG</a>
              </Link>
            </li>
          </ul>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
