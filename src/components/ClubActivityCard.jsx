import React from "react";

export default function ClubActivityCard({ img, title = null }) {
  return (
    <div className="p-4 my-4">
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-full h-[220px]" src={img} alt="mrc crad img" />
        {title && <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
        </div>}
      </div>
    </div>
  );
}
