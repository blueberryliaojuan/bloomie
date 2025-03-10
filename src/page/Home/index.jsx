import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Main from "@/components/layout/Main";
import "./index.css";
import "@google/model-viewer";
const home = () => {
  return (
    <div className="h-full">
      <Header />
      <div
        style={{
          height: "calc(100dvh - 200px",
          position: "relative",
          backgroundColor: "#F6E9E7",
        }}
        className="flex
        "
      >
        <div className="h-full w-3/4">
          <h1 className="text-5xl font-extrabold py-36 px-24  w-200 align-left text-black">
            Bloomie Anytime, Anywhere.
          </h1>
          <h3 className="text-2xl   px-24 w-200 align-left text-gray-500">
            Delivering fresh, customized bouquets to your door. Whenever and
            wherever you need a touch of floral magic.
          </h3>
          <div className="flex justify-start px-24 py-12">
            <div className="flex justify-start bg-black text-white py-2 px-4 rounded-lg">
              <img src="/assets/images/appleIcon.svg" alt="" />
              <div className="ml-4">
                <div className="text-sm">Download on the</div>
                <div className="text-xl">App Store</div>
              </div>
            </div>
            <div className="flex justify-start bg-black text-white py-2 px-4 rounded-lg ml-4">
              <img src="/assets/images/googleIcon.svg" alt="" />
              <div className="ml-4">
                <div className="text-sm">Get it on </div>
                <div className="text-xl">Google Play</div>
              </div>
            </div>
          </div>
        </div>
        <model-viewer
          src="/3D/flower.glb"
          alt="3D Model"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          className="w-300 h-full"
          disable-zoom
          auto-rotate
          auto-rotate-speed="0.5"
          aut-rotate-delay="0"
          camera-orbit="0deg 0deg"
          min-camera-orbit="-10deg 75deg "
          max-camera-orbit="10deg 75deg "
        />
      </div>

      <Footer></Footer>
    </div>
  );
};
export default home;
