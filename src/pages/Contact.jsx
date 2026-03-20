import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'

function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Teqnoginies</h1>
          <p>Let us discuss your next digital project.</p>
        </div>
      </section>

      <section className="section" id="contact-form">
        <div className="container contact-layout">
          <div className="contact-info">
            <SectionTitle
              eyebrow="Get In Touch"
              title="We are ready when you are"
              subtitle="Reach us directly via email, call, or WhatsApp to get started."
            />
            <ul>
              <li>
                <FiMail />
                <a href="mailto:teqnogenies.official@gmail.com">teqnogenies.official@gmail.com</a>
              </li>
              <li>
                <FiPhone />
                <span>+91 8851021358</span>
              </li>
              <li>
                <FiPhone />
                <span>+91 9818937777</span>
              </li>
              <li>
                <FaWhatsapp />
                <span>+91 8851021358</span>
              </li>
              <li>
                <FiMapPin />
                <span>Rajouri Garden, Delhi, India</span>
              </li>
            </ul>
          </div>

          <ContactForm title="Send a Message" subtitle="We usually reply within one business day." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle center eyebrow="Location" title="Find us on map" />
          <div className="map-box">
            <iframe
              title="Teqnoginies location"
              src="https://www.google.com/maps?q=Rajouri+Garden+Delhi+India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
