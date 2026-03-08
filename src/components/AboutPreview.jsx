import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'

const highlights = ['Strategy-led execution', 'Dedicated project support', 'Design + development in sync']

function AboutPreview() {
  return (
    <section className="section about-section">
      <div className="container about-preview about-preview-modern">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            eyebrow="About"
            title="Built for brands that want measurable growth"
            subtitle="Teqnoginies blends product thinking, performance marketing, and creative design to build digital experiences that drive real business outcomes."
          />
          <div className="about-checks">
            {highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="about-kpi-row">
            <article>
              <strong>5+ Years</strong>
              <span>Industry experience</span>
            </article>
            <article>
              <strong>90%</strong>
              <span>Repeat clients</span>
            </article>
          </div>
          <Link className="btn btn-primary" to="/about">
            Know Our Story
          </Link>
        </motion.div>

        <motion.div
          className="about-card-stack"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <article className="about-feature-card">
            <h3>How we work</h3>
            <p>Discover, design, build, and optimize in fast feedback loops.</p>
          </article>
          <article className="about-feature-card">
            <h3>Why clients choose us</h3>
            <p>Clear communication, outcome-focused execution, and clean delivery quality.</p>
          </article>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="Creative team collaboration"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
