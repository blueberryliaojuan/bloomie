import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FlowerItem from "@/components/common/FlowerItem";
import "./index.css";
const product = () => {
  const flowers = [
    {
      name: "Rose",
      description: "A beautiful red rose.",
      imageUrl: "/src/assets/img/flowerBouquet01.jpeg",
    },
    {
      name: "Tulip",
      description: "A vibrant yellow tulip.",
      imageUrl: "/src/assets/img/flowerBouquet02.jpeg",
    },
    {
      name: "Sunflower",
      description: "A bright sunflower that follows the sun.",
      imageUrl: "/src/assets/img/flowerBouquet03.jpeg",
    },
    {
      name: "Daisy",
      description: "A delicate white daisy.",
      imageUrl: "/src/assets/img/flowerBouquet04.jpeg",
    },
    {
      name: "Orchid",
      description: "An exotic purple orchid.",
      imageUrl: "/src/assets/img/flowerBouquet05.jpeg",
    },
    {
      name: "Sunflower",
      description: "A bright sunflower that follows the sun.",
      imageUrl: "/src/assets/img/flowerBouquet06.jpeg",
    },
    {
      name: "Daisy",
      description: "A delicate white daisy.",
      imageUrl: "/src/assets/img/flowerBouquet07.jpeg",
    },
    {
      name: "Orchid",
      description: "An exotic purple orchid.",
      imageUrl: "/src/assets/img/flowerBouquet08.jpeg",
    },
    {
      name: "Orchid",
      description: "An exotic purple orchid.",
      imageUrl: "/src/assets/img/flowerBouquet09.jpeg",
    },
  ];
  return (
    <div>
      <Header />
      {flowers.map((flower, index) => (
        <FlowerItem
          key={index}
          name={flower.name}
          description={flower.description}
          imageUrl={flower.imageUrl}
        />
      ))}

      {/* <div>products</div> */}
      <Footer />
    </div>
  );
};
export default product;
