"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav className="flex justify-between items-center mb-4 p-[20px] border-gray-300 shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <p className="text-gray-600 mr-2">Welcome, Dymong</p>
            {/* <Image
              className="w-8 h-8 rounded-full cursor-pointer"
              src="/photo_2023-09-07_11-07-03.jpg"
              width={120}
              height={120}
              alt="Profile Picture"
            /> */}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-[#DEEFE7] rounded-md shadow-lg">
              <button
                onClick={() => console.log("Changing password...")}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Profile Settings
              </button>
              <button
                onClick={() => console.log("Changing password...")}
                className="block px-4 py-2 text-sm text-gray-700 "
              >
                Change Password
              </button>
              <button className="block px-4 py-2 text-sm text-gray-700 ">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
