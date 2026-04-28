"use client";
import Image from "next/image";
import React from "react";
import userImg from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client.";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row  md:justify-between items-center gap-4 mt-6">
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
      {user ? (
        <div className="flex gap-2">
          <Image
            src={user?.image}
            height={40}
            width={40}
            alt="user.png"
          ></Image>

          <button onClick={handleSignOut} className="btn btn-dark">
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className="btn btn-dark">Log In</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
