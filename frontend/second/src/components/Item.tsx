/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import React from "react";
import { ItemContext } from "../context/ItemContext";

function Item() {
  const value = React.useContext(ItemContext);
  React.useEffect(() => {
    console.log(value, ">>>>data");
  }, []);

  return (
    <div className="item">
      <span>Hello World</span>
      <br />
      <span>Item name: {value.name}</span>
      <br />
      <span>Item quantity: {value.qty}</span>
      <br />
      <span>Item price: {value.price}</span>
    </div>
  );
}
export default Item;
