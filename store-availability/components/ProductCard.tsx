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
    <div className="mx-20 mt-3 flex justify-center">
      <div className="bg-white w-fit text-center  rounded-xl border">
        {/* Title Section */}
        <div className="grid grid-cols-1 my-4 divide-y">
          <div className="text-3xl font-sf font-medium pb-4">
            {currentProduct}
          </div>
          <div></div>
        </div>
        {/* End of Title Section */}

        <div className="grid grid-cols-5 divide-x text-darkgray -mt-4">
          <div className="text-sm font-sf pb-4 col-span-2 ml-10 mr-4">
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
              <div className="pl-4 mt-6 text-left">
                <span>
                  <p>
                    {productFamily} {selectedProduct.model}{" "}
                    {selectedProduct.capacity} {selectedProduct.finish}
                  </p>
                  <p>S$2,479.00</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
