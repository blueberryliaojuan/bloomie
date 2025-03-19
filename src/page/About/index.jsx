import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Main from "@/components/layout/Main";
import "./index.css";
import shop1 from "@/assets/img/shop.jpg";
import shop2 from "@/assets/img/shop1.jpg";

const home = () => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex flex-1 bg-gray-100">
        <div className="h-full w-1/2">
          <h1 className="text-5xl font-extrabold pt-36 px-24 w-200 align-left text-black">
            Welcome to Bloomie
          </h1>

          <h2
            className="text-2xl font-semibold text-deepRed mb-4 pt-12 px-24 w-200 align-left"
            style={{ color: "#ECBEC9" }}
          >
            Join Our Journey
          </h2>
          <p
            className="text-lg text-deepRed mt-8 px-24 w-200 align-left"
            style={{ color: "#B13A2F" }}
          >
            Reach out to us today to learn more about how we can help you
            achieve your goals.
          </p>
        </div>
        <div className="w-1/2 ">
          <img
            src={shop2}
            alt="In-Store Shopping at Bloomie"
            className="w-full h-auto "
          />
        </div>
      </div>
      <div className=" flex flex-1 bg-gray-100">
        <div className="flex ">
          <div className="w-1/2 ">
            <img
              src={shop1}
              alt="Bloomie Flower Store"
              className="w-full h-auto "
            />
          </div>
          <div className="w-1/2 pl-6">
            <p className="text-lg text-gray-600">
              Bloomie is a vibrant flower store offering both in-store and
              online shopping options. Whether you prefer to visit us in person
              or shop from the comfort of your home, Bloomie provides a wide
              selection of fresh, beautiful flowers for any occasion. We pride
              ourselves on delivering quality and creativity, helping you create
              stunning bouquets, gifts, or decor with ease. Our online platform
              makes it simple to browse, customize, and schedule deliveries,
              while our store offers a hands-on experience to find the perfect
              blooms.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default home;
