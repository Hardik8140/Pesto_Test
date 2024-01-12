import React, { Children } from "react";

const Each = ({ of, render }) => {
  Children.toArray(of.map((el, i) => render(el, i)));
};

export default Each;
