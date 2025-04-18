import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  // 获取 favorite=true 的花卉数据
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/flowers?favorite=true"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []); // 只在组件挂载时执行一次

  // 移除 favorite 项目
  const updateFavoriteStatus = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/flowers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorite: false }), // 设置 favorite 为 false
      });

      if (response.ok) {
        // 从本地状态中移除该项
        setFavorites(favorites.filter((item) => item.id !== id));
      } else {
        console.error("Failed to update favorite status");
      }
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  return (
    <div>
      <Header />
      <main className="p-6 max-w-4xl mt-8 mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-lg">No items in your favorites list.</p>
        ) : (
          <ul className="space-y-4">
            {favorites.map((item) => (
              <li
                key={item.id}
                className="p-4 bg-gray-100 rounded-lg shadow flex items-center space-x-4"
              >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-24 w-24 object-cover" // set a fixed height and width for the image
                />
                <div className="flex flex-col justify-start">
                  <h2 className="text-xl font-semibold text-left">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-left">{item.description}</p>
                </div>
                <div className="ml-auto">
                  {" "}
                  {/*  ml-auto make button align right*/}
                  <button
                    onClick={() => updateFavoriteStatus(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Favorite;
