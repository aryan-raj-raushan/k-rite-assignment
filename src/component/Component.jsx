import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { PiMagnifyingGlass, PiCirclesFour } from "react-icons/pi";
import { BsTriangleFill, BsSortNumericDownAlt } from "react-icons/bs";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { RiEqualizerLine } from "react-icons/ri";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { HiOutlineArchive } from "react-icons/hi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./sidebar/Sidebar";
import BrandTable from "./BrandTable/BrandTable";

const Component = () => {
  const [num, setNum] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex h-full lg:h-screen relative ">
      {/* ------------------------------Sidebar ------------------------------ */}
      <Sidebar isOpen={isOpen} toggleHamburger={toggleHamburger} />
      {/* ------------------------------ Main Screen ----------------------------- */}
      <main className="flex-1 bg-white m-2 border border-gray-200 rounded-lg relative z-10 h-full lg:h-auto w-full">
        {/* Bottom float menu */}
        <div className="absolute -bottom-20 lg:bottom-4 left-1/2 transform -translate-x-1/2 mx-auto flex items-center gap-3 shadow-md drop-shadow border border-gray-100 px-3 py-1 rounded-lg z-50 bg-white">
          {num > 0 && (
            <div className="flex items-center gap-2 text-sm font-normal text-gray-600">
              <span className="bg-black text-white rounded-md h-5 w-5 text-center">
                {num}
              </span>{" "}
              <span className="hidden sm:block">selected</span>
            </div>
          )}
          <div className="text-sm shadow px-2 rounded text-center py-0.5 hover:scale-110 transition duration-200 cursor-pointer sm:flex items-center">
            <HiOutlineArchive className="inline-block mr-1.5" />
            <span className="hidden sm:block">Archive</span>
          </div>
          <div className="text-sm shadow px-2 rounded text-center text-red-800 py-0.5 hover:scale-110 transition duration-200 cursor-pointer sm:flex items-center">
            <HiOutlineArchive className="inline-block mr-1.5" />
            <span className="hidden sm:block">Delete</span>
          </div>
          <div className="text-sm shadow px-2 rounded text-center py-0.5 hover:scale-110 transition duration-200 cursor-pointer sm:flex items-center">
            <span className="hidden sm:block">More</span>
            <BsTriangleFill className="inline-block w-2 text-gray-500 ml-1.5 rotate-180 " />
          </div>
          <span className="cursor-pointer">
            <RxCross2 className="text-gray-500" />
          </span>
        </div>
        {/* ----------------------- Heading section right side -----------------------  */}
        <div className="flex items-center justify-between py-3 border-b px-2 sm:px-6">
          {/* Mobile menu */}
          <div className="flex items-center gap-2 xl:hidden">
            <span onClick={toggleHamburger}>
              <RxHamburgerMenu />
            </span>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              Products
            </p>
          </div>
          <p className="hidden xl:block text-base sm:text-lg font-medium text-gray-800">
            Products
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center border px-2 rounded-md shadow-md w-20 sm:w-40">
              <PiMagnifyingGlass className="text-gray-600 text-sm" />
              <input
                type="text"
                className="outline-none rounded-md text-gray-600 p-1 w-full text-sm"
                placeholder="Search for.."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="border p-1 rounded-lg shadow-md cursor-pointer hover:scale-125 transition duration-200">
              <TiMessages className="text-lg text-gray-600" />
            </div>
            <div className="border p-1 rounded-lg shadow-md cursor-pointer hover:scale-125 transition duration-200">
              <CiSettings className="text-lg text-gray-600" />
            </div>
          </div>
        </div>
        {/*--------------------------- Mid select section ---------------------------*/}
        <div className="flex gap-2 sm:items-center justify-between px-1 sm:px-6 pt-3 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center border px-1.5 rounded-md drop-shadow-md shadow py-1 cursor-pointer">
              <PiCirclesFour className="mr-0.5 text-base text-gray-600" />
              <p className="text-xs sm:text-base">All brands</p>
              <BsTriangleFill className="w-2 text-gray-500 ml-2 mt-0.5 rotate-180" />
            </div>
            <div className="flex items-center gap-0.5 border rounded-md drop-shadow-md shadow py-1 px-1.5">
              <p className="text-xs sm:text-base">Desk</p>
              <BsTriangleFill className="w-2 text-gray-500 ml-2 mt-0.5 rotate-180" />
            </div>
            <div className="flex items-center gap-0.5 border rounded-md drop-shadow-md shadow py-1 px-1.5">
              <p className="text-xs sm:text-base">Tags</p>
              <BsTriangleFill className="w-2 text-gray-500 ml-2 mt-0.5 rotate-180" />
            </div>
            <div className="hidden sm:flex items-center gap-1 border border-dotted border-gray-200 rounded-md bg-gray-50 py-1 px-1.5">
              <BsSortNumericDownAlt className="text-gray-500 text-base" />
              <p className="text-gray-500 text-base">Sort</p>
            </div>
            <div className="hidden sm:flex items-center gap-1 border border-dotted border-gray-200 rounded-md bg-gray-50 py-1 px-1.5">
              <RiEqualizerLine className="text-gray-500 text-base" />
              <p className="text-gray-500 text-base">Filter</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 border rounded-md drop-shadow-md shadow py-1 px-1.5 cursor-pointer hover:bg-gray-100 transition duration-200 hover:shadow-md hover:drop-shadow-lg">
              <TbSquareRoundedPlus className="text-gray-500 mt-0.5" />
              <p className="hidden md:block text-base">Meeting</p>
            </div>
            <div className="flex items-center gap-1 border rounded-md drop-shadow-md shadow py-1 px-1.5 cursor-pointer hover:bg-gray-100 transition duration-200 hover:shadow-md hover:drop-shadow-lg">
              <HiOutlineInboxArrowDown className="mt-0.5" />
              <p className="hidden md:block text-base">Import/Export</p>
            </div>
          </div>
        </div>
        {/* ------------------------------ Table section -----------------------------  */}
        <BrandTable setNum={setNum} searchInput={searchInput} />
      </main>
    </div>
  );
};

export default Component;
