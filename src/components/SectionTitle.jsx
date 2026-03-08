import { motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <motion.div
      className={`section-title ${center ? 'center' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </motion.div>
  )
}

export default SectionTitle
