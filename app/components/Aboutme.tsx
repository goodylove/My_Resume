import React, { useId } from "react";
import Skill from "./Skills";

type AboutProps = {
  data: {
    title: string;
    body: string[];
  };
  skill: {};
};

const AboutMe = ({ data, skill }: AboutProps) => {
  const { title, body } = data;
  const id = useId();
  return (
    <div>
      <h2 className="mb-3 font-display">{title}</h2>
      {body?.map((el, i) => (
        <p key={`${id}_${i}`}>{el}</p>
      ))}
      <Skill data={skill} />
    </div>
  );
};

export default AboutMe;
