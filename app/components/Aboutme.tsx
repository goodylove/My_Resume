import React, { useId } from "react";
import Skill from "./Skills";

type AboutProps = {
  data: {
    title: string;
    body: string[];
  };
  skills: {
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

const AboutMe = ({ data, skills }: AboutProps) => {
  const { title, body } = data;
  const id = useId();
  return (
    <div>
      <h2 className="mb-3 font-display">{title}</h2>
      {body?.map((el, i) => (
        <p key={`${id}_${i}`}>{el}</p>
      ))}
      <Skill data={skills} />
    </div>
  );
};

export default AboutMe;
