import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nabver = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/allfacilities">All Facilities</Link>
              </li>
              <li>
                <Link href="/mybookings">My Bookings </Link>
              </li>
              <li>
                <Link href="/addfacility">Add Facility</Link>
              </li>

              <li>
                <Link href="/managemyfacilities">Manage My Facilities</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} />

            <span className="ml-2">SportNest</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-facilities"}>All Facilities</Link>
            </li>
            <li>
              <Link href={"/my-bookings"}>My Bookings </Link>
            </li>
            <li>
              <Link href={"/add-facility"}>Add Facility</Link>
            </li>

            <li>
              <Link href={"/manage-my-facilities"}>Manage My Facilities</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
          <Link href={"/signup"}>SignUp</Link>
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Menu ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link href={"/my-bookings"}>My Bookings </Link>
              </li>
              <li>
                <Link href={"/add-facility"}>Add Facility</Link>
              </li>

              <li>
                <Link href={"/manage-my-facilities"}>Manage My Facilities</Link>
              </li>
              <a className="btn">Logout</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nabver;
