import React from "react";

type PreffeProps = {
  data: {
    title: string;
    experiences: {
      role: string;
      description: string;
      current: string;
    }[];
  };
};
const ProffesionalExp = ({ data }: PreffeProps) => {
  const { title, experiences } = data;
  return (
    <div>
      <h2 className="mb-2">{title}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((item, index) => (
          <div key={index} className="flex flex-col rounded-lg">
            <span className={`h-2 ${item.current ? "bg-green" : "bg-grey"}`} />
            <div className="bg-grey-light p-6  drop-shadow-md">
              <h3 className="font-bold">{item.role}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProffesionalExp;
