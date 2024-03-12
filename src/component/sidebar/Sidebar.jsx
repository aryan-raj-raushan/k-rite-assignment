import React, { useState } from "react";
import { blue } from "@mui/material/colors";
import Logo from "../../asset/images/logo.jpg";
import { PiCommandThin } from "react-icons/pi";
import { CiPen } from "react-icons/ci";
import {
  HiOutlineSpeakerphone,
  HiOutlineFolder,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { LuChevronsLeftRight } from "react-icons/lu";
import { Avatar } from "@mui/material";
import { folders } from "../../constant/constant";
import { BsTriangleFill } from "react-icons/bs";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isOpen, toggleHamburger }) => {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <aside
      className={`xl:flex xl:flex-col xl:justify-between xl:w-72 bg-white m-2 border border-gray-200 rounded-lg p-2 overflow-y-scroll no-scrollbar ${
        isOpen
          ? "block absolute !z-[999] left-300 transition-all duration-300 h-screen xl:h-full"
          : "hidden left-0 transition-all duration-300"
      }`}
    >
      {/* Upper Portion */}
      <div className="">
        <div className="flex px-2 gap-2 justify-between items-center">
          <div className="flex gap-1.5 items-center">
            <img
              src={Logo}
              alt="logo"
              width={200}
              height={200}
              className="bg-contain bg-center w-10"
            />
            <div className="flex flex-col leading-tight text-sm font-medium">
              <h4 className="text-gray-500 uppercase ">Inc</h4>
              <h6 className="text-gray-800">InnovateHub</h6>
            </div>
          </div>
          <div className="hidden lg:block">
            <Avatar sx={{ bgcolor: blue[300], width: 30, height: 30 }}>
              N
            </Avatar>
          </div>
          <span className="text-xl text-gray-600 lg:hidden" onClick={toggleHamburger}>
            <RxCross2 />
          </span>
        </div>
        {/* Team divided */}
        <div className="border border-gray-100 flex flex-col rounded-lg py-2 mt-4 gap-1">
          <div className="flex items-center justify-between hover:bg-gray-100 transition duration-300 cursor-pointer rounded-lg py-2 px-4 group">
            <div className="flex items-center gap-1 text-sm font-medium text-gray-800 ">
              <CiPen className="text-base mt-1" />
              <p>Design team</p>
            </div>
            <div className="bg-gray-100 rounded-md px-2 py-1 group-hover:bg-white text-xs text-gray-500 flex items-center">
              <PiCommandThin className="text-base" /> +1
            </div>
          </div>
          <div className="flex items-center justify-between hover:bg-gray-100 transition duration-300 cursor-pointer rounded-lg py-2 px-4 group">
            <div className="flex items-center gap-1 text-sm font-medium text-gray-800 ">
              <HiOutlineSpeakerphone className="text-base mt-1" />
              <p>Marketing team</p>
            </div>
            <div className="bg-gray-100 rounded-md px-2 py-1 group-hover:bg-white text-xs text-gray-500 flex items-center">
              <PiCommandThin className="text-base" /> +2
            </div>
          </div>
          <div className="flex items-center justify-between hover:bg-gray-100 transition duration-300 cursor-pointer rounded-lg py-2 px-4 group">
            <div className="flex items-center gap-1 text-sm font-medium text-gray-800 ">
              <LuChevronsLeftRight className="text-base mt-1" />
              <p>Development team</p>
            </div>
            <div className="bg-gray-100 rounded-md px-2 py-1 group-hover:bg-white text-xs text-gray-500 flex items-center">
              <PiCommandThin className="text-base" /> +1
            </div>
          </div>
          <div className="border-t border-gray-200 inline-flex items-center px-4 py-3 gap-2 relative cursor-pointer">
            <TbSquareRoundedPlus className="mt-0.5 text-gray-400" />
            <p className="text-gray-400 font-medium">Create a team</p>
          </div>
        </div>
        {/* Folder Structure */}
        <div className="p-2 mt-1 flex flex-col gap-1">
          <div className="flex items-center justify-between px-2 text-gray-400">
            <h6 className="uppercase">Folders</h6>
            <h6 className=" text-2xl font-normal ">+</h6>
          </div>
          {folders.map((folder, index) => (
            <div key={index}>
              <div
                className={`px-2 rounded-md py-1 hover:bg-gray-100 flex items-center justify-between transition duration-300 cursor-pointer ${
                  openMenu === folder.key ? "bg-gray-100" : ""
                }`}
                onClick={() => toggleMenu(folder.key)}
              >
                <div className="inline-flex items-center gap-2">
                  <HiOutlineFolder />
                  {folder.name}
                </div>
                <BsTriangleFill
                  className={`${
                    openMenu === folder.key ? "rotate-0" : "rotate-180"
                  } w-2 text-gray-500 mr-1 transition duration-200`}
                />
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden max-h-0 space-y-1 ${
                  openMenu === folder.key
                    ? "block transition-all duration-500 ease-in-out max-h-48 opacity-100 h-full"
                    : "opacity-0 h-0"
                }`}
              >
                <div className="pl-10 flex flex-col gap-1 my-1 text-gray-700 text-base font-normal">
                  {folder.submenu.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                  <div className="flex items-center gap-2 text-gray-400">
                    <TbSquareRoundedPlus className="mt-0.5" />
                    <p>Add new sub</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End portion */}
      <div className="p-2 mt-4">
        <div className="px-2 flex flex-col gap-2">
          <div className="flex items-center gap-1 text-base text-gray-800">
            <HiOutlineUserAdd /> Invite teammates
          </div>
          <div className="flex items-center justify-between text-base text-gray-800">
            <div className="flex items-center gap-1">
              <RxQuestionMarkCircled />
              <p>Help and first steps</p>
            </div>
            <p className="bg-gray-100 rounded-md px-2 text-sm text-gray-500">
              0/6
            </p>
          </div>
          <div className="inline-flex items-center justify-between mt-1 bg-gray-100 rounded-md pl-2 py-1 pr-1">
            <p className="text-sm text-gray-700 sm:flex items-center gap-1">
              <span className="bg-white px-1 rounded-md text-xs text-gray-700 font-medium">
                7
              </span>{" "}
              days left <span className="hidden sm:block">on trials</span>
            </p>
            <p className="px-2 bg-black text-white rounded-md py-1 text-sm">
              Add billing
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
