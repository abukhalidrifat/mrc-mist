import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ClubActiviy from "./components/ClubActiviy";
import ClubActivityCard from "./components/ClubActivityCard";
import Achievement from "./components/Achievement";
import Research from "./components/Research";
import Robolution from "./components/Robolution";
import MediaAndTopUni from "./components/MediaAndtopUni";
import Footer from "./components/Footer";
import Slider from "./components/SLider";

function App() {
  const activities = [
    {
      img: "./regularclass.jpg",
      title: "Regular Class",
    },
    {
      img: "./labwork.jpg",
      title: "Lab Works",
    },
    {
      img: "./orientation.jpg",
      title: "Orientation Program",
    },
    {
      img: "./ppc.jpg",
      title: "Poster presentation competetion",
    },
    {
      img: "./ps.jpg",
      title: "Project Showcasing",
    },
    {
      img: "./imrs.jpg",
      title: "Intra MIST Robo-Soccer",
    },
  ];

  return (
    <>
      <Header />
      <Slider/>
      <About />
      <ClubActiviy />
      <div className="flex flex-wrap justify-around">
        {activities.map((data, index) => (
          <ClubActivityCard key={index} img={data.img} title={data.title} />
        ))}
      </div>
      <Achievement/>
      <Research/>
      <Robolution/>
      <MediaAndTopUni/>
      <Footer/>
    </>
  );
}

export default App;
