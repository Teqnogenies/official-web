import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Forminit } from 'forminit'

const forminit = new Forminit()
const FORM_ID = '01s26z3l982'
const COUNTRY_CODES = [
  { value: '+91', label: 'IN +91' },
  { value: '+1', label: 'US +1' },
  { value: '+1', label: 'CA +1' },
  { value: '+7', label: 'RU +7' },
  { value: '+20', label: 'EG +20' },
  { value: '+27', label: 'ZA +27' },
  { value: '+33', label: 'FR +33' },
  { value: '+34', label: 'ES +34' },
  { value: '+39', label: 'IT +39' },
  { value: '+49', label: 'DE +49' },
  { value: '+52', label: 'MX +52' },
  { value: '+55', label: 'BR +55' },
  { value: '+44', label: 'UK +44' },
  { value: '+47', label: 'NO +47' },
  { value: '+60', label: 'MY +60' },
  { value: '+61', label: 'AU +61' },
  { value: '+62', label: 'ID +62' },
  { value: '+63', label: 'PH +63' },
  { value: '+65', label: 'SG +65' },
  { value: '+66', label: 'TH +66' },
  { value: '+81', label: 'JP +81' },
  { value: '+82', label: 'KR +82' },
  { value: '+86', label: 'CN +86' },
  { value: '+92', label: 'PK +92' },
  { value: '+93', label: 'AF +93' },
  { value: '+94', label: 'LK +94' },
  { value: '+95', label: 'MM +95' },
  { value: '+98', label: 'IR +98' },
  { value: '+212', label: 'MA +212' },
  { value: '+234', label: 'NG +234' },
  { value: '+254', label: 'KE +254' },
  { value: '+351', label: 'PT +351' },
  { value: '+353', label: 'IE +353' },
  { value: '+358', label: 'FI +358' },
  { value: '+880', label: 'BD +880' },
  { value: '+971', label: 'AE +971' },
  { value: '+972', label: 'IL +972' },
  { value: '+974', label: 'QA +974' },
  { value: '+976', label: 'MN +976' },
  { value: '+977', label: 'NP +977' },
  { value: '+966', label: 'SA +966' },
]

function normalizePhoneNumber(countryCode, value) {
  const trimmedCode = countryCode.trim()
  const trimmedValue = value.trim()

  if (!trimmedCode || !trimmedValue) return ''

  const normalizedCode = trimmedCode.startsWith('+')
    ? `+${trimmedCode.slice(1).replace(/\D/g, '')}`
    : `+${trimmedCode.replace(/\D/g, '')}`
  const digitsOnly = trimmedValue.replace(/\D/g, '')
  return `${normalizedCode}${digitsOnly}`
}

function ContactForm({ title = 'Let\'s Talk', subtitle = 'Tell us about your goals and project timeline.' }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [selectedCountryCode, setSelectedCountryCode] = useState(COUNTRY_CODES[0])
  const [countryMenuOpen, setCountryMenuOpen] = useState(false)
  const countryMenuRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!countryMenuRef.current?.contains(event.target)) {
        setCountryMenuOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setCountryMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const normalizedPhone = normalizePhoneNumber(
      selectedCountryCode.value,
      formData.get('fi-sender-phone')?.toString() ?? '',
    )

    if (!normalizedPhone.startsWith('+') || normalizedPhone.length < 11) {
      setStatus('error')
      setError('Please enter a valid phone number with country code, like +91 88510 21358.')
      return
    }

    formData.set('fi-sender-phone', normalizedPhone)
    const { error: submitError } = await forminit.submit(FORM_ID, formData)

    if (submitError) {
      setStatus('error')
      setError(submitError.message)
      return
    }

    setStatus('success')
    form.reset()
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
            <span>First Name</span>
            <input type="text" name="fi-sender-firstName" placeholder="John" required />
          </label>
          <label className="field">
            <span>Last Name</span>
            <input type="text" name="fi-sender-lastName" placeholder="Doe" required />
          </label>
        </div>
        <label className="field field-full">
          <span>Email Address</span>
          <input type="email" name="fi-sender-email" placeholder="john@company.com" required />
        </label>
        <label className="field field-full">
          <span>Phone Number</span>
          <div className="phone-field">
            <div className="phone-select-wrap" ref={countryMenuRef}>
              <button
                type="button"
                className={`phone-select-button ${countryMenuOpen ? 'open' : ''}`}
                aria-haspopup="listbox"
                aria-expanded={countryMenuOpen}
                aria-label="Select country code"
                onClick={() => setCountryMenuOpen((prev) => !prev)}
              >
                <span>{selectedCountryCode.label}</span>
              </button>
              <div className={`phone-select-menu ${countryMenuOpen ? 'open' : ''}`} role="listbox">
                {COUNTRY_CODES.map((code) => (
                  <button
                    key={`${code.label}-${code.value}`}
                    type="button"
                    className={`phone-select-option ${
                      selectedCountryCode.label === code.label ? 'active' : ''
                    }`}
                    onClick={() => {
                      setSelectedCountryCode(code)
                      setCountryMenuOpen(false)
                    }}
                  >
                    {code.label}
                  </button>
                ))}
              </div>
            </div>
            <input type="tel" name="fi-sender-phone" placeholder="98765 43210" required />
          </div>
        </label>
        <label className="field">
          <span>Project Details</span>
          <textarea
            rows="5"
            name="fi-text-message"
            placeholder="Tell us what you want to build..."
            required
          />
        </label>
        {status === 'error' && <p className="form-status form-status-error">{error}</p>}
        {status === 'success' && (
          <p className="form-status form-status-success">Message sent successfully!</p>
        )}
        <div className="contact-form-footer">
          <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          <small>We usually reply within 24 hours.</small>
        </div>
      </form>
    </motion.div>
  )
}

export default ContactForm
