"use client";

import React, { useState } from "react";
const Skill = ({ data }) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-gray");

  const setTab = (active) => ("soft" === active ? "text-left" : "text-right");
  const tab = (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTab(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none gap-2 mt-5 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skill bg-blue">
          <span>{icon}</span>
          {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {tab}
      {content}
    </div>
  );
};

export default Skill;
