import React from "react";
import Navbar from "./Navbar";

const Static = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Static;