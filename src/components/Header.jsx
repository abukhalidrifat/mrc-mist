import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between bg-slate-300">
      <div>
        <img className="w-[100px] h-[80px]" src="./mrcLogo.png" alt="mrc" />
      </div>
      <div>
        <ul className="flex mt-5 gap-x-4 font-semibold">
          <li className="bg-transparent hover:bg-orange-500  text-orange-500 font-semibold hover:text-white py-2 px-4 border border-orange-500  hover:border-transparent rounded mr-4">
            Join Robolution 2023
          </li>
        </ul>
      </div>
    </div>
  );
}
