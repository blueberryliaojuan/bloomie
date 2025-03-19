import React from "react";
// import { useState } from "react";
import Tag from "./Tag";
import { IonIcon } from "@ionic/react";
import { heartOutline, cartOutline } from "ionicons/icons";

const FlowerItem = ({
  name,
  description,
  image,
  price,
  tags,
  favorite,
  onAddToFavorites,
}) => {
  // const [favorites, setFavorites] = useState([]); // Manage favorites
  // const [cart, setCart] = useState([]); // Manage cart

  // Handle adding to favorites
  // const onAddToFavorites = () => {};
  // Handle adding to cart
  // const handleAddToCart = () => {};
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p
          className="text-lg font-bold mt-2"
          style={{ color: "var(--primary-color)" }}
        >
          ${price}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Add to Cart Button */}
        <button
          className=" text-white py-2 px-4 rounded-md hover:bg-blue-400 flex items-center cursor-pointer"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--secondary-color)",
          }}
        >
          <IonIcon icon={cartOutline} className="text-lg mr-2 " />
          Add to Cart
        </button>

        {/* Add to Favorites Icon */}
        <button
          className={`p-2 rounded-full cursor-pointer`}
          style={{
            color: favorite ? "var(--primary-color)" : "var(--secondary-color)",
          }}
          onClick={() => onAddToFavorites(name)}
        >
          {/* <ion-icon name="heart-outline" className="text-xl"></ion-icon> */}
          <IonIcon icon={heartOutline} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FlowerItem;
