import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'

function AboutPreview() {
  return (
    <section className="section">
      <div className="container about-preview">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="Creative team collaboration"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            eyebrow="About"
            title="Who We Are"
            subtitle="Teqnoginies helps brands grow through websites, marketing systems, and bold design that stands out in competitive markets."
          />
          <p className="muted">
            We combine strategy, creative execution, and technology to deliver measurable growth. From startup MVPs to complete brand revamps, our team builds digital products that perform.
          </p>
          <Link className="btn btn-outline" to="/about">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
