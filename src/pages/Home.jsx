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
        <div className="container narrow">
          <ContactForm
            title="Contact Teqnoginies"
            subtitle="Share your digital goals and we will get back to you quickly."
          />
        </div>
      </section>
    </>
  )
}

export default Home
