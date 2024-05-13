import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex justify-between h-[120px] py-6 bg-gray-800 text-gray-400">
      <div>
        <h4>About Brands</h4>
        <ul>
          <li>About us</li>
          <li>Whats new</li>
          <li>Blogs</li>
        </ul>
      </div>

      <div>
        <h4>Products</h4>
        <ul>
          <li>Phone</li>
          <li>Loptop</li>
          <li>Notebook</li>
        </ul>
      </div>

      <div>
        <h4>Support</h4>
        <ul>
          <li>FAQ</li>
          <li>Call-center</li>
          <li>Community</li>
        </ul>
      </div>

      <div>
        <h4>Socials</h4>
        <div className="flex items-center gap-2 mt-2">
          <FaInstagram size={20}/>
          <BsFacebook size={20}/>
          <FaTelegram size={20}/>
          <IoLogoWhatsapp size={20}/>
          <FaLinkedinIn size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
