import React from "react";
import ClubActivityCard from "./ClubActivityCard";

export default function Achievement() {
  const achievements = [
    {
      img: "./nmrc.png",
      title: "NASA MARS-Rover challenge",
    },
    {
      img: "./dbd.jpg",
      title: "Digital Bangladesh day",
    },
    {
      img: "./peh.jpg",
      title: "Power and Energy hackathon",
    },
  ];
  return (
    <>
      <div>
        <p className="text-2xl font-bold mt-4 py-4 text-center bg-slate-700 text-white uppercase">Achievements</p>
        <div className="flex flex-wrap justify-around">
        {achievements.map((data, index) => {
          return (
            <ClubActivityCard key={index} img={data.img} title={data.title} />
          );
        })}
        </div>
      </div>
    </>
  );
}
