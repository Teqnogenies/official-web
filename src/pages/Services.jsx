import { motion } from 'framer-motion'
import { FiCode, FiFeather, FiSearch, FiTrendingUp } from 'react-icons/fi'
import { FaPaintBrush, FaLayerGroup } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'

const serviceData = [
  {
    icon: <FiCode />,
    title: 'Web Development',
    description:
      'Custom websites and web applications with modern stacks, clean architecture, and optimized performance.',
  },
  {
    icon: <FiFeather />,
    title: 'UI/UX Design',
    description:
      'Research-driven interfaces, design systems, and flows that improve user experience and conversion quality.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Digital Marketing',
    description:
      'Integrated campaigns for paid media, social growth, and funnel optimization focused on business outcomes.',
  },
  {
    icon: <FiSearch />,
    title: 'SEO Optimization',
    description:
      'Technical and content SEO to help your product rank higher and attract consistent qualified traffic.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Branding & Graphics',
    description:
      'Identity design, social creatives, and visual assets to establish a distinctive and memorable brand.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'SaaS Development',
    description:
      'From MVP to scale, we build robust SaaS platforms with secure architecture and seamless UX.',
  },
]

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Digital Services</h1>
          <p>Premium capabilities for teams building with ambition.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            center
            eyebrow="What We Offer"
            title="A full-stack digital service partner"
            subtitle="Choose focused support or end-to-end execution based on your growth stage."
          />

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {serviceData.map((item) => (
              <motion.article
                className="glass-card"
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -7 }}
              >
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
