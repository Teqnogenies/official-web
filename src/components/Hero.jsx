import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const rotating = ['Websites', 'Marketing', 'Graphics Design']

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotating.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12, duration: 0.45, ease: 'easeOut' },
            },
          }}
        >
          <motion.h1 variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
            Building Powerful Digital Experiences
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
            Genies to fulfill your digital needs
          </motion.p>

          <motion.div className="hero-rotating" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            <span>We craft:</span>
            <AnimatePresence mode="wait">
              <motion.strong
                key={rotating[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {rotating[index]}
              </motion.strong>
            </AnimatePresence>
          </motion.div>

          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            <motion.a
              className="btn btn-primary"
              href="https://wa.me/918851021358"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </motion.a>
            <motion.a
              className="btn btn-outline"
              href="#home-contact"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Now
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: 'easeOut' }}
        >
          <div className="floating-chip chip-one">SaaS + Growth</div>
          <div className="floating-chip chip-two">UI that converts</div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=80"
            alt="Modern digital workspace"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
