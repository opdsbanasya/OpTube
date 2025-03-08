import React, { useState } from "react";
import { TAG_LIST } from "../utils/constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Tags = () => {

  const [translate, setTranslate] = useState(0)

  return (
    <section className="min-w-full flex relative">
      <div className="flex overflow-x-hidden relative">
        <span className="w-full absolute top-5 flex justify-between text-lg">
          <span className={`bg-gray-200 p-1 rounded-md cursor-pointer z-10`}><IoIosArrowBack/></span>
          <span className={`bg-gray-200 p-1 rounded-md cursor-pointer z-10`}><IoIosArrowForward /></span>
        </span>
        <div className="py-5 flex items-center gap-3 ml-10 -translate-x-20">
          {TAG_LIST.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-md font-medium text-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tags;
