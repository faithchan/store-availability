import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Listbox, Transition, Menu } from "@headlessui/react";

const StoreSearch = () => {
  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-between w-72 rounded-md border bg-white py-2 px-4 ">
          <p className="mr-14 my-auto  text-gray-400">All Stores</p>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 my-auto text-gray-400" />
        </Menu.Button>
      </Menu>
    </div>
  );
};

export default StoreSearch;
