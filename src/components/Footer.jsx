import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="relative text-white py-32 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/footer-bg.jpg"
                    alt="Lumina Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-playfair text-5xl md:text-7xl mb-8 tracking-tighter"
                    >
                        LUMINA.
                    </motion.h2>

                    <p className="text-white/80 mb-12 max-w-lg mx-auto leading-relaxed font-light text-lg">
                        Elevating everyday elegance with sustainable luxury. <br />
                        Join our newsletter for exclusive collections.
                    </p>

                    <div className="space-y-4 text-white/60 mb-12">
                        <p className="hover:text-gold transition-colors cursor-pointer">123 Fashion Ave, New York, NY 10012</p>
                        <p className="hover:text-gold transition-colors cursor-pointer">hello@luminaboutique.com</p>
                    </div>

                    <div className="flex space-x-8 mb-12">
                        {['Instagram', 'Pinterest', 'Twitter'].map((social) => (
                            <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-gold transition-colors">
                                {social}
                            </a>
                        ))}
                    </div>

                    <div className="text-white/30 text-xs tracking-widest uppercase">
                        &copy; 2026 Lumina Boutique. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
