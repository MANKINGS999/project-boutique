
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[120%] -top-[10%]"
            >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
                    alt="Lumina Fashion Hero"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-white/90"
                >
                    Spring / Summer 2026
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                    className="font-playfair text-5xl md:text-7xl lg:text-9xl mb-8 leading-tight"
                >
                    Elegance <br /> <span className="italic font-light">Redefined</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <a
                        href="#collections"
                        className="inline-block px-10 py-4 border border-white/50 text-white hover:bg-white hover:text-espresso transition-all duration-300 tracking-widest uppercase text-xs md:text-sm backdrop-blur-sm"
                    >
                        Explore Collection
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
            >
                <span className="text-xs tracking-widest">SCROLL</span>
                <div className="w-[1px] h-12 bg-white/50 mx-auto mt-2"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
