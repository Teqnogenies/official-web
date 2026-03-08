import { motion } from 'framer-motion'
import { FiCode, FiFeather, FiSearch, FiTrendingUp } from 'react-icons/fi'
import { FaPaintBrush, FaLayerGroup } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const services = [
  {
    title: 'Web Development',
    icon: <FiCode />,
    description: 'Fast, scalable, conversion-driven websites and web apps.',
  },
  {
    title: 'UI/UX Design',
    icon: <FiFeather />,
    description: 'User-first interfaces with clear hierarchy and clean flows.',
  },
  {
    title: 'Digital Marketing',
    icon: <FiTrendingUp />,
    description: 'Growth campaigns that improve reach, trust, and leads.',
  },
  {
    title: 'SEO Optimization',
    icon: <FiSearch />,
    description: 'Search-focused strategies to improve rankings and traffic.',
  },
  {
    title: 'Branding & Graphics',
    icon: <FaPaintBrush />,
    description: 'Cohesive brand visuals that communicate authority.',
  },
  {
    title: 'SaaS Development',
    icon: <FaLayerGroup />,
    description: 'Product-focused SaaS development from concept to launch.',
  },
]

function ServicesPreview() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionTitle
          center
          eyebrow="Services"
          title="Our Services"
          subtitle="End-to-end digital services for businesses that want a premium online presence and real growth."
        />

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="glass-card"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
              whileHover={{ y: -7 }}
            >
              <div className="icon-wrap">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
