import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import logoDarkTxt from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logoDarkTxt} alt="Teqnoginies" />
        </NavLink>

        <nav className="nav-links desktop-only">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-btn mobile-only"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`mobile-menu-shell mobile-only ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-navigation">
          <button
            className="mobile-menu-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
          <div className="mobile-menu-intro">
            <p>Navigate</p>
            <span>Teqnoginies digital studio</span>
          </div>
          <nav className="mobile-menu-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <FiArrowUpRight />
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu-cta">
            <p>Need a website or growth partner?</p>
            <NavLink to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Start a Project
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
