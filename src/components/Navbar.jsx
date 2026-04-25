import Image from "next/image";
import React from "react";
import user from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <Image src={user} height={40} width={40} alt="user.png"></Image>
        <Link href="/auth/login">
          <button className="btn btn-dark">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
