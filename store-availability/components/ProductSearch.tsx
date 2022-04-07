import React, { useState, Fragment, useContext, useEffect } from "react";
import { products } from "../data/dummydata";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  SelectorIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import GlobalContext from "../context/context";
import Link from "next/link";

const ProductSearch = () => {
  const { selectProductFamily, setSelectProductFamily } =
    useContext(GlobalContext);
  useEffect(() => setSelectProductFamily("Select Product Family"), []);

  return (
    <div className="w-72 mr-3 ">
      <Listbox value={selectProductFamily} onChange={setSelectProductFamily}>
        <Listbox.Button className="inline-flex justify-between w-72 rounded-md border bg-white py-3 px-4 mr-3">
          <p className="mr-14 my-auto text-sm text-gray-400">
            {selectProductFamily}{" "}
          </p>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 my-auto text-gray-400" />
        </Listbox.Button>

        <Listbox.Options className="w-72 bg-white text-gray-400 py-2">
          {products.map((product) => (
            <Listbox.Option
              key={product}
              value={product}
              className="cursor-pointer px-5 py-1.5 text-sm"
            >
              {product}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ProductSearch;
