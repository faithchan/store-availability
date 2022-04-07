import React from "react";
import CategoryBar from "../components/CategoryBar";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/context";

const storeavailability = () => {
  const {
    selectProductFamily,
    productFamily,
    store,
    currentProduct,
    savedItems,
    setSelectProductFamily,
    setCurrentProduct,
    setProductFamily,
    setSavedItems,
    setStore,
  } = useContext(GlobalContext);

  console.log(store, selectProductFamily);
  return (
    <div className="mx-auto">
      {productFamily === "iPhone" ? <CategoryBar /> : ""}
    </div>
  );
};

export default storeavailability;
