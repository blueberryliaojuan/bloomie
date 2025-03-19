import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import "./index.css";
import shop1 from "@/assets/img/shop.jpg";
import shop2 from "@/assets/img/shop1.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-[#F6E9E7]">
      <Header />

      {/* Section 1 */}
      <div className="w-full flex flex-col md:flex-row bg-[#F6E9E7]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6">
            Welcome to Bloomie
          </h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#B13A2F] text-[#ECBEC9] rounded-lg transition hover:opacity-90"
          >
            Join Our Journey
          </button>
          <p className="text-lg md:text-xl text-gray-500 mt-6">
            Reach out to us today to learn more about how we can help you
            achieve your goals.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={shop2}
            alt="In-Store Shopping at Bloomie"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={shop1}
            alt="Bloomie Flower Store"
            className="w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex items-center bg-[#F6E9E7] p-8 md:p-16">
          <p className="text-lg md:text-xl text-gray-500">
            Bloomie is a vibrant flower store offering both in-store and online
            shopping options. Whether you prefer to visit us in person or shop
            from the comfort of your home, Bloomie provides a wide selection of
            fresh, beautiful flowers for any occasion. We pride ourselves on
            delivering quality and creativity, helping you create stunning
            bouquets, gifts, or decor with ease. Our online platform makes it
            simple to browse, customize, and schedule deliveries, while our
            store offers a hands-on experience to find the perfect blooms.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
