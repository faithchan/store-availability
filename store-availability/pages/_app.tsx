import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Static from "../components/Static";
import GlobalContext from "../context/context";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [productFamily, setProductFamily] = useState("");
  const [store, setStore] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");
  const [savedItems, setSavedItems] = useState([]);
  const [selectProductFamily, setSelectProductFamily] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const valueStorage = {
    selectedProduct: selectedProduct,
    selectProductFamily: selectProductFamily,
    productFamily: productFamily,
    store: store,
    currentProduct: currentProduct,
    savedItems: savedItems,
    setSelectedProduct: (selectedProduct: any) =>
      setSelectedProduct(selectedProduct),
    setSelectProductFamily: (selectProductFamily: string) =>
      setSelectProductFamily(selectProductFamily),
    setProductFamily: (productFamily: string) =>
      setProductFamily(productFamily),
    setStore: (store: string) => setStore(store),
    setCurrentProduct: (currentProduct: string) =>
      setCurrentProduct(currentProduct),
    setSavedItems: (savedItems: any) => setSavedItems(savedItems),
  };
  return (
    <div>
      <GlobalContext.Provider value={valueStorage}>
        <Head>
          <title>Apple</title>
        </Head>
        <Static>
          <Component {...pageProps} />
        </Static>
      </GlobalContext.Provider>
    </div>
  );
}

export default MyApp;
