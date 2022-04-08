import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/context";
import { iPhone13ProSpecs, storeDetails, phonePrices } from "../data/dummydata";
import iphone from "../public/iphone.png";
import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/outline";

const ProductCard = () => {
  const {
    savedItems,
    setSavedItems,
    selectedProduct,
    currentProduct,
    setSelectedProduct,
    store,
    productFamily,
  } = useContext(GlobalContext);

  console.log(selectedProduct);

  const [model, setModel] = useState("");
  const [finish, setFinish] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");

  const storeHandler = (item: string) => {
    setSelectedStore(item);
    setShowAddress(true);
  };

  // console.log(selectedStore);
  console.log(savedItems);

  useEffect(() => {
    setSelectedProduct({
      model: model,
      finish: finish,
      capacity: capacity,
      store: store,
      price: price,
    });
  }, [model, finish, capacity, store, price]);

  useEffect(() => setShowAddress(false), [store]);

  useEffect(() => {
    selectedProduct.model !== "" && selectedProduct.capacity !== ""
      ? phonePrices.map((each) =>
          each.model == selectedProduct.model &&
          each.capacity == selectedProduct.capacity
            ? setPrice(each.price)
            : ""
        )
      : "";
  }, [selectedProduct.model, selectedProduct.capacity]);

  const modelHandler = (mod: any) => {
    setModel(mod);
  };

  const finishHandler = (fin: any) => {
    setFinish(fin);
  };

  const capacityHandler = (cap: any) => {
    setCapacity(cap);
  };

  const saveItemHandler = () => {
    setSavedItems([...savedItems, selectedProduct]);
  };

  return (
    <div className=" mt-3 flex justify-center">
      <div className="bg-white w-fit text-center rounded-xl border ">
        {/* Title Section */}
        <div className="grid grid-cols-1 my-4 divide-y">
          <div className="text-3xl font-sf font-medium pb-4">
            {currentProduct}
          </div>
          <div></div>
        </div>
        {/* End of Title Section */}

        <div className="grid grid-cols-5 divide-x text-darkgray -mt-4 ">
          <div className="text-sm font-sf pb-4 col-span-2 ml-10 mr-4 my-auto">
            {/* Input Postal Code Section */}
            <input
              placeholder="Enter Postal Code (optional)"
              className="bg-white w-full  px-4 py-2 border rounded-md mt-6 "
            />
            {/* Model Section */}
            <p className="text-left font-medium mt-4 mb-2 tracking-wider">
              Model
            </p>
            <div className="flex justify-between space-x-2">
              {iPhone13ProSpecs.model.map((eachmod) => (
                <button
                  className="bg-white text-xs font-bold border rounded-md w-full py-2 hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector "
                  key={eachmod}
                  onClick={() => modelHandler(eachmod)}
                >
                  {eachmod}
                </button>
              ))}
            </div>
            {/* Finish Section */}
            <p className="text-left font-medium mt-4 mb-2 tracking-wider">
              Finish
            </p>
            <div className="flex space-x-4">
              <button
                className={`rounded-full w-8 h-8 bg-alpinegreen hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector`}
                onClick={() => finishHandler("Alpine Green")}
              />
              <button
                className={`rounded-full w-8 h-8 bg-silver hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector`}
                onClick={() => finishHandler("Silver")}
              />
              <button
                className={`rounded-full w-8 h-8 bg-gold hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector`}
                onClick={() => finishHandler("Gold")}
              />
              <button
                className={`rounded-full w-8 h-8 bg-graphite hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector`}
                onClick={() => finishHandler("Graphite")}
              />
              <button
                className={`rounded-full w-8 h-8 bg-sierrablue hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector`}
                onClick={() => finishHandler("Sierra Blue")}
              />
            </div>
            {/* Capacity Section */}
            <p className="text-left font-medium mt-4 mb-2 tracking-wider">
              Capacity
            </p>
            <div className="grid grid-cols-2 gap-2 justify-between mb-2">
              {iPhone13ProSpecs.capacity.map((cap) => (
                <button
                  className="bg-white text-xs font-bold border rounded-md w-full py-2 hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector "
                  key={cap}
                  onClick={() => capacityHandler(cap)}
                >
                  {cap}
                </button>
              ))}
            </div>
            {/* End of Capacity Section */}
          </div>
          <div className="col-span-3 mx-6">
            {/* Details of the phone and store availability */}
            {/* Phone Details */}
            <div className="flex px-10">
              <div className="mt-6">
                <Image src={iphone} width={40} height={45} />
              </div>
              <div className="pl-4 mt-6 text-left font-sf text-sm font-medium tracking-wide ">
                <span>
                  <p>
                    {productFamily} {selectedProduct.model}{" "}
                    {selectedProduct.capacity} {selectedProduct.finish}
                  </p>
                  <p>{price}</p>
                </span>
              </div>
            </div>
            {/* Store Availability */}
            <div className="flex px-10">
              <p className="text-left text-sm font-medium mt-2 mb-2 mr-52 tracking-wide">
                Store Availability:
              </p>
            </div>
            {/* Store box display for MBS if available*/}
            {(selectedProduct.store === "All Stores" &&
              selectedProduct.model !== "" &&
              selectedProduct.finish !== "" &&
              selectedProduct.capacity !== "") ||
            (selectedProduct.store === "Marina Bay Sands" &&
              selectedProduct.model !== "" &&
              selectedProduct.finish !== "" &&
              selectedProduct.capacity !== "") ? (
              <div
                className="flex bg-white border p-3 rounded-lg mr-4 ml-10 justify-between cursor-pointer hover:border-blueselector focus:outline-none focus:ring-1 focus:ring-blueselector"
                onClick={() => storeHandler("Marina Bay Sands")}
              >
                <p className="text-xs mr-1 font-bold my-auto">
                  Apple Marina Bay Sands
                </p>
                <button className="bg-white py-2 px-6 border border-green rounded-lg text-green text-xs font-sf ml-20">
                  Available
                </button>
              </div>
            ) : (
              ""
            )}
            {/* Store box display for Jewel if available*/}
            {(selectedProduct.store === "All Stores" &&
              selectedProduct.model !== "" &&
              selectedProduct.finish !== "" &&
              selectedProduct.capacity !== "") ||
            (selectedProduct.store === "Jewel Changi Airport" &&
              selectedProduct.model !== "" &&
              selectedProduct.finish !== "" &&
              selectedProduct.capacity !== "") ? (
              <div
                className={`flex bg-white border p-3 rounded-lg mr-4 ml-10 justify-between cursor-pointer hover:border-blueselector  focus:outline-none focus:ring-1 focus:ring-blueselector ${
                  selectedProduct.store === "All Stores" ? "mt-2" : ""
                }`}
                onClick={() => storeHandler("Jewel Changi Airport")}
              >
                <p className="text-xs font-bold my-auto">
                  Apple Jewel Changi Airport
                </p>
                <button className="bg-white py-2 px-6 border border-green rounded-lg text-green text-xs font-sf ml-16">
                  Available
                </button>
              </div>
            ) : (
              ""
            )}
            {/* Store box display for Orchard if available*/}
            {(selectedProduct.store === "All Stores" &&
              selectedProduct.model !== "" &&
              selectedProduct.finish !== "" &&
              selectedProduct.capacity !== "") ||
            (selectedProduct.store === "Orchard Road" &&
              selectedProduct.model !== "" &&
              selectedProduct.finish !== "" &&
              selectedProduct.capacity !== "") ? (
              <div
                className={`flex bg-white border p-3 rounded-lg mr-4 ml-10 justify-between cursor-pointer hover:border-blueselector focus:outline-none focus:ring-1 focus:ring-blueselector ${
                  selectedProduct.store === "All Stores" ? "mt-2" : ""
                }`}
                onClick={() => storeHandler("Orchard Road")}
              >
                <p className="text-xs font-bold my-auto mr-3">
                  Apple Orchard Road
                </p>
                <button className="bg-white py-2 px-6 border border-green rounded-lg text-green text-xs font-sf ml-24">
                  Available
                </button>
              </div>
            ) : (
              ""
            )}
            {/* Store Details */}
            {showAddress
              ? storeDetails.map((detail) =>
                  detail.shop === selectedStore ? (
                    <div
                      className="ml-10 mt-4 mb-5 pr-4 text-left font-sf text-xs text-medgray"
                      key={detail.shop}
                    >
                      <div className="flex justify-between">
                        <span>
                          <p>{detail.address}</p>
                          <p>{detail.postal}</p>
                        </span>
                        <div>
                          <button
                            className="bg-blueselector px-6 py-2 mr-3 rounded-lg text-white flex hover:opacity-90"
                            onClick={saveItemHandler}
                          >
                            Save Item
                          </button>
                        </div>
                      </div>
                      <br />
                      <p>{detail.opening}</p>
                    </div>
                  ) : (
                    ""
                  )
                )
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
