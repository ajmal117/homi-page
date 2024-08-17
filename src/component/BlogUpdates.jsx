import React from "react";
import blg1 from "../images/blg1.png";
import blg2 from "../images/blg2.png";
import blg3 from "../images/blg3.png";

const BlogUpdates = () => {
  const posts = [
    {
      title: "User interface design or user interface engineering",
      category: "UI/UX Design",
      date: "23 Oct 2022",
      imageUrl: blg1, // Replace with actual image URL
    },
    {
      title: "Web design encompasses many different skills",
      category: "Web Design",
      date: "13 Dec 2022",
      imageUrl: blg2, // Replace with actual image URL
    },
    {
      title: "Jim Morisson Says when the musics over turn off the light",
      category: "Web Development",
      date: "23 Dec 2022",
      imageUrl: blg3, // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-[#1E1D2D] text-white py-12 px-4 md:px-24 flex justify-center flex-col items-center">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 font-semibold">From My Blog</h2>
        <h3 className="text-2xl font-bold">
          Our Recent Updates, Blog, Tips, Tricks & More
        </h3>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-4">
        {posts.map((post, index) => (
          <div key={index} className="relative w-80">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-[90%] md:w-full h-36 md:h-48 object-cover"
            />
            <div className=" bottom-0 left-0 right-0  from-black to-transparent p-4 ">
              <span className="text-sm text-orange-500">{post.category}</span>
              <h4 className="text-lg font-semibold mt-2">{post.title}</h4>
              <span className="text-md text-white/90 absolute top-0 right-8 md:right-0 p-2 bg-slate-900">
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogUpdates;
