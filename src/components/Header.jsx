import { useContext } from "react";
import logo from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import Button from "./UI/Button.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="a restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
