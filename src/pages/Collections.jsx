import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Maximize2, X, SlidersHorizontal } from 'lucide-react';
import Footer from '../components/Footer';
// import productsData from '../products.json';

const Collections = () => {
    // const [products, setProducts] = useState(productsData);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState([0, 3000]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showFilters, setShowFilters] = useState(false);

    const categories = ['All', 'Outerwear', 'Dresses', 'Accessories', 'Essentials'];

    // // Load products from localStorage
    // useEffect(() => {
    //     const savedProducts = localStorage.getItem('products');
    //     if (savedProducts) {
    //         setProducts(JSON.parse(savedProducts));
    //     }
    // }, []);

        useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://opensheet.elk.sh/1WnPTg37rqdtz3riEFR6ht5GXAFk1cqpaRScXzW7bzK4/Sheet1");
                const data = await response.json();

                // Clean + normalize data
                const cleanedData = data.map(item => ({
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    price: Number(item.price),
                    image: item.image?.trim(),
                    availability: item.availability,
                    description: item.description
                }));

                // Optional: only show available products
                const availableProducts = cleanedData.filter(
                    p => p.availability === "yes" || p.availability === true
                );

                setProducts(availableProducts);

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    // Filter products
    let filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    // Apply price filter
    filteredProducts = filteredProducts.filter(
        p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-cream to-white">
            {/* Hero Banner */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop"
                    alt="Collections"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="text-sm tracking-[0.4em] uppercase mb-4 block">Spring / Summer 2026</span>
                        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl mb-6">
                            Full Collection
                        </h1>
                        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                            Explore our complete catalog of timeless pieces
                        </p>
                    </motion.div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-8 left-6 md:left-12">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Collections</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">

                    {/* Filters & Sort Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${activeCategory === category
                                        ? 'bg-espresso text-white shadow-md'
                                        : 'bg-white text-espresso hover:bg-espresso/10 border border-espresso/20'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Sort & Filter Controls */}
                        <div className="flex items-center gap-4">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-espresso/20 bg-white text-espresso text-sm uppercase tracking-wider cursor-pointer focus:outline-none focus:border-gold"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A-Z</option>
                            </select>

                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 border border-espresso/20 bg-white text-espresso text-sm uppercase tracking-wider hover:bg-espresso/10 transition-colors"
                            >
                                <SlidersHorizontal size={16} />
                                Filters
                            </button>
                        </div>
                    </div>

                    {/* Advanced Filters Panel */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-12 overflow-hidden"
                            >
                                <div className="bg-white border border-espresso/10 p-8">
                                    <h3 className="font-playfair text-2xl mb-6 text-espresso">Price Range</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="3000"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>${priceRange[0]}</span>
                                            <span>${priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Results Count */}
                    <div className="mb-8 text-center">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-espresso">{sortedProducts.length}</span> {sortedProducts.length === 1 ? 'piece' : 'pieces'}
                        </p>
                    </div>

                    {/* Product Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeCategory}-${sortBy}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            {sortedProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="relative overflow-hidden mb-4 aspect-[3/4] border border-espresso/10 shadow-md hover:shadow-2xl transition-shadow duration-500">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                            <button
                                                className="bg-white p-3 rounded-full text-espresso hover:bg-gold hover:text-white transition-colors shadow-lg"
                                                onClick={(e) => { e.stopPropagation(); }}
                                            >
                                                <Heart size={20} />
                                            </button>
                                            <button className="bg-white p-3 rounded-full text-espresso hover:bg-gold hover:text-white transition-colors shadow-lg">
                                                <Maximize2 size={20} />
                                            </button>
                                        </div>

                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/0 group-hover:border-gold/50 transition-colors duration-500" />
                                    </div>

                                    <div className="text-center space-y-2">
                                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{product.category}</p>
                                        <h3 className="font-playfair text-xl group-hover:text-gold transition-colors duration-300">{product.name}</h3>
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-8 h-[1px] bg-espresso/20" />
                                            <span className="font-semibold text-espresso">${product.price}</span>
                                            <div className="w-8 h-[1px] bg-espresso/20" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Quick View Modal */}
                    <AnimatePresence>
                        {selectedProduct && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
                                onClick={() => setSelectedProduct(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <X size={24} />
                                    </button>

                                    <div className="grid md:grid-cols-2 gap-8 p-8">
                                        <div className="aspect-[3/4]">
                                            <img
                                                src={selectedProduct.image}
                                                alt={selectedProduct.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center space-y-6">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">{selectedProduct.category}</p>
                                                <h2 className="font-playfair text-4xl md:text-5xl text-espresso mb-4">{selectedProduct.name}</h2>
                                                <p className="text-3xl font-semibold text-gold">${selectedProduct.price}</p>
                                            </div>

                                            <div className="space-y-4">
                                                <p className="text-gray-600 leading-relaxed">
                                                   {selectedProduct.description}
                                                </p>

                                                <div className="flex gap-3">
                                                    <span className="px-4 py-2 bg-espresso/5 text-espresso text-xs uppercase tracking-wider">
                                                        {selectedProduct.style}
                                                    </span>
                                                    <span className="px-4 py-2 bg-espresso/5 text-espresso text-xs uppercase tracking-wider">
                                                        Premium Quality
                                                    </span>
                                                </div>
                                            </div>

                                            <button className="w-full bg-espresso text-white py-4 uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300">
                                                Add to Cart
                                            </button>

                                            <button className="w-full border border-espresso text-espresso py-4 uppercase tracking-widest text-sm hover:bg-espresso hover:text-white transition-colors duration-300">
                                                Add to Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Collections;
