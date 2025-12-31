import React from 'react'
import { Car, Shield, Clock, Award, Users, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Car size={32} />,
      title: "Wide Vehicle Selection",
      description: "Choose from cars, bikes, and three-wheelers to suit every need and occasion."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Insured",
      description: "All rentals come with comprehensive insurance for complete peace of mind."
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you."
    },
    {
      icon: <Award size={32} />,
      title: "Best Prices",
      description: "Competitive pricing with no hidden charges. Price match guarantee."
    },
    {
      icon: <Users size={32} />,
      title: "Easy Booking",
      description: "Simple 3-step booking process with instant confirmation."
    },
    {
      icon: <MapPin size={32} />,
      title: "Multiple Locations",
      description: "Pick up and drop off at convenient locations across the city."
    }
  ]

  const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder", bio: "10+ years in automotive industry" },
    { name: "Sarah Chen", role: "Head of Operations", bio: "Ex-rental industry executive" },
    { name: "Mike Rodriguez", role: "CTO", bio: "Former tech lead at major travel platform" },
    { name: "Priya Sharma", role: "Customer Experience", bio: "8+ years in hospitality" }
  ]

  const stats = [
    { value: "5000+", label: "Happy Customers" },
    { value: "200+", label: "Vehicles" },
    { value: "50+", label: "Locations" },
    { value: "24/7", label: "Support" }
  ]

  return (
    <div className='bg-background min-h-screen pt-16 pb-10'>
      {/* Hero Section */}
      <div className='bg-theme text-nav-text py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-center mb-6'>About Wheels Rental Hub</h1>
          <p className='text-xl text-center max-w-3xl mx-auto'>
            Your trusted partner for convenient and affordable vehicle rentals. 
            We're revolutionizing the way people rent vehicles with technology and customer-centric approach.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='bg-card p-8 rounded-lg shadow-xl/20'>
            <h2 className='text-2xl font-bold text-theme mb-4'>Our Mission</h2>
            <p className='text-text'>
              To make vehicle rental accessible, affordable, and convenient for everyone by leveraging technology 
              and providing exceptional customer service. We aim to simplify transportation solutions for daily commuters, 
              travelers, and businesses alike.
            </p>
          </div>
          <div className='bg-card p-8 rounded-lg shadow-xl/20'>
            <h2 className='text-2xl font-bold text-theme mb-4'>Our Vision</h2>
            <p className='text-text'>
              To become the leading vehicle rental platform in the region by 2025, known for reliability, 
              innovation, and customer satisfaction. We envision a future where renting a vehicle is as 
              easy as ordering food online.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-4 py-12'>
        <h2 className='text-3xl font-bold text-center text-theme mb-12'>Why Choose Us</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='bg-card p-6 rounded-lg shadow-xl/20 hover:shadow-xl/40 transition-shadow'>
              <div className='text-theme mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold text-theme mb-2'>{feature.title}</h3>
              <p className='text-text'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-theme text-nav-text py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Our Impact</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl font-bold mb-2'>{stat.value}</div>
                <div className='text-lg'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='container mx-auto px-4 py-12'>
        <h2 className='text-3xl font-bold text-center text-theme mb-12'>Meet Our Team</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <div key={index} className='bg-card p-6 rounded-lg shadow-xl/20 text-center'>
              <div className='w-20 h-20 bg-theme rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-nav-text text-xl font-bold'>{member.name.charAt(0)}</span>
              </div>
              <h3 className='text-xl font-semibold text-theme'>{member.name}</h3>
              <p className='text-text font-medium mb-2'>{member.role}</p>
              <p className='text-text text-sm'>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto px-4 py-12'>
        <div className='bg-theme text-nav-text rounded-lg p-8 text-center max-w-4xl mx-auto shadow-xl/20'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Ride With Us?</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied customers who trust Wheels Rental Hub for their transportation needs.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button 
              onClick={() => navigate('/')}
              className='px-8 py-3 bg-nav-text text-theme font-semibold rounded-lg hover:opacity-90 transition-opacity'
            >
              Browse Vehicles
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className='px-8 py-3 border-2 border-nav-text text-nav-text font-semibold rounded-lg hover:bg-nav-text hover:text-theme transition-colors'
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className='container mx-auto px-4 py-8 text-center text-text'>
        <p className='text-lg'>
          <span className='font-bold text-theme'>Wheels Rental Hub</span> - Driving Your Journey, Powering Your Adventures
        </p>
        <p className='mt-2'>Established in 2023 • Serving with Pride</p>
      </div>
    </div>
  )
}

export default About