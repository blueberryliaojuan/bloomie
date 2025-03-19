import React, { useState } from "react";
import Header from "@/components/layout/Header"; // Header component for the page
import Footer from "@/components/layout/Footer";
import FlowerItem from "@/components/common/FlowerItem";
import "./index.css";
import img1 from "@/assets/img/flowerBouquet01.jpeg"; //image items for the product
import img2 from "@/assets/img/flowerBouquet02.jpeg";
import img3 from "@/assets/img/flowerBouquet03.jpeg";
import img4 from "@/assets/img/flowerBouquet04.jpeg";
import img5 from "@/assets/img/flowerBouquet05.jpeg";
import img6 from "@/assets/img/flowerBouquet06.jpeg";
import img7 from "@/assets/img/flowerBouquet07.jpeg";
import img8 from "@/assets/img/flowerBouquet08.jpeg";
import img9 from "@/assets/img/flowerBouquet09.jpeg";

const product = () => {
  const initialFlowers = [
    {
      name: "Whispers of the Rose",
      description:
        "Beautiful roses, whispering love and passion in every petal.",
      imageUrl: "/src/assets/img/flowerBouquet01.jpeg",
      img: img1,
      price: 25.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Golden Glow of the Tulip",
      description:
        "A vibrant yellow tulip, radiating warmth and sunshine in a single bloom.",
      imageUrl: "/src/assets/img/flowerBouquet02.jpeg",
      img: img2,
      price: 35.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Sun’s Embrace",
      description:
        "A bright sunflower that follows the sun, basking in its golden embrace.",
      imageUrl: "/src/assets/img/flowerBouquet03.jpeg",
      img: img3,
      price: 25.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Pure Grace of the Daisy",
      description:
        "A delicate white daisy, symbolizing purity and simplicity in every petal.",
      imageUrl: "/src/assets/img/flowerBouquet04.jpeg",
      img: img4,
      price: 20.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Orchid’s Elegance",
      description:
        "An exotic purple orchid, a symbol of beauty and grace that never fades.",
      imageUrl: "/src/assets/img/flowerBouquet05.jpeg",
      img: img5,
      price: 30.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Sun’s Radiance",
      description:
        "A bright sunflower, basking in the sunlight, always reaching for the sky.",
      imageUrl: "/src/assets/img/flowerBouquet06.jpeg",
      img: img6,
      price: 40.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: true,
    },
    {
      name: "Daisy’s Dream",
      description:
        "A delicate white daisy, gentle and serene, perfect for moments of quiet reflection.",
      imageUrl: "/src/assets/img/flowerBouquet07.jpeg",
      img: img7,
      price: 25.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Orchid’s Secret",
      description:
        "An exotic purple orchid, unfolding its beauty like a hidden secret waiting to be discovered.",
      imageUrl: "/src/assets/img/flowerBouquet08.jpeg",
      img: img8,
      price: 35.0,
      tags: ["flowerBouquet", "nature", "rose", "spring"],
      favorite: false,
    },
    {
      name: "Majestic Orchid",
      description:
        "An exotic purple orchid, a royal bloom that stands out in elegance and charm.",
      imageUrl: "/src/assets/img/flowerBouquet09.jpeg",
      img: img9,
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
            image={flower.img}
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
