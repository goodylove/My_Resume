import React from "react";
import Image from "next/image";
import { Envelope, Linkedin, Twitter, Github } from "./icons";

type SidebarProps = {
  data: {
    name: string;
    role: string;
    education: string[];
    contactLinks: string[];
  };
};
const SideBar = ({ data }: SidebarProps) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black h-auto  sm:h-screen  flex flex-col sm:justify-around sm:w-1/3 sm:fixed w-full content-between  ">
      <div className="text-white flex flex-col p-10  items-center">
        <Image
          width={300}
          height={300}
          priority
          src="/image/goody.jfif"
          className="rounded-full h-full mb-6"
          alt="profile image"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <p className="mb-2">{education[2]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-4">
          <h3 className="mb-2">CONTACT ME</h3>
          <div className="flex flex-row justify-center gap-2">
            <a className="contact-me" href={contactLinks?.[0]}>
              <Envelope className={""} />
            </a>
            <a className="contact-me" href={contactLinks?.[1]}>
              <Linkedin className={""} />
            </a>
            <a className="contact-me" href={contactLinks?.[2]}>
              <Twitter className={""} />
            </a>
            <a className="contact-me" href={contactLinks?.[3]}>
              <Github className={""} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
