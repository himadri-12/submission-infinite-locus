import React, { useState } from "react";
import { Category } from "../services";
import FirstImage from "../assests/CategoryPage/10_minute_delivery.avif";
import SecondImage from "../assests/CategoryPage/Best_Prices_Offers.avif";
import ThirdImage from "../assests/CategoryPage/Wide_Assortment.avif";

export default function CategoryPage() {
  const [imageToShow, setImageToShow] = useState("");
  const [clickedIndex, setClickedIndex] = useState(0);
  console.log("imageToShow", imageToShow);
  return (
    <div className="category">
      <div className="image-carousel">
        <img
          src={imageToShow === "" ? Category.priorityImageUrl : imageToShow}
          height={400}
          width={400}
        />
        <div className="packet-container">
          {Category.assets?.map((i, index) => {
            return (
              <img
                src={i.imageUrl}
                className="packet"
                onClick={() => {
                  setImageToShow(i.imageUrl);
                  setClickedIndex(index);
                }}
                style={{
                  border: `1px solid ${
                    clickedIndex === index ? "#0d831e" : "#f2f2f2"
                  }`,
                }}
              />
            );
          })}
        </div>
        <div className="product-details-text">Product Details</div>
        <div>
          <div className="category-product-title">Full Cream Milk</div>
          <div className="category-product-desc">Type</div>
        </div>
        <div>
          <div className="category-product-title">Unit</div>
          <div className="category-product-desc">1L</div>
        </div>
        <div>
          <div className="category-product-title">Storage Tips</div>
          <div className="category-product-desc">Refrigerated</div>
        </div>
        <div>
          <div className="category-product-title">Ingredients</div>
          <div className="category-product-desc">Milk</div>
        </div>
        <div>
          <div className="category-product-title">Shelf Life</div>
          <div className="category-product-desc">2 Days</div>
        </div>
        <div>
          <div className="category-product-title">Return Policy</div>
          <div className="category-product-desc">
            TyThe product is non-returnable. For a damaged, defective, expired
            or incorrect item, you can request a replacement within 24 hours of
            delivery. In case of an incorrect item, you may raise a replacement
            or return request only if the item is sealed/ unopened/ unused and
            in original condition.pe
          </div>
        </div>
        <div>
          <div className="category-product-title">Manufacturer's Address</div>
          <div className="category-product-desc">
            Gujarat cooperative Milk Marketing Fedration Ltd., Amul Dairy Road,
            Opposite Hotel Surabhi,
          </div>
        </div>
        <div>
          <div className="category-product-title">Market's Address</div>
          <div className="category-product-desc">
            Gujarat cooperative Milk Marketing Fedration Ltd., Amul Dairy Road,
            Opposite Hotel Surabhi,
          </div>
        </div>
      </div>
      <div className="category-details">
        <div className="wrapper">
          <div className="category-details-text">{Category?.name}</div>
          <div className="view-all">View All By Amul</div>
        </div>
        <div>
          <div className="select-unit-text">Select an Unit</div>
          <div>
            <div className="unit-container">
              <div className="cat-unit-text">500ml</div>
              <div>
                MRP
                <span> ₹34</span>
              </div>
            </div>
          </div>
          <div className="incl-text">(Inclusive of all taxes)</div>
          <div>
            <div
              style={{
                fontSize: "16px",
                color: "#000",
                fontWeight: "600",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Why shop from blinkit?
            </div>
            <div>
              <div className="flex">
                <img src={FirstImage} className="why-image" />
                <div>
                  <p className="why-heading">Super Fast Delivery </p>
                  <p className="why-desc">
                    Get your order delivered to your doorstep at the earliest
                    from dark stores near you.
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src={SecondImage} className="why-image" />
                <div>
                  <p className="why-heading">Best Prices & Offers</p>
                  <p className="why-desc">
                    Best price destination with offers directly from the
                    manufacturers.
                  </p>
                </div>
              </div>
              <div className="flex">
                <img src={ThirdImage} className="why-image" />
                <div>
                  <p className="why-heading"> Wide Assortment</p>
                  <p className="why-desc">
                    Choose from 5000+ products across food, personal care,
                    household & other categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
