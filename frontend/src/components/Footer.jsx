import React from 'react'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'My Bookings', path: '/my-bookings' }
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook' },
    { icon: <Twitter size={20} />, name: 'Twitter' },
    { icon: <Instagram size={20} />, name: 'Instagram' },
    { icon: <Mail size={20} />, name: 'Email' }
  ]

  return (
    <footer className='bg-theme text-nav-text'>
      <div className='container mx-auto p-8'>
        <div className='grid md:grid-cols-3 gap-8'>
          
          {/* Brand Info */}
          <div>
            <h2 className='text-2xl font-bold mb-4'>Wheels Rental Hub</h2>
            <p className='text-nav-text/80'>
              Your trusted partner for vehicle rentals. Quality service, affordable prices, 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => navigate(link.path)}
                    className='text-nav-text/80 hover:text-nav-text transition-colors'
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4 mb-4'>
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  className='p-2 bg-theme/20 rounded-full hover:bg-theme/40 transition-colors'
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className='text-nav-text/80'>
              support@wheelsrentalhub.com
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className='border-t border-nav-text/20 mt-8 pt-6 text-center text-nav-text/60'>
          <p>&copy; {new Date().getFullYear()} Wheels Rental Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer