import React from "react";
import { phones } from "../data/dummydata";

const CategoryBar = () => {
  return (
    <div className="flex justify-center px-2 ">
      <div className="space-x-5">
        {phones.map((phone) => (
          <button className=" mt-6 mb-3 bg-white border text-darkgray tracking-wider font-MT font-semibold py-3 px-8 rounded-full text-xs mx-auto hover:bg-darkgray hover:text-white transition ease-in-out active:bg-darkgray active:text-white">
            {phone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
