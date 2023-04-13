"use client";
import React, { useState } from "react";

type SkillProps = {
  data: {
    soft: {
      icon: string;
      text: string;
    }[];
    hard: {
      icon: string;
      text: string;
    }[];
  };
};
type SkillCategory = "soft" | "hard";

const Skill = ({ data }: SkillProps) => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("soft");
  const setBg = (active: SkillCategory) =>
    activeTab === active ? "bg-yellow" : "bg-gray";

  const setTab = (active: SkillCategory) =>
    "soft" === active ? "text-left" : "text-right";
  const typeProps: SkillCategory[] = ["soft", "hard"];
  const tab = (
    <div className="flex">
      {typeProps.map((el) => (
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
      {data[activeTab].map((item, inedx) => (
        <li key={inedx} className="skill bg-blue">
          <span>{item.icon}</span>
          {item.text}
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
