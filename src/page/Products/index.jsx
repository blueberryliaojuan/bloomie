import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FlowerItem from "@/components/common/FlowerItem";
import "./index.css";

const product = () => {
  const initialFlowers = [
    {
      name: "Whispers of the Rose",
      description:
        "A beautiful red rose, whispering love and passion in every petal.",
      imageUrl: "/src/assets/img/flowerBouquet01.jpeg",
      price: 25.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Golden Glow of the Tulip",
      description:
        "A vibrant yellow tulip, radiating warmth and sunshine in a single bloom.",
      imageUrl: "/src/assets/img/flowerBouquet02.jpeg",
      price: 35.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Sun’s Embrace",
      description:
        "A bright sunflower that follows the sun, basking in its golden embrace.",
      imageUrl: "/src/assets/img/flowerBouquet03.jpeg",
      price: 25.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Pure Grace of the Daisy",
      description:
        "A delicate white daisy, symbolizing purity and simplicity in every petal.",
      imageUrl: "/src/assets/img/flowerBouquet04.jpeg",
      price: 20.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Orchid’s Elegance",
      description:
        "An exotic purple orchid, a symbol of beauty and grace that never fades.",
      imageUrl: "/src/assets/img/flowerBouquet05.jpeg",
      price: 30.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Sun’s Radiance",
      description:
        "A bright sunflower, basking in the sunlight, always reaching for the sky.",
      imageUrl: "/src/assets/img/flowerBouquet06.jpeg",
      price: 40.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Daisy’s Dream",
      description:
        "A delicate white daisy, gentle and serene, perfect for moments of quiet reflection.",
      imageUrl: "/src/assets/img/flowerBouquet07.jpeg",
      price: 25.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Orchid’s Secret",
      description:
        "An exotic purple orchid, unfolding its beauty like a hidden secret waiting to be discovered.",
      imageUrl: "/src/assets/img/flowerBouquet08.jpeg",
      price: 35.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Majestic Orchid",
      description:
        "An exotic purple orchid, a royal bloom that stands out in elegance and charm.",
      imageUrl: "/src/assets/img/flowerBouquet09.jpeg",
      price: 45.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
  ];

  const [flowers, setFlowers] = useState(initialFlowers); // Flowers state with favorite status // Manage favorites
  //todo...
  const [cart, setCart] = useState([]); // Manage cart

  // Handle adding to favorites
  const handleAddToFavorites = (name) => {
    console.log("name", name);
    setFlowers((prevFlowers) =>
      prevFlowers.map((flower) =>
        flower.name === name
          ? { ...flower, favorite: !flower.favorite } // Toggle favorite status
          : flower
      )
    );
  };

  // todo: Handle adding to cart

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {flowers.map((flower, index) => (
          <FlowerItem
            key={index}
            name={flower.name}
            description={flower.description}
            imageUrl={flower.imageUrl}
            price={flower.price}
            tags={flower.tags}
            favorite={flower.favorite}
            onAddToFavorites={handleAddToFavorites} // Pass function to add to favorites
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};
export default product;
