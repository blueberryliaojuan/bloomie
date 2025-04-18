import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header"; // Header component for the page
import Footer from "@/components/layout/Footer";
import FlowerItem from "@/components/common/FlowerItem";
import { IonIcon } from "@ionic/react";
import { heartCircle } from "ionicons/icons";

import "./index.css";

const product = () => {
  const initialFlowers = [];

  const [flowers, setFlowers] = useState(initialFlowers); // Flowers state with favorite status // Manage favorites
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch flowers data from the server
  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await fetch("http://localhost:3000/flowers");
        if (!response.ok) {
          throw new Error("Failed to fetch flowers data.");
        }
        const data = await response.json();
        setFlowers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFlowers();
  }, []);

  // Handle adding to favorites
  const handleAddToFavorites = async (id) => {
    console.log("id", id);

    // Optimistically update local state
    setFlowers((prevFlowers) =>
      prevFlowers.map((flower) =>
        flower.id === id
          ? { ...flower, favorite: !flower.favorite } // Toggle favorite status
          : flower
      )
    );

    // Find the updated flower
    const updatedFlower = flowers.find((flower) => flower.id === id);
    const updatedFavorite = !updatedFlower.favorite; // New favorite value

    // Update the favorite status on the server
    try {
      const response = await fetch(`http://localhost:3000/flowers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...updatedFlower, favorite: updatedFavorite }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update favorite status for flower with id ${id}`
        );
      }

      console.log("Favorite status updated on the server.");
    } catch (error) {
      console.error("Error updating favorite status:", error);
      // Rollback the optimistic update if server update fails
      setFlowers((prevFlowers) =>
        prevFlowers.map((flower) =>
          flower.id === id
            ? { ...flower, favorite: !updatedFavorite } // Rollback favorite status
            : flower
        )
      );
    }
  };

  // todo: Handle open favorites page
  const navigate = useNavigate();
  const handleFavClick = () => {
    console.log("Favorites clicked");
    navigate("/favorite");
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-4 p-4 relative">
        {flowers.map((flower, index) => (
          <FlowerItem
            // Pass the id to FlowerItem
            id={flower.id}
            key={index}
            name={flower.name}
            description={flower.description}
            image={flower.imageUrl}
            price={flower.price}
            tags={flower.tags}
            favorite={flower.favorite}
            onAddToFavorites={handleAddToFavorites} // Pass function to add to favorites
          />
        ))}
        <div
          className="fixed bottom-30 right-10  rounded-full cursor-pointer"
          onClick={handleFavClick}
        >
          <ion-icon
            icon={heartCircle}
            className="text-xl bg-red  w-25 h-25 "
            style={{
              fontSize: "25px",
              color: "#d10f17",
            }}
          ></ion-icon>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default product;
