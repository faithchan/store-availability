import React, { useContext } from "react";
import Navbar from "./Navbar";
import ProductSearch from "./ProductSearch";
import StoreSearch from "./StoreSearch";
import GlobalContext from "../context/context";

const Static = ({ children }: { children: any }) => {
  const {
    productFamily,
    setProductFamily,
    setSelectProductFamily,
    selectProductFamily,
  } = useContext(GlobalContext);
  return (
    <div className="bg-lightgray ">
      <Navbar />
      <h1 className="my-12 font-medium text-center text-5xl">
        Store availability
      </h1>
      <div className="px-32 bg-lightgray h-screen">
        <div className="flex px-5 justify-center ">
          <ProductSearch />
          <StoreSearch />
          <button
            className="ml-3 bg-lightgray px-10 border-2 rounded-md w-40 h-11.5 "
            onClick={() => setProductFamily(selectProductFamily)}
          >
            Go
          </button>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Static;
