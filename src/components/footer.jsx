import React from 'react';
import { Link } from 'gatsby';
import links from '../constants/page-links';
import logo from '../images/mdg.png';

const Footer = () => (
  <div className="bg-gray-100 p-4 flex flex-col justify-center items-center shadow-inner mt-2">
    <div className="w-full flex flex-col sm:flex-row justify-evenly py-2">
      <div className="sm:ml-0 sm:mr-6 order-last sm:order-none flex">
        <p>Copyright @ 2022 Vishnu Sivan</p>
      </div>
    </div>
  </div>
);
export default Footer;