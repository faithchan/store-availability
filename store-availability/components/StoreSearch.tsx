import React, { useState, Fragment, useContext, useEffect } from "react";
import { stores } from "../data/dummydata";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  SelectorIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import GlobalContext from "../context/context";
import Link from "next/link";

const StoreSearch = () => {
  const { store, setStore } = useContext(GlobalContext);
  useEffect(() => setStore("Select Store"), []);
  return (
    <div className="w-72 ">
      <Listbox value={store} onChange={setStore}>
        <Listbox.Button className="inline-flex justify-between w-72 rounded-lg border bg-white py-3 px-4">
          <p className="mr-14 my-auto text-sm text-gray-400">{store} </p>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 my-auto text-gray-400" />
        </Listbox.Button>

        <Listbox.Options className="w-48 bg-dropdownbg text-white py-2 absolute rounded-lg">
          {stores.map((each) => (
            <Listbox.Option
              key={each}
              value={each}
              className="cursor-pointer px-5 py-1.5 text-sm  hover:bg-dropdown"
            >
              {each}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default StoreSearch;
