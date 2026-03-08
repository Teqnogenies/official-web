import AboutPreview from '../components/AboutPreview'
import CTAWhatsapp from '../components/CTAWhatsapp'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <CTAWhatsapp />
      <section className="section" id="home-contact">
        <div className="container">
          <div className="home-contact-shell">
            <article className="home-contact-copy">
              <span>Start a Project</span>
              <h2>Tell us what you want to build next</h2>
              <p>
                Share your goals, timeline, and challenges. We will map the right service mix and send a
                practical action plan quickly.
              </p>
              <ul>
                <li>Website and product builds</li>
                <li>Branding and creative systems</li>
                <li>SEO and performance marketing</li>
              </ul>
            </article>
            <ContactForm
              title="Contact Teqnoginies"
              subtitle="Share your digital goals and we will get back to you quickly."
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
