/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */
import Item from "./components/Item";
import { ItemProvider } from "./context/ItemContext";

function Main() {
  return (
    <ItemProvider>
      <div id="main">
        <Item />
      </div>
    </ItemProvider>
  );
}
export default Main;
