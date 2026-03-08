import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

function CTAWhatsapp() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Ready to build something amazing?</h2>
          <motion.a
            className="btn btn-primary"
            href="https://wa.me/918851021358"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp />
            Start Your Project on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTAWhatsapp
