import React from "react";
import "./FooterStyle.css";

import { SiAbletonlive } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-top">
            <SiAbletonlive className="icon" />
            <h1>Champ-Untie</h1>
          </div>
          <Link className="top">
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>

        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <h2>Home</h2>
            <h2>Data Recovery</h2>
            <h2>Cloud Security</h2>
            <h2>Contact</h2>
          </div>

          <div className="col">
            <h3>Legal</h3>
            <h2>Policies</h2>
            <h2>Terms & Conditions</h2>
            <h2>Securities</h2>
          </div>

          <div className="col">
            <h3>My Accounts</h3>
            <h2>Login</h2>
            <h2>My Data</h2>
            <h2>Cloud Security</h2>
            <h2>Important</h2>
            <h2>Specialist</h2>
          </div>

          <div className="col">
            <h3>Informations</h3>
            <h2>Membership</h2>
            <h2>Data Protocols</h2>
            <h2>Cloud Protocols</h2>
            <h2>Security Roles</h2>
          </div>

          <form>
            <h3>Join our Team</h3>
            <input type="text" placeholder="Your Email" />

            <div className="social-group">
              <AiOutlineMail className="social-icon" />
              <FiInstagram className="social-icon" />
              <FiTwitter className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
