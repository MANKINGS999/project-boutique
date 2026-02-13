import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Maximize2 } from 'lucide-react';
import productsData from '../products.json';


const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden mb-6 aspect-[3/4] border border-espresso/10 shadow-md hover:shadow-2xl transition-shadow duration-500">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-white p-3 rounded-full text-espresso hover:bg-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg">
                        <Heart size={20} />
                    </button>
                    <button className="bg-white p-3 rounded-full text-espresso hover:bg-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100 shadow-lg">
                        <Maximize2 size={20} />
                    </button>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
            </div>

            <div className="text-center space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">{product.category}</p>
                <h3 className="font-playfair text-xl md:text-2xl mb-2 group-hover:text-gold transition-colors duration-300">{product.name}</h3>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-[1px] bg-espresso/20" />
                    <span className="font-semibold text-espresso text-lg">
                        ${typeof product.price === 'number' ? product.price : product.price.replace('$', '')}
                    </span>
                    <div className="w-8 h-[1px] bg-espresso/20" />
                </div>
            </div>
        </motion.div>
    );
};

const ProductGrid = () => {
    const [products, setProducts] = useState(productsData);
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Outerwear', 'Dresses', 'Accessories', 'Essentials'];

    // Load products from localStorage
    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        }
    }, []);

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="collections" className="py-24 bg-gradient-to-b from-cream to-white">
            <div className="container mx-auto px-6">
                {/* Enhanced Header with Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    {/* Ornamental Top */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
                        <div className="w-2 h-2 rotate-45 border border-gold" />
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
                    </div>

                    <span className="text-xs tracking-[0.5em] text-espresso/50 uppercase mb-4 block font-light">
                        Curated Excellence
                    </span>

                    <h2 className="font-playfair text-6xl md:text-7xl lg:text-8xl mb-4 text-espresso relative inline-block">
                        The Collection
                        {/* Decorative underline */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                    </h2>

                    <p className="font-playfair text-2xl md:text-3xl italic text-gold/80 mb-8 mt-8">
                        Timeless pieces for the modern muse
                    </p>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            Each piece in our collection is a testament to exceptional craftsmanship and enduring style.
                            Discover garments that transcend seasons and celebrate the art of refined elegance.
                        </p>
                    </div>

                    {/* Ornamental Bottom */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-espresso/20 to-transparent" />
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-espresso/20 to-transparent" />
                    </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${activeCategory === category
                                ? 'bg-espresso text-white'
                                : 'bg-white text-espresso hover:bg-espresso/10 border border-espresso/20'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Product Grid with AnimatePresence */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                    >
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProductGrid;
