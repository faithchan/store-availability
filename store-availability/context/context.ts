import { createContext } from "react";

interface selectedProducts {
  selectProductFamily: string;
  productFamily: string;
  store: string;
  currentProduct: string;
  savedItems: any;
  setSelectProductFamily: (a: string) => void;
  setProductFamily: (a: string) => void;
  setStore: (a: string) => void;
  setCurrentProduct: (a: string) => void;
  setSavedItems: (a: any) => void;
}

const productsDefaultValue = {
  selectProductFamily: "null",
  productFamily: "null",
  store: "null",
  currentProduct: "null",
  savedItems: "null",
  setSelectProductFamily: (selectProductFamily: string) => "",
  setProductFamily: (productFamily: string) => "",
  setStore: (store: string) => null,
  setCurrentProduct: (currentProduct: string) => "",
  setSavedItems: (savedItems: any) => null,
};

const Context = createContext<selectedProducts>(productsDefaultValue);

export default Context;
