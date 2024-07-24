import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import { onSaleProducts } from './Stock';
import useSortedProducts from '../hooks/useSortedProducts';
import SortOptions from './SortOptions';

const OnSaleProducts = ({ setSearchQuery, searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(onSaleProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="On Sale" bgImage={bgHero} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OnSaleProducts;