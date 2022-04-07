import React, { useContext } from "react";
import GlobalContext from "../context/context";

const ProductCard = () => {
  const { currentProduct } = useContext(GlobalContext);
  return (
    <div className="mx-20 mt-3">
      <div className="bg-white w-full text-center  rounded-xl border">
        {/* Title Section */}
        <div className="grid grid-cols-1 my-4 divide-y">
          <div className="text-3xl font-sf font-medium pb-4">
            {currentProduct}
          </div>
          <div></div>
        </div>
        {/* End of Title Section */}

        <div className="grid grid-cols-5 divide-x text-darkgray -mt-4">
          <div className="text-3xl font-sf font-medium pb-4 col-span-2"></div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
