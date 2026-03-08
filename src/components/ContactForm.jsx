import { motion } from 'framer-motion'

const CONTACT_EMAIL = 'teqnogenies.official@gmail.com'

function ContactForm({ title = 'Let\'s Talk', subtitle = 'Tell us about your goals and project timeline.' }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const senderEmail = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''
    const subject = encodeURIComponent(`New inquiry from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <motion.div
      className="contact-form-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="contact-badge">Quick Response</span>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <label className="field">
            <span>Your Name</span>
            <input type="text" name="name" placeholder="John Doe" required />
          </label>
          <label className="field">
            <span>Email Address</span>
            <input type="email" name="email" placeholder="john@company.com" required />
          </label>
        </div>
        <label className="field">
          <span>Project Details</span>
          <textarea rows="5" name="message" placeholder="Tell us what you want to build..." required />
        </label>
        <div className="contact-form-footer">
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          <small>We usually reply within 24 hours.</small>
        </div>
      </form>
    </motion.div>
  )
}

export default ContactForm
