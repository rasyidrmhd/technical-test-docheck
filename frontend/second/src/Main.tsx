/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */
import Item from "./components/Item";

function Main() {
  return (
    <div id="main">
      <Item name="Bread" qty={20} price={"$3" as string} />
    </div>
  );
}
export default Main;
