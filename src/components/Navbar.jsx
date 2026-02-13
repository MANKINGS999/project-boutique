import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Collections', href: '/collections', isRoute: true },
        { name: 'Our Story', href: '#story', isRoute: false },
        { name: 'Journal', href: '#journal', isRoute: false },
        { name: 'Contact', href: '#contact', isRoute: false },
        // { name: 'Admin', href: '/admin', isRoute: true },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-playfair font-bold tracking-widest text-espresso">
                    LUMINA.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        link.isRoute ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-sm font-medium tracking-wide text-espresso/80 hover:text-espresso relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-wide text-espresso/80 hover:text-espresso relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        )
                    ))}
                </div>

                {/* Icons */}
                <div className="hidden md:flex items-center space-x-6 text-espresso">
                    <button className="hover:text-gold transition-colors"><Search size={20} /></button>
                    <button className="hover:text-gold transition-colors relative">
                        <ShoppingBag size={20} />
                        <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-espresso"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-espresso hover:text-gold transition-colors p-2"
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-2xl font-playfair text-espresso hover:text-gold transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-playfair text-espresso hover:text-gold transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
