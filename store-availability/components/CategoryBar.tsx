import React, { useContext } from "react";
import { phones } from "../data/dummydata";
import GlobalContext from "../context/context";

const CategoryBar = () => {
  const { currentProduct, setCurrentProduct } = useContext(GlobalContext);

  return (
    <div className="flex justify-center px-2 ">
      <div className="space-x-2.5">
        {phones.map((phone) => (
          <button
            className=" mt-6 mb-3 w-36 bg-white border text-darkgray tracking-wide font-MT font-bold py-3 px-6 rounded-full text-xs mx-auto hover:bg-darkgray hover:text-white transition ease-in-out active:bg-darkgray active:text-white"
            key={phone}
            onClick={() => setCurrentProduct(phone)}
          >
            {phone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
