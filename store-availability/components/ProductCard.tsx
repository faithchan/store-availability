import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/context";
import { iPhone13ProSpecs } from "../data/dummydata";
import iphone from "../public/iphone.png";
import Image from "next/image";

const ProductCard = () => {
  const {
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

  useEffect(() => {
    setSelectedProduct({
      model: model,
      finish: finish,
      capacity: capacity,
      store: store,
    });
  }, [model, finish, capacity, store]);

  const modelHandler = (mod: any) => {
    setModel(mod);
  };

  const finishHandler = (fin: any) => {
    setFinish(fin);
  };

  const capacityHandler = (cap: any) => {
    setCapacity(cap);
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
                <Image src={iphone} width={40} height={40} />
              </div>
              <div className="pl-4 mt-6 text-left font-sf text-sm font-medium tracking-wide ">
                <span>
                  <p>
                    {productFamily} {selectedProduct.model}{" "}
                    {selectedProduct.capacity} {selectedProduct.finish}
                  </p>
                  <p>S$2,479.00</p>
                </span>
              </div>
            </div>
            {/* Store Availability */}
            <div className="flex px-10">
              <p className="text-left text-sm font-medium mt-4 mb-2 tracking-wide">
                Store Availability:
              </p>
            </div>
            {/* Store box display for MBS if available*/}
            {selectedProduct.store === "All Stores" ||
            selectedProduct.store === "Marina Bay Sands" ? (
              <div className="flex bg-white border p-3 rounded-lg mr-5 ml-10 justify-between">
                <p className="text-xs font-bold my-auto">
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
            {selectedProduct.store === "All Stores" ||
            selectedProduct.store === "Jewel Changi Airport" ? (
              <div className="flex bg-white border p-3 rounded-lg mr-4 ml-10 justify-between mt-2">
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
            {selectedProduct.store === "All Stores" ||
            selectedProduct.store === "Orchard Road" ? (
              <div className="flex bg-white border p-3 rounded-lg mr-3 ml-10 justify-between mt-2">
                <p className="text-xs font-bold my-auto mr-4">
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
            <div className="ml-10 mt-4 mb-5 text-left font-sf text-xs text-medgray">
              <p>2 Bayfront Avenue, B2-06</p>
              <p>Singapore, 018962</p>
              <br />
              <p>
                Mon-Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
