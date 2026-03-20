import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import harshImage from '../assets/harsh.jpeg'
import lalitaImage from '../assets/lalita.jpg'
import priyanshuImage from '../assets/priyanshu.jpeg'

const team = [
  {
    name: 'Harsh Kahanagwal',
    role: 'Founder & Lead Full Stack Developer',
    image: harshImage,
  },
  {
    name: 'Lalita',
    role:  'Co-Founder & Lead UI/UX Designer',
    image: lalitaImage,
  },
  {
    name: 'Priyanshu Kashyap',
    role: 'Founder & Backend / Full Stack Engineer',
    image: priyanshuImage,
  },
]

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Teqnoginies</h1>
          <p>Genies to fulfill your digital needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container stack-gap">
          <SectionTitle eyebrow="Our Story" title="Built for modern digital growth" />
          <div className="about-panels">
            <motion.article
              className="panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Company Story</h3>
              <p>
                Teqnoginies started with a simple goal: help businesses launch premium digital experiences without agency complexity.
              </p>
            </motion.article>
            <motion.article
              className="panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Mission</h3>
              <p>
                Deliver design-first digital products, growth-driven marketing, and reliable execution that drives measurable outcomes.
              </p>
            </motion.article>
            <motion.article
              className="panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Vision</h3>
              <p>
                Become the trusted digital partner for startups and brands that want a premium online presence globally.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            center
            eyebrow="Team"
            title="People behind the product"
            subtitle="A multidisciplinary team combining product strategy, UI, and growth expertise."
          />
          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.article
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
              >
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
