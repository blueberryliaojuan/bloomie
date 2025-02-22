import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import "./index.css";
const home = () => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "calc(100dvh - 200px" }}>
        <h1
          className="text-center  text-2xl  py-24"
          style={{ color: "var(--primary-color)" }}
        >
          Please visit the shop page...
        </h1>
      </div>
      {/*  */}
      <Footer></Footer>
    </div>
  );
};
export default home;
