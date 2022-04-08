import React from "react";
import CategoryBar from "../components/CategoryBar";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/context";
import ProductCard from "../components/ProductCard";
import SavedItems from "../components/SavedItems";

const Storeavailability = () => {
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
      {currentProduct === "iPhone 13 Pro" && productFamily === "iPhone" ? (
        <ProductCard />
      ) : (
        ""
      )}
      <SavedItems />
    </div>
  );
};

export default Storeavailability;
