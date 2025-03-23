import React from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const addedItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="my-cart">
      <div className="my-cart-text-2">My Cart</div>
      <div className="my-cart-container">
        {addedItems.map((item) => {
          console.log(addedItems, "addedItems");
          return (
            <div className="cart-items">
              <img src={item.image_url} className="my-cart-image-container" />
              <div>
                <div className="my-cart-item-name">{item.name}</div>
                <div className="my-cart-unit">{item.unit}</div>
                <div className="my-cart-price">₹ {item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
