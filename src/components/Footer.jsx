import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Teqnoginies</h3>
          <p>
            Teqnoginies builds high-impact digital products that help startups and businesses grow with speed.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Branding</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: <a href="mailto:teqnogenies.official@gmail.com">teqnogenies.official@gmail.com</a></li>
            <li>Phone: +91 8851021358</li>
            <li>Alternate Phone: +91 9818937777</li>
            <li>WhatsApp: +91 8851021358</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaXTwitter />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Teqnoginies. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
