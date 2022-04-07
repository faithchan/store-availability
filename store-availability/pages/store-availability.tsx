import React from "react";
import CategoryBar from "../components/CategoryBar";
import { useContext, useEffect } from "react";
import GlobalContext from "../context/context";
const storeavailability = () => {
  const {
    productFamily,
    store,
    currentProduct,
    savedItems,
    setCurrentProduct,
    setProductFamily,
    setSavedItems,
    setStore,
  } = useContext(GlobalContext);
  useEffect(() => setProductFamily("test"), []);

  return (
    <div className="mx-auto">
      <CategoryBar />
    </div>
  );
};

export default storeavailability;
