import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import default_profile from '../assets/default_profile.jpg'
import { Menu, X, Bell, LogOut, Settings, LayoutDashboard, Calendar } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigation = useNavigate()
    const location = useLocation();
    const [nav, setNav] = useState('/')
    const [token, setToken] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);

    //dummy notification data
    const notification = [
        {
            title: "New Booking Confirmed",
            message: "Your booking for the Tesla Model 3 has been confirmed.",
            time: "2 hours ago"
        },
        {
            title: "Payment Received",
            message: "We have received your payment for the BMW X5 rental.",
            time: "1 day ago"
        },
        {
            title: "Booking Reminder",
            message: "Your rental for the Audi A4 starts tomorrow.",
            time: "3 days ago"
        },
        {
            title: "New Message from Support",
            message: "Your inquiry about the Mercedes C-Class has been answered.",
            time: "5 days ago"
        }
    ];

    //set active nav link
    useEffect(()=> {
        setNav(location.pathname);
    }, [location.pathname])
    
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-theme text-nav-text shadow-lg">

        {/* navbar */}
        <div className="container flex items-center h-16 justify-between mx-auto px-4">
            {/* left */}
            <div className="flex items-center space-x-4">
                {/* mobile menu */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
                    aria-label="Toggle menu"
                    >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                {/* logo */}
                <div className="flex items-center space-x-2" onClick={()=> {navigation('/')}}>
                    <img src={logo} className='w-8 h-8' alt="Wheels Rental Hub Logo" />
                    <span className="font-bold text-xl">Wheels Rental Hub</span>
                </div>
            </div>

            {/* middle */}
            <div className="hidden lg:flex items-center space-x-8">
                <p onClick={()=> {navigation('/')}} className={`hover:text-white transition-colors font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-nav-text after:transition-all after:duration-300 hover:after:w-full ${nav === '/' ? 'after:w-full' : 'after:w-0'}`}>Home</p>
                <p onClick={()=> {navigation('/about')}} className={`hover:text-white transition-colors font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-nav-text after:transition-all after:duration-300 hover:after:w-full ${nav === '/about' ? 'after:w-full' : 'after:w-0'}`}>About</p>
                <p onClick={()=> {navigation('/vehicles')}} className={`hover:text-white transition-colors font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-nav-text after:transition-all after:duration-300 hover:after:w-full ${nav === '/vehicles' ? 'after:w-full' : 'after:w-0'}`}>Vehicles</p>
                <p onClick={()=> {navigation('/my-bookings')}} className={`hover:text-white transition-colors font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-nav-text after:transition-all after:duration-300 hover:after:w-full ${token ? 'block' : 'hidden'} ${nav === '/my-bookings' ? 'after:w-full' : 'after:w-0'}`}>My Bookings</p>
            </div>

            {/* right */}
            <div className='items-center'>
                {!token ? 
                    <div className='flex space-x-4'>
                        <button className='hidden lg:block px-4 py-2 font-medium bg-theme'>Sign In</button>
                        <button className='px-4 py-2 font-medium rounded-md bg-nav-text text-theme'>Sign Up</button>
                    </div>
                    :
                    <div className='flex items-center space-x-1 lg:space-x-5'>
                        <Bell size={24} onClick={() => {setIsNotiDropdownOpen(!isNotiDropdownOpen); setIsProfileDropdownOpen(false)}} className="cursor-pointer hover:text-white transition-colors" />
                        <img src={default_profile} onClick={() => {setIsProfileDropdownOpen(!isProfileDropdownOpen); setIsNotiDropdownOpen(false)}} className="hidden lg:block w-8 h-8 rounded-full ml-2" />
                    </div>
                } 
            </div>
        </div>

        {/* Profile Dropdown */}
        {isProfileDropdownOpen && (
        <div className="absolute hidden lg:block right-10 text-[14px] xl:text-[19px] mt-2 w-50 lg:w-80 bg-card text-text rounded-lg shadow-xl z-50 py-2">
            <div className="px-4 py-2 flex items-center space-x-3">
                <img src={default_profile} className="w-10 h-10 rounded-full ml-2" />
                <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-600">john@example.com</p>
                </div>
            </div>

            <hr className="my-2 border-gray-200" />

            <div className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 transition-colors" onClick={()=> {navigation('/dashboard')}}>
                <LayoutDashboard size={18} />
                <p>Dashboard</p>
            </div>
            <div className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 transition-colors" onClick={()=> {navigation('/my-bookings')}}>
                <Calendar size={18} />
                <p>My Bookings</p>
            </div>
            <div className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 transition-colors" onClick={()=> {navigation('/settings')}}>
                <Settings size={18} />
                <p>Settings</p>
            </div>

            <hr className="my-2 border-gray-200" />

            <div className="flex items-center space-x-4 px-6 py-2 hover:bg-gray-100 transition-colors">
                <LogOut size={18} />
                <p>Logout</p>
            </div>
            
        </div>
        )}

        {/* Notification Dropdown */}
        {isNotiDropdownOpen && (
            <>
                {/* Mobile backdrop */}
                <div className="fixed inset-0 bg-theme/60 bg-opacity-30 z-40 lg:hidden" onClick={() => setIsNotiDropdownOpen(false)} />

                {/* Dropdown */}
                <div className={`fixed lg:absolute right-4 ${isMobileMenuOpen ? 'top-20' : 'lg:top-16 lg:mt-2'} text-[14px] xl:text-[16px] w-[calc(100vw-2rem)] lg:w-96 max-w-md bg-card text-text rounded-lg shadow-2xl z-50 overflow-hidden border border-gray-100`}>
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-gray-200">
                        <p className="font-semibold text-lg text-text">Notifications</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-xs px-2 py-1 bg-theme text-nav-text rounded-full">4 new</span>
                            <button 
                                onClick={() => setIsNotiDropdownOpen(false)}
                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="max-h-80 overflow-y-auto">
                        {notification.map((noti, index) => (
                            <div 
                                key={index} 
                                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group"
                            >
                                <div className="flex items-start space-x-3">
                                    {/* Notification Icon */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-theme/15 flex items-center justify-center">
                                        <Bell size={16} className="text-theme" />
                                    </div>
                                    
                                    {/* Notification Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="font-semibold text-text group-hover:text-theme transition-colors">
                                                {noti.title}
                                            </p>
                                            <span className="text-xs text-text/50 whitespace-nowrap ml-2">
                                                {noti.time}
                                            </span>
                                        </div>
                                        <p className="text-sm text-text/60 mt-1 line-clamp-2">
                                            {noti.message}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* new notifications */}
                                {index < 2 && (
                                    <div className="mt-2 flex items-center">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                                        <span className="text-xs text-red-600 font-medium">Unread</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="px-4 py-3 bg-card border-t border-gray-200">
                        <div className="flex items-center justify-end">
                            <button className="text-sm text-text font-bold transition-colors"> Mark all as read </button>
                        </div>
                    </div>
                </div>
            </>
        )}
        
        {/* mobile sidebar */}
        {isMobileMenuOpen && (
            <>
                {/* backdrop */}
                <div className="fixed inset-0 bg-theme/60 bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />

                {/* sidebar */}
                <div className="text-[16px] fixed left-0 top-0 bottom-0 w-64 bg-theme text-nav-text z-50 transform lg:hidden shadow-2xl">
                    {/* User Info */}
                    <div className="flex items-center justify-between p-3">
                        {token ? (
                        <>
                            <div className='flex items-center space-x-1 lg:space-x-5'>
                                <img src={default_profile} className="w-10 h-10 rounded-full ml-2" />
                                <div className="px-2">
                                    <p className="font-semibold">John Doe</p>
                                    <p className="text-sm text-gray-600">john@example.com</p>
                                </div>
                            </div>
                        </>
                        ) : (
                        <div className='flex'>
                            <div>
                                <p className="font-medium mb-2">Welcome Guest</p>
                                <button className='px-4 py-2 bg-nav-text text-theme rounded-md text-center font-medium'>Sign In</button>
                            </div>
                        </div>
                        )}
                        
                        <X 
                        size={24} 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="hover:bg-gray-800 rounded-md cursor-pointer" 
                        />
                    </div>

                    <hr className="m-2 border-gray-200" />

                    {/* nav items */}
                    <div className='font-medium'>
                        <p className="px-5 py-4 hover:bg-gray-800 transition-colors cursor-pointer" onClick={()=> {navigation('/'); setIsMobileMenuOpen(false)}}>Home</p>
                        <p className="px-5 py-4 hover:bg-gray-800 transition-colors cursor-pointer" onClick={()=> {navigation('/about'); setIsMobileMenuOpen(false)}}>About</p>
                        <p className="px-5 py-4 hover:bg-gray-800 transition-colors cursor-pointer" onClick={()=> {navigation('/cars'); setIsMobileMenuOpen(false)}}>Cars</p>
                        <p className={`px-5 py-4 hover:bg-gray-800 transition-colors cursor-pointer ${token ? 'block' : 'hidden'}`} onClick={()=> {navigation('/my-bookings'); setIsMobileMenuOpen(false)}}>My Bookings</p>
                    </div>

                    <hr className="m-2 border-gray-200" />

                    {/* mobile profile actions */}
                    {token && (
                        <>
                            <div className="flex items-center font-medium space-x-3 px-5 py-4 hover:bg-gray-100 transition-colors">
                                <LayoutDashboard size={18} />
                                <p>Dashboard</p>
                            </div>

                            <div className="flex items-center font-medium space-x-3 px-5 py-4 hover:bg-gray-100 transition-colors">
                                <Settings size={18} />
                                <p>Settings</p>
                            </div>

                            <hr className="m-2 border-gray-200" />

                            <div className="flex items-center font-medium space-x-3 px-5 py-4 hover:bg-gray-100 transition-colors">
                                <LogOut size={18} />
                                <p>Logout</p>
                            </div>
                        </>
                        
                    )}
                </div>
            </>
        )}

    </nav>
  )
}

export default Navbar
