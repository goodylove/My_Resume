import React from "react";
import { aboutMe, skills, professionalData } from "../data/page-data";
import ProffesionalExp from "./components/Professinal-experience";
import AboutMe from "./components/Aboutme";
const Page: React.FC = () => {
  return (
    <div className="">
      <AboutMe data={aboutMe} skill={skills} />
      <ProffesionalExp data={professionalData} />
    </div>
  );
};

export default Page;
