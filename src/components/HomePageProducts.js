import React from "react";
import { HomePageProductsService } from "../services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function HomePageProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addToCartFuntion(product) {
    navigate("/add-to-cart");
    dispatch(addToCart(product));
  }
  return (
    <div>
      <div className="product-details-heading">Dairy, Bread & Eggs</div>
      <div className="grid-container">
        {HomePageProductsService.map((product) => {
          const productArrayFirstItem = product[0];
          return (
            <div className="product-container">
              <div onClick={() => navigate("/product")}>
                <img
                  src={productArrayFirstItem.image_url}
                  height={100}
                  width={100}
                />
                <div className="group-name">
                  {productArrayFirstItem.group_name}
                </div>
              </div>
              <div className="delivery">
                <img
                  src={productArrayFirstItem.eta_tag.icon_image_uri}
                  width={11}
                  height={11}
                />
                <div className="delivery-time">8 mins</div>
              </div>
              <div className="unit">{productArrayFirstItem.unit}</div>
              <div className="price">
                <div>₹ {productArrayFirstItem.price}</div>
                <div
                  className="add-button"
                  onClick={() => addToCartFuntion(productArrayFirstItem)}
                >
                  Add
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
