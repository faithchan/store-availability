import React, { useState, Fragment } from "react";
import { products } from "../data/dummydata";
import { Listbox, Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

const ProductSearch = () => {
  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-between w-72 rounded-md border bg-white py-3 px-4 mr-3">
          <p className="mr-14 my-auto text-sm text-gray-400">
            Select Product Family
          </p>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 my-auto text-gray-400" />
        </Menu.Button>
      </Menu>
    </div>
  );
};

export default ProductSearch;
