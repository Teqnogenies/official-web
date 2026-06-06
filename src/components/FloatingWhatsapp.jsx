import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/918851021358'

function FloatingWhatsapp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

export default FloatingWhatsapp
