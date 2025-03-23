import React from "react";
import HomePageProducts from "../components/HomePageProducts";
import PanCornerImage from "../assests/Home/pan-corner.png";
import Pharmacy from "../assests/Home/pharmacy-WEB.avif";
import BabyCare from "../assests/Home/babycare-WEB.avif";
import PetCare from "../assests/Home/Pet-Care_WEB.avif";
import { HomePageItems } from "../services";

export default function HomePage() {
  return (
    <div>
      <div>
        <img src={PanCornerImage} className="pan-image" />
      </div>
      <div className="multiImages">
        <img src={Pharmacy} className="home-image" />
        <img src={BabyCare} className="home-image" />
        <img src={PetCare} className="home-image" />
      </div>
      <div className="grid-container">
        {HomePageItems.map((item) => {
          return (
            <div>
              <img
                src={item.image}
                alt={item.image_title}
                height={188}
                width={128}
              />
            </div>
          );
        })}
      </div>
      <div>
        <HomePageProducts />
      </div>
    </div>
  );
}
