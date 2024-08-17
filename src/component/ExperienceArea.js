import React, { useEffect, useState, useRef } from "react";

const skills = [
  { name: "Facebook Marketing", percentage: 90 },
  { name: "Search Engine Optimization", percentage: 80 },
  { name: "Content Writing", percentage: 95 },
  { name: "Youtube Marketing", percentage: 72 },
  { name: "Affiliate Marketing", percentage: 50 },
  { name: "Graphic Design", percentage: 90 },
  { name: "Web Ui Design", percentage: 49 },
  { name: "Web Design", percentage: 70 },
];

export default function ExperienceArea() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimationStarted(true);
        }
      },
      { threshold: 1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#fdf8f7] py-16 px-4 md:px-24" ref={componentRef}>
      <div className="text-center mb-10">
        <h3 className="text-orange-500 text-xl font-semibold">Why Choose Me</h3>
        <h2 className="text-blue-900 text-3xl font-bold">My Experience Area</h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <div className="md:w-3/4 text-blue-900 text-lg font-semibold flex justify-between">
              {skill.name}
              <div className="text-blue-900 text-lg font-semibold">
                {skill.percentage}%
              </div>
            </div>
            <div className="w-2/3 md:w-3/4 bg-gray-300 rounded-full h-2.5 flex justify-between">
              <div
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
                style={{
                  width: animationStarted ? `${skill.percentage}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
