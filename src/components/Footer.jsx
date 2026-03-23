import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto  py-10 flex justify-between gap-4">

        <div>
          <div className="flex items-center gap-2 text-white text-2xl font-bold">
            <IoLogoIonic className="text-blue-500" />
            <span>NOA IO</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            NOA IO is a modern platform delivering high-quality apps and digital solutions.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/apps" className="hover:text-white">Apps</Link>
            </li>
            <li>
              <Link to="/installation" className="hover:text-white">Installation</Link>
            </li>
            
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} NOA IO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;