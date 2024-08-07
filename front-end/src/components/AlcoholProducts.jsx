import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';
import SortOptions from './SortOptions';

export const alcoholProducts = [
  { id: 1001, category: 'Beer', name: 'Lager', description: 'Crisp and refreshing lager', image: 'https://m.media-amazon.com/images/I/71xDaHTK10L._AC_UL320_.jpg', identifiers: ['Beer'], price: '13.99', availability: 20},
  { id: 1002, category: 'Beer', name: 'IPA', description: 'Hoppy and bitter India Pale Ale', image: 'https://m.media-amazon.com/images/I/91+FZfu38rL._AC_UL320_.jpg', identifiers: ['Beer'], price: '11.99', availability: 10},
  { id: 1003, category: 'Beer', name: 'Stout', description: 'Rich and creamy stout', image: 'https://m.media-amazon.com/images/I/81qjZyW0v8L._AC_UL320_.jpg', identifiers: ['Beer'], price: '12.99', availability: 5},
  { id: 1004, category: 'Beer', name: 'Pilsner', description: 'Light and crisp pilsner', image: 'https://m.media-amazon.com/images/I/81oHS-z6YXL._AC_UL320_.jpg', identifiers: ['Beer'], price: '12.99', availability: 25},
  { id: 1005, category: 'Beer', name: 'Porter', description: 'Dark and flavorful porter', image: 'https://m.media-amazon.com/images/I/81VIZGrS6EL._AC_UL320_.jpg', identifiers: ['Beer'], price: '11.99', availability: 12},
  { id: 1006, category: 'Beer', name: 'Cider', description: 'Crisp apple cider', image: 'https://m.media-amazon.com/images/I/81+bMEHshgL._AC_UL320_.jpg', identifiers: ['Beer'], price: '12.99', availability: 50},
  { id: 1007, category: 'Wine', name: 'Chardonnay', description: 'Buttery and oaky Chardonnay', image: 'https://m.media-amazon.com/images/I/311DiLsSDqL._SX342_SY445_QL70_FMwebp_.jpg', identifiers: ['Wine'], price: '14.99', availability: 22},
  { id: 1008, category: 'Wine', name: 'Merlot', description: 'Smooth and fruity Merlot', image: 'https://m.media-amazon.com/images/I/41vuwJ4ackL._AC_UL320_.jpg', identifiers: ['Wine'], price: '13.99', availability: 45},
  { id: 1009, category: 'Wine', name: 'Cabernet Sauvignon', description: 'Bold and full-bodied Cabernet', image: 'https://m.media-amazon.com/images/I/61z2o7AI7kL.__AC_SX342_SY445_QL70_FMwebp_.jpg', identifiers: ['Wine'], price: '15.99', availability: 8},
  { id: 1010, category: 'Wine', name: 'Sauvignon Blanc', description: 'Crisp and refreshing Sauvignon Blanc', image: 'https://m.media-amazon.com/images/I/515JDrKiBxL._AC_UL320_.jpg', identifiers: ['Wine'], price: '12.99', availability: 18},
  { id: 1011, category: 'Wine', name: 'Pinot Noir', description: 'Light and fruity Pinot Noir', image: 'https://m.media-amazon.com/images/I/41Z+odrJ7pL._AC_SX522_.jpg', identifiers: ['Wine'], price: '13.99', availability: 31},
  { id: 1012, category: 'Wine', name: 'Zinfandel', description: 'Bold and spicy Zinfandel', image: 'https://m.media-amazon.com/images/I/713KhiP-iKL._AC_UL320_.jpg', identifiers: ['Wine'], price: '14.99', availability: 29},
  { id: 1013, category: 'Wine', name: 'Sparkling Wine', description: 'Bubbly and festive sparkling wine', image: 'https://m.media-amazon.com/images/I/61WvbCGi4cL._AC_UL320_.jpg', identifiers: ['Wine'], price: '16.99', availability: 15},
  { id: 1014, category: 'Cocktails', name: 'Margarita', description: 'Classic margarita cocktail mix', image: 'https://m.media-amazon.com/images/I/71dWjAZmR9L._AC_UL320_.jpg', identifiers: ['Cocktails'], price: '8.99', availability: 14},
  { id: 1015, category: 'Cocktails', name: 'Martini', description: 'Elegant martini cocktail mix', image: 'https://m.media-amazon.com/images/I/51GTKjcODAL._AC_UL320_.jpg', identifiers: ['Cocktails'], price: '9.99', availability: 13},
  { id: 1016, category: 'Cocktails', name: 'Mojito', description: 'Refreshing mojito cocktail mix', image: 'https://m.media-amazon.com/images/I/61In0kWj2mL._AC_UL320_.jpg', identifiers: ['Cocktails'], price: '8.99', availability: 18},
  { id: 1017, category: 'Cocktails', name: 'Old Fashioned', description: 'Classic old fashioned cocktail mix', image: 'https://m.media-amazon.com/images/I/71qBPumbxdL._AC_UL320_.jpg', identifiers: ['Cocktails'], price: '10.99', availability: 23},
  { id: 1018, category: 'Cocktails', name: 'Cosmopolitan', description: 'Chic cosmopolitan cocktail mix', image: 'https://m.media-amazon.com/images/I/71kkIjUUMKL._AC_UL320_.jpg', identifiers: ['Cocktails'], price: '9.99', availability: 22},
  { id: 1019, category: 'Juice', name: 'Pineapple Juice', description: 'Canned pineapple juice', image: 'https://m.media-amazon.com/images/I/91ZAUWuiFQL._AC_UL320_.jpg', identifiers: ['Cocktails'], price: '10.99', availability: 60},
  { id: 1020, category: 'Non-Alcoholic', name: 'Non-Alcoholic Beer', description: 'Alcohol-free beer', image: 'https://m.media-amazon.com/images/I/71199-v5HvL._AC_UL320_.jpg', identifiers: ['Non-Alcoholic'], price: '18.99', availability: 72},
];

export const newAlcoholProducts = [
  { id: 1021, category: 'Wine', name: 'Rosé', description: 'Light and fruity Rosé', image: 'https://m.media-amazon.com/images/I/710jhhmHnRL._AC_UL320_.jpg', identifiers: ['Wine'], price: '12.99', availability: 10 },
  { id: 1022, category: 'Beer', name: 'Craft Lager', description: 'Specialty craft lager', image: 'https://m.media-amazon.com/images/I/911xb2gbb7L._AC_UL320_.jpg', identifiers: ['Beer'], price: '14.99', availability: 10 }
];


const AlcoholProducts = ({ setSearchQuery, searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(alcoholProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Alcohol" bgImage={bgHero} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AlcoholProducts;