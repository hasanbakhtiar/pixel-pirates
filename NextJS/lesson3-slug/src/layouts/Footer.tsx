import Link from "@/components/Link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 my-4">

      <ul className="nav justify-content-center border-bottom pb-3 mb-3">

        <li className="nav-item">
          <Link href="/" className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link px-2 text-body-secondary">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/product" className="nav-link px-2 text-body-secondary">
            Product
          </Link>
        </li>

      </ul>
      <p className="text-center text-body-secondary">
        © {new Date().getFullYear()} Company, Inc
      </p>
    </footer>
  );
};

export default Footer;
