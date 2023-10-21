import React from "react";
import ClubActivityCard from "./ClubActivityCard";

export default function MediaAndTopUni() {
  return (
    <>
      <section className="mt-8">
      <p className="text-2xl font-bold mt-4 text-center uppercase">
        Media Coverage
      </p>
      <div className="flex flex-wrap justify-around mt-6">
        <ClubActivityCard img="./ekush.png" />
        <ClubActivityCard img="./sokal.png" />
        <ClubActivityCard img="./amader.png" />
        <ClubActivityCard img="./kaler.png" />
        <ClubActivityCard img="./vorer.png" />
        <ClubActivityCard img="./prothom.png" />
      </div>
      </section>
      <section>
      <p className="text-2xl font-bold py-4 mt-4 bg-slate-700 text-white text-center uppercase">
        MRC in Top Universities
      </p>
      <div className="flex flex-wrap justify-around mt-6">
        <ClubActivityCard img="./uni1.jpg" />
        <ClubActivityCard img="./uni2.jpg" />
        <ClubActivityCard img="./uni3.jpg" />
        <ClubActivityCard img="./uni4.jpg" />
      </div>
      </section>
    </>
  );
}
