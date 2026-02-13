import React from 'react';
import { motion } from 'framer-motion';

const Editorial = () => {
    return (
        <section className="pb-20 pt-0 bg-gradient-to-b from-espresso via-latte to-cream">
            {/* 1. Full Width Banner with Enhanced Quote Readability */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mb-16">
                <img
                    src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2564&auto=format&fit=crop"
                    alt="Lumina Fashion"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-5xl"
                    >
                        {/* Glassmorphism backdrop */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-2xl -m-8" />

                        <h2 className="relative text-white font-playfair text-3xl md:text-6xl lg:text-7xl text-center italic leading-tight px-8 py-12 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                            "Style is a way to say who you are <br /> without having to speak."
                        </h2>
                    </motion.div>
                </div>
            </div>


            {/* 2. Redesigned Campaign Section - Magazine Style */}
            <div className="container mx-auto px-6 mb-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs tracking-[0.4em] text-espresso/60 uppercase mb-3 block">Spring Campaign 2026</span>
                    <h2 className="font-playfair text-5xl md:text-7xl text-white mb-4">
                        The Art of <span className="italic text-gold">Slow Fashion</span>
                    </h2>
                    <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
                </motion.div>

                {/* Asymmetric Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column - Large Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 relative group"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                                alt="Slow Fashion Detail"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Decorative Corner Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/50" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/50" />
                        </div>

                        {/* Overlapping Statistics Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -bottom-8 -right-4 lg:-right-12 bg-white p-8 shadow-2xl max-w-xs"
                        >
                            <div className="space-y-4">
                                <div>
                                    <div className="text-4xl font-playfair text-espresso mb-1">100%</div>
                                    <div className="text-sm text-gray-600 uppercase tracking-wider">Natural Fibers</div>
                                </div>
                                <div className="w-full h-[1px] bg-gray-200" />
                                <div>
                                    <div className="text-4xl font-playfair text-espresso mb-1">48hrs</div>
                                    <div className="text-sm text-gray-600 uppercase tracking-wider">Hand-Stitched</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content & Small Image */}
                    <div className="lg:col-span-5 space-y-8 mt-8 lg:mt-0">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="relative pl-6 border-l-2 border-gold">
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    We believe in pieces that travel through time. Crafted by master artisans in Italy,
                                    our collection honors the tradition of hand-stitched perfection.
                                </p>
                            </div>

                            <p className="text-white/80 leading-relaxed">
                                Natural fibers. Ethical sourcing. Uncompromising quality. This is not just clothing;
                                it is a promise of enduring elegance for the modern muse.
                            </p>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider border border-white/20">
                                    Sustainable
                                </span>
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider border border-white/20">
                                    Handcrafted
                                </span>
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider border border-white/20">
                                    Timeless
                                </span>
                            </div>
                        </motion.div>

                        {/* Small Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative aspect-[3/2] overflow-hidden group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                                alt="Artisan Craftsmanship"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-playfair text-2xl italic">
                                    "Every stitch tells a story"
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="group flex items-center gap-3 text-white hover:text-gold transition-colors"
                        >
                            <span className="uppercase tracking-widest text-sm font-medium">Discover Our Story</span>
                            <div className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-gold transition-all duration-300" />
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Editorial;
