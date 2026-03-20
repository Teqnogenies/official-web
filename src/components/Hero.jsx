import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const rotating = ['Web Platforms', 'Performance Marketing', 'Brand Systems']

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
          <motion.span
            className="hero-eyebrow"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          >
            Growth-ready digital partner
          </motion.span>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
            Genies to fulfill your digital needs
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
            We build, launch, and scale high-performing digital products that help brands stand out and convert.
          </motion.p>

          <motion.div className="hero-rotating" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            <span>We deliver:</span>
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

          <motion.div className="hero-stats" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            {/* <div>
              <strong>120+</strong>
              <span>Projects shipped</span>
            </div> */}
            <div>
              <strong>35%</strong>
              <span>Avg. lead growth</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Client rating</span>
            </div>
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
          <div className="hero-panel">
            <h3>What you get with Teqnoginies</h3>
            <ul>
              <li>Conversion-first website systems</li>
              <li>Creative assets for every campaign</li>
              <li>SEO and paid growth execution</li>
              <li>Weekly performance tracking</li>
            </ul>
          </div>
          <div className="floating-chip chip-one">Launch in weeks</div>
          <div className="floating-chip chip-two">Strategy + Execution</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
