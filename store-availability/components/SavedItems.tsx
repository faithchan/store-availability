import React from "react";
import { useContext } from "react";
import GlobalContext from "../context/context";

const SavedItems = () => {
  const { savedItems, setSavedItems } = useContext(GlobalContext);
  console.log(savedItems);

  return (
    <div className="mt-6 flex justify-center pb-6 bg-lightgray ">
      <div className="bg-white text-center rounded-xl border ">
        {/* Start of Title and divider */}
        <div className="grid grid-cols-1 my-4 divide-y w-fit ">
          <div className="text-3xl font-sf font-medium pb-4 px-72 mx-3">
            Saved Items
          </div>
          {savedItems.length > 0 ? (
            savedItems.map((item: any) => (
              <div className="text-sm py-4">
                <p key={item.model}>
                  {item.model} {item.capacity} {item.finish} {item.price} @
                  {item.store}
                </p>
              </div>
            ))
          ) : (
            <div className="text-sm py-4 text-medgray">No items saved</div>
          )}
          <div className="flex justify-center pt-6 pb-2">
            <input
              placeholder="Enter email to share items"
              className="bg-white w-72 px-4 py-2 border rounded-md text-sm"
            />
            <button className="ml-3 bg-lightgray px-10 border-2 rounded-md w-40 h-11 ">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
