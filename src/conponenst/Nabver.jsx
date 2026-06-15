"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nabver = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-facilities">All Facilities</Link></li>
            <li><Link href="/my-booking">My Bookings</Link></li>
            <li><Link href="/add-facility">Add Facility</Link></li>
            <li><Link href="/manege-facilities">Manage Facilities</Link></li>
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
          <span className="text-lg font-bold">SportNest</span>
        </Link>
      </div>

      {/* CENTER (DESKTOP ONLY) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-facilities">All Facilities</Link></li>
          <li><Link href="/my-booking">My Bookings</Link></li>
          <li><Link href="/add-facility">Add Facility</Link></li>
          <li><Link href="/manege-facilities">Manage Facilities</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        {user ? (
          <div className="flex items-center gap-3">

            {/* Avatar */}
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                src={user?.image}
              />
              <Avatar.Fallback>
                {user?.name?.[0]}
              </Avatar.Fallback>
            </Avatar>

            {/* Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-sm">
                Menu ⬇️
              </div>

              <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow z-50">
                <li><Link href="/my-booking">My Bookings</Link></li>
                <li><Link href="/add-facility">Add Facility</Link></li>
                <li><Link href="/manege-facilities">Manage Facilities</Link></li>

                <li>
                  <Button
                    onClick={handleSignOut}
                    variant="danger"
                    className="mt-2 w-full"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex gap-3">
            <Link href="/login">Login</Link>
            <Link href="/signup">SignUp</Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Nabver;