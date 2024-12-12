import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.css";
import { CiTwitter } from "react-icons/ci";
import { footerLinks } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import payment from "../../assets/payment.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Shop&Drop.</h1>
        <p className="footer-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          perspiciatis quaerat officia vel explicabo quibusdam ab consectetur
          maiores, nihil a ad accusamus harum veniam temporibus repellendus
          velit doloribus eius eum?
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FaFacebook className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e44059" }}>
            <FaInstagram className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <CiTwitter className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e60023" }}>
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaLocationDot style={{ marginRight: "10px" }} /> 123 Street, City
        </div>
        <div className="contact-item">
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +123456099
        </div>
        <div className="contact-item">
          <IoMdMail style={{ marginRight: "10px" }} /> mail@gmail.com
        </div>
        <img src={payment} alt="" className="payment" />
      </div>
    </div>
  );
}

export default Footer;
