import React from "react";
import { Avatar } from "@mui/material";
import { TiMessages } from "react-icons/ti";
import useBrandTableHook from "./useBrandTableHook";
import { deepOrange, teal, indigo, amber, pink } from "@mui/material/colors";

const BrandTable = ({ setNum, searchInput }) => {
  const {
    isBrandChecked,
    hanldeCheckBox,
    isAnyDescriptionExpanded,
    filteredData,
    selectedBrands,
    handleCheckboxChange,
    toggleDescription,
    isDescriptionExpanded,
  } = useBrandTableHook({ setNum, searchInput });

  const avatarColors = [
    deepOrange[400],
    teal[400],
    indigo[400],
    amber[400],
    pink[400],
  ];
  return (
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full">
        <thead className="font-thin">
          <tr className="font-normal text-gray-500 text-left cursor-default ">
            <th
              scope="col"
              className="border-y py-2 px-3 font-normal min-w-40 lg:min-w-60"
            >
              <div className="flex items-center justify-between cursor-default">
                <div className="">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-lg outline-none mr-1.5 cursor-pointer accent-black"
                    checked={isBrandChecked}
                    onChange={hanldeCheckBox}
                  />
                  Brand
                </div>
                <span className="text-base">+</span>
              </div>
            </th>
            <th
              scope="col"
              className={`border py-2 px-3 font-normal min-w-44 lg:min-w-fit ${
                isAnyDescriptionExpanded() ? "w-auto" : "w-44"
              }`}
            >
              Description
            </th>
            <th
              scope="col"
              className="border py-2 px-3 font-normal min-w-60 lg:min-w-full lg:w-full"
            >
              Members
            </th>
            <th scope="col" className="border py-2 px-3 font-normal min-w-40">
              Categories
            </th>
            <th
              scope="col"
              className="border py-2 px-3 font-normal w-fit min-w-40"
            >
              Tags
            </th>
            <th scope="col" className="border py-2 px-3 font-normal min-w-32">
              Next meeting
            </th>
            <th scope="col" className="border-y py-2 px-3 font-normal ">
              +
            </th>
          </tr>
        </thead>
        <tbody className="">
          {filteredData &&
            filteredData.map((item, index) => {
              return (
                <tr
                  className={selectedBrands.includes(index) ? "bg-gray-50" : ""}
                  key={index}
                >
                  <td className="border-y py-1 px-3">
                    <div className="flex items-center gap-2 justify-between cursor-default">
                      <div className="flex items-center text-xs sm:text-base">
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded-lg outline-none mr-1.5 cursor-pointer accent-black"
                          onChange={() => handleCheckboxChange(index)}
                          checked={selectedBrands.includes(index)}
                        />
                        <img
                          src={item.logo}
                          alt=""
                          width={500}
                          height={500}
                          className="w-6 h-6 bg-contain"
                        />
                        {item.brand}
                      </div>
                      <div className="flex items-center gap-0.5 text-gray-500">
                        <TiMessages className="text-xs" />
                        <span className="text-xs">{index + 1}</span>
                      </div>
                    </div>
                  </td>
                  <td
                    className="border py-1 px-3 cursor-pointer "
                    onClick={() => toggleDescription(index)}
                  >
                    {isDescriptionExpanded(index) ? (
                      <span className="text-sm w-full">{item.description}</span>
                    ) : (
                      <span className="text-sm w-full !line-clamp-1 truncate">
                        {item.description.slice(0, 36)}...
                      </span>
                    )}
                  </td>
                  <td className="border py-1 px-4 text-xs relative">
                    {item.member.split(",").map((name, index) => (
                      <div className="absolute top-0 w-5" key={index}>
                        <Avatar
                          sx={{
                            width: 25,
                            height: 25,
                            fontSize: 12,
                            position: "absolute",
                            left: index * 18 + "px",
                            zIndex: index,
                            bgcolor: avatarColors[index % avatarColors.length],
                          }}
                          className="transition-all duration-300 ease-in-out hover:scale-125 hover:z-50 top-1 cursor-pointer"
                        >
                          {name.trim().charAt(0)}
                        </Avatar>
                      </div>
                    ))}
                  </td>

                  <td className="border py-1 px-4">
                    {item.categories.map((category, index) => (
                      <span
                        key={index}
                        className={`rounded-md py-0.5 px-1.5 text-xs ${category.color} ${category.textColor} mr-1`}
                      >
                        {category.name}
                      </span>
                    ))}
                  </td>
                  <td className="border py-1 px-4 sm:w-40 text-sm text-gray-500">
                    <span className="rounded-md py-0.5 px-1.5 bg-gray-300 w-auto">
                      {item.tags}
                    </span>
                  </td>
                  <td className="border py-1 px-4 w-36">
                    <span
                      className={`${item.meetingColor}
                  rounded-md py-0.5 px-1.5 text-xs`}
                    >
                      {item.nextMeeting}
                    </span>
                  </td>
                  <td className="border-y py-1 px-4"></td>
                </tr>
              );
            })}
          <tr className="text-right text-gray-500">
            <td className="border-y px-2 text-sm">
              <span className="text-black">10</span> count
            </td>
            <td className="border px-2">+ Add calculation</td>
            <td className="border  px-2">+ Add calculation</td>
            <td className="border  px-2">+ Add calculation</td>
            <td className="border px-2">+ Add calculation</td>
            <td className="border px-2"></td>
            <td className="border-y px-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BrandTable;
