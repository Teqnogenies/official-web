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
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea rows="5" name="message" placeholder="Message" required />
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
      </form>
    </motion.div>
  )
}

export default ContactForm
