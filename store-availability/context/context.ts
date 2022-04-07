import { createContext } from "react";

interface selectedProducts {
  productFamily: string;
  store: string;
  currentProduct: string;
  savedItems: any;
  setProductFamily: (a: string) => void;
  setStore: (a: string) => void;
  setCurrentProduct: (a: string) => void;
  setSavedItems: (a: any) => void;
}

const productsDefaultValue = {
  productFamily: "null",
  store: "null",
  currentProduct: "null",
  savedItems: "null",
  setProductFamily: (productFamily: string) => "",
  setStore: (store: string) => null,
  setCurrentProduct: (currentProduct: string) => "",
  setSavedItems: (savedItems: any) => null,
};

const Context = createContext<selectedProducts>(productsDefaultValue);

export default Context;
