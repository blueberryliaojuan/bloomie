import React from "react";
import Tag from "./Tag";
import { IonIcon } from "@ionic/react";
import { heartOutline, cartOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

const FlowerItem = ({
  id,
  name,
  description,
  image,
  price,
  tags,
  favorite,
  onAddToFavorites,
}) => {
  const navigate = useNavigate();
  // 跳转到详情页面的函数
  const toDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-64 object-cover cursor-pointer"
        src={image}
        alt={name}
        onClick={toDetail}
      />
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
        {Array.isArray(tags) &&
          tags.map((tag, index) => <Tag key={index} name={tag} />)}
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Add to Cart Button */}
        <button
          className=" text-white py-2 px-4 rounded-md  flex items-center cursor-pointer"
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
          onClick={() => onAddToFavorites(id)}
        >
          <IonIcon icon={heartOutline} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FlowerItem;
