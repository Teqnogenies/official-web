import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logoDarkTxt from '../assets/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top-card">
            <div className="footer-brand-block">
              <Link className="footer-brand" to="/">
                <img className="footer-brand-logo" src={logoDarkTxt} alt="Teqnoginies" />
              </Link>
              <p>
                Teqnoginies builds high-impact digital products for brands that want stronger digital presence,
                better lead flow, and measurable growth.
              </p>
              <a className="btn btn-primary" href="https://wa.me/918851021358" target="_blank" rel="noreferrer">
                Start on WhatsApp
              </a>
            </div>

            <div className="footer-columns">
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><Link to="/services">Web Development</Link></li>
                  <li><Link to="/services">Digital Marketing</Link></li>
                  <li><Link to="/services">Branding & Design</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:teqnogenies.official@gmail.com">teqnogenies.official@gmail.com</a></li>
                  <li><a href="tel:+918851021358">+91 8851021358</a></li>
                  <li><a href="tel:+919818937777">+91 9818937777</a></li>
                  <li><a href="https://wa.me/918851021358" target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Teqnoginies. All rights reserved.</p>
            <div className="footer-socials">
              {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a> */}
              <a href="https://www.instagram.com/teqnogenies.official/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaXTwitter />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
