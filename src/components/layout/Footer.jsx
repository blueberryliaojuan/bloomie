// import { Link } from "react-router-dom"; // for internal routing with React Router
const footerHeight = {
  height: "100px",
};
const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-4 flex items-center"
      style={footerHeight}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Bloomie. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
