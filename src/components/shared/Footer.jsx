import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200 py-12">
      <footer className="footer text-base-content container mx-auto">
      <aside>
        <Link href={"/"}>
          <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
        </Link>
      </aside>
      <nav>
        <h6 className="footer-title">Useful Links</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
