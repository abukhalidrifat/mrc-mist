import React from "react";

export default function About() {
  return (
    <>
      <p className="text-2xl font-bold mt-8 text-center uppercase">About MRC</p>
      <div className="text-center px-4">
        <ul className="text-lg font-medium mt-6 inline-block text-left text-slate-600">
          <li className="mb-3">
            🤖 First student’s organization in MIST and one of the most
            prestigious Clubs in Bangladesh.
          </li>
          <li className="mb-3">
            🤖 Started it’s journey in 2013 under the supervision of EECE
            department.
          </li>
          <li className="mb-3">
            🤖 Over 8K+ active followers in our social media.
          </li>
        </ul>
      </div>
      <div className="bg-slate-800 text-white p-6 mt-4">
        <p className="text-2xl font-bold text-center uppercase text-slate-200">
          Mission of MRC
        </p>
        <p className="font-medium text-center w-[65%] m-auto mt-4">
          Spreading knowledge about robotics and leadership and producing
          technically skilled engineers with great leadership quality.
        </p>
      </div>
      <div className="p-6 mt-4">
        <p className="text-2xl font-bold mt-4 text-center uppercase">Vission of MRC</p>
        <p className="font-medium text-center w-[65%] m-auto mt-4 text-slate-600">
          Striving to establish an exceptional Robotics platform on our campus,
          setting the bar for excellence.
        </p>
      </div>
      <div className="bg-slate-800 text-white p-6 mt-4">
        <p className="text-2xl font-bold text-center uppercase text-slate-200">
          Motto of MRC
        </p>
        <p className="font-medium uppercase text-center w-[65%] m-auto mt-4">
          Soar high, sky is the limit
        </p>
      </div>
      <div className="p-2">
        <p className="text-2xl font-bold mt-8 uppercase text-center">Structure of MRC</p>
        <img src="./structure.png" alt="mrc" className="w-full mt-8" />
      </div>
    </>
  );
}
