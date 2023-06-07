/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import { useEffect } from "react";

interface ItemProps {
  name: string;
  qty: number;
  price: number | string;
}

function Item(props: ItemProps) {
  useEffect(() => console.log("data", props), []);
  return (
    <div className="item">
      <span>Hello World</span>
    </div>
  );
}
export default Item;
