import React from 'react';
import Hero from '../components/Hero';
import Editorial from '../components/Editorial';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Editorial />
            <ProductGrid />
            <Footer />
        </>
    );
};

export default Home;
