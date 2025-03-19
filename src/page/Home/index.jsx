import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./index.css";
import "@google/model-viewer";

const home = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div
        className="flex flex-col lg:flex-row bg-[#F6E9E7]"
        style={{
          height: "calc(100dvh - 200px)",
        }}
      >
        {/* left part */}
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 p-6 md:p-12 lg:px-24 lg:py-36">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-black mb-6 md:mb-24  xl:mb-36">
            Bloomie Anytime, Anywhere.
          </h1>
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-12 lg:mb-12 xl:mb-24">
            Delivering fresh, customized bouquets to your door. Whenever and
            wherever you need a touch of floral magic.
          </h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* App Store */}
            <div className="flex items-center bg-black text-white py-3 px-4 rounded-lg">
              <img
                src="/assets/images/appleIcon.svg"
                alt="App Store logo"
                className="w-6 h-6"
              />
              <div className="ml-4">
                <div className="text-sm">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
            {/* Google Play  */}
            <div className="flex items-center bg-black text-white py-3 px-4 rounded-lg">
              <img
                src="/assets/images/googleIcon.svg"
                alt="Google Play Store logo"
                className="w-6 h-6"
              />
              <div className="ml-4">
                <div className="text-sm">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* rigt 3D  */}
        <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center">
          <model-viewer
            src="/3D/flower.glb"
            alt="3D Model"
            camera-controls
            tone-mapping="neutral"
            poster="poster.webp"
            className="w-full h-full max-h-[500px] lg:max-h-full lg:max-w-full"
            disable-zoom
            auto-rotate
            auto-rotate-speed="0.5"
            auto-rotate-delay="0"
            camera-orbit="0deg 0deg"
            min-camera-orbit="-10deg 75deg"
            max-camera-orbit="10deg 75deg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
