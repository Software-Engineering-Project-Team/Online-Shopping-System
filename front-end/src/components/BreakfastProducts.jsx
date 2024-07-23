import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const breakfastProducts = [
  { id: 6001, category: 'Cereals', name: 'Corn Flakes', description: 'Classic corn flakes cereal', image: 'https://m.media-amazon.com/images/I/51mMZ0m8Y-L._AC_UL320_.jpg', identifiers: ['Cereals', 'Organic'], price: '3.99', availability: 10 },
  { id: 6002, category: 'Cereals', name: 'Honey Nut Cheerios', description: 'Honey nut flavored cereal', image: 'https://m.media-amazon.com/images/I/81Mk1b019qL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '3.99', availability: 10 },
  { id: 6003, category: 'Cereals', name: 'Frosted Flakes', description: 'Sugar-coated corn flakes', image: 'https://m.media-amazon.com/images/I/51xVX5xwgFL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '3.99', availability: 10 },
  { id: 6004, category: 'Cereals', name: 'Fruit Loops', description: 'Fruity flavored cereal loops', image: 'https://m.media-amazon.com/images/I/81sHOYaMsEL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '3.99', availability: 10 },
  { id: 6005, category: 'Cereals', name: 'Oatmeal', description: 'Instant oatmeal packets', image: 'https://m.media-amazon.com/images/I/91kuB88h5-L._AC_UL320_.jpg', identifiers: ['Cereals', 'Organic'], price: '2.99', availability: 10 },
  { id: 6006, category: 'Cereals', name: 'Granola', description: 'Crunchy granola clusters', image: 'https://m.media-amazon.com/images/I/81YniCSnfIL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '4.99', availability: 10 },
  { id: 6007, category: 'Cereals', name: 'Muesli', description: 'Mix of oats, nuts, and dried fruit', image: 'https://m.media-amazon.com/images/I/918kzjz4trL._AC_UL320_.jpg', identifiers: ['Cereals', 'Organic'], price: '5.99', availability: 10 },
  { id: 6008, category: 'Bakery Items', name: 'Bagels', description: 'Fresh plain bagels', image: 'https://m.media-amazon.com/images/I/61txPuSO6ZL._AC_UL320_.jpg', identifiers: ['Bakery Items'], price: '3.99', availability: 10 },
  { id: 6009, category: 'Bakery Items', name: 'English Muffins', description: 'Whole grain English muffins', image: 'https://m.media-amazon.com/images/I/71jG0z5JbrL._AC_UL320_.jpg', identifiers: ['Bakery Items'], price: '2.99', availability: 10 },
  { id: 6010, category: 'Bakery Items', name: 'Breakfast Bread', description: 'Sweet breakfast bread', image: 'https://m.media-amazon.com/images/I/81XAi0ZjWhL._AC_UL320_.jpg', identifiers: ['Bakery Items'], price: '3.99', availability: 10 },
  { id: 6011, category: 'Pancake & Waffle Mixes', name: 'Pancake Mix', description: 'Buttermilk pancake mix', image: 'https://m.media-amazon.com/images/I/81JGGk2NI3L._AC_UL320_.jpg', identifiers: ['Pancake Mix'], price: '2.99', availability: 10 },
  { id: 6012, category: 'Pancake & Waffle Mixes', name: 'Pancake & Waffle Mix', description: 'Organic mix', image: 'https://m.media-amazon.com/images/I/71O0klzifyL._AC_UL320_.jpg', identifiers: ['Pancake & Waffle Mix', 'Organic'], price: '3.99', availability: 10 },
  { id: 6013, category: 'Syrup', name: 'Maple Syrup', description: 'Rich maple syrup', image: 'https://m.media-amazon.com/images/I/51PZNCc5DiL._AC_UL320_.jpg', identifiers: ['Syrup', 'Organic'], price: '5.99', availability: 10 },
  { id: 6014, category: 'Syrup', name: 'Honey Syrup', description: 'Golden honey syrup', image: 'https://m.media-amazon.com/images/I/71pM4LJhZvL._AC_UL320_.jpg', identifiers: ['Syrup'], price: '4.99', availability: 10 },
  { id: 6015, category: 'Breakfast Bars', name: 'Granola Bars', description: 'Nut and oat granola bars', image: 'https://m.media-amazon.com/images/I/81zMG6BR8aL._AC_UL320_.jpg', identifiers: ['Breakfast Bars'], price: '4.99', availability: 10 },
  { id: 6016, category: 'Breakfast Bars', name: 'Protein Bars', description: 'High-protein bars', image: 'https://m.media-amazon.com/images/I/81ZT5n791OL._AC_UL320_.jpg', identifiers: ['Breakfast Bars'], price: '5.99', availability: 10 },
  { id: 6017, category: 'Breakfast Bars', name: 'Breakfast Bars', description: 'Breakfast bars', image: 'https://m.media-amazon.com/images/I/51bmNt4R7PL._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Breakfast Bars'], price: '4.99', availability: 10 },
  { id: 6018, category: 'Cream Cheese', name: 'Plain Cream Cheese', description: 'Smooth plain cream cheese', image: 'https://m.media-amazon.com/images/I/51cQEkVqcZL._AC_UL320_.jpg', identifiers: ['Cream Cheese'], price: '2.99', availability: 10 },
  { id: 6019, category: 'Cream Cheese', name: 'Strawberry Cream Cheese', description: 'Sweet strawberry cream cheese', image: 'https://m.media-amazon.com/images/I/71kk12Ei5NL._AC_UL320_.jpg', identifiers: ['Cream Cheese'], price: '3.99', availability: 10 },
  { id: 6020, category: 'Toaster Pastries', name: 'Pop-Tarts', description: 'Toaster pastries', image: 'https://m.media-amazon.com/images/I/81jz-HjEu0L._AC_UL320_.jpg', identifiers: ['Toaster Pastries'], price: '3.99', availability: 10 },
  { id: 6021, category: 'Frozen Pancakes', name: 'Frozen Pancakes', description: 'Buttermilk frozen pancakes', image: 'https://m.media-amazon.com/images/I/81ed58mzttL._AC_UL320_.jpg', identifiers: ['Frozen Pancakes'], price: '4.99', availability: 10 },
  { id: 6022, category: 'Frozen Waffles', name: 'Frozen Waffles', description: 'Golden frozen waffles', image: 'https://m.media-amazon.com/images/I/71I2l50QmSL._AC_UL320_.jpg', identifiers: ['Frozen Waffles'], price: '3.99', availability: 10 },
  { id: 6023, category: 'Breakfast Meats', name: 'Bacon', description: 'Crispy bacon strips', image: 'https://m.media-amazon.com/images/I/81s0gUR70qL._AC_UL320_.jpg', identifiers: ['Breakfast Meats'], price: '4.99', availability: 10 },
  { id: 6024, category: 'Breakfast Meats', name: 'Sausage', description: 'Breakfast sausage links', image: 'https://m.media-amazon.com/images/I/61q39KriFtL._AC_UL320_.jpg', identifiers: ['Breakfast Meats'], price: '4.99', availability: 10 },
  { id: 6025, category: 'Breakfast Meats', name: 'Ham', description: 'Sliced breakfast ham', image: 'https://m.media-amazon.com/images/I/71MpDwHfQIL._AC_UL320_.jpg', identifiers: ['Breakfast Meats'], price: '3.99', availability: 10 },
  { id: 6026, category: 'Breakfast Drinks', name: 'Orange Juice', description: 'Fresh orange juice', image: 'https://m.media-amazon.com/images/I/711VHNB3W6L._AC_UL320_.jpg', identifiers: ['Breakfast Drinks'], price: '3.99', availability: 10 },
  { id: 6027, category: 'Breakfast Drinks', name: 'Coffee', description: 'Ground coffee', image: 'https://m.media-amazon.com/images/I/61KT4VxTOQL._AC_UL320_.jpg', identifiers: ['Breakfast Drinks', 'Organic'], price: '7.99', availability: 10 },
  { id: 6028, category: 'Breakfast Drinks', name: 'Tea', description: 'Black tea bags', image: 'https://m.media-amazon.com/images/I/81nErrtf3HL._AC_UL320_.jpg', identifiers: ['Breakfast Drinks', 'Organic'], price: '4.99', availability: 10 },
  { id: 6029, category: 'Sandwiches and Skillets', name: 'Breakfast Sandwich', description: 'Sausage, egg, and cheese sandwich', image: 'https://m.media-amazon.com/images/I/81RnR+e7BpL._AC_UL320_.jpg', identifiers: ['Sandwiches and Skillets'], price: '2.99', availability: 10 },
  { id: 6030, category: 'Sandwiches and Skillets', name: 'Breakfast Burrito', description: 'Egg, cheese, and bacon burrito', image: 'https://m.media-amazon.com/images/I/61plkGUY8vL._AC_UL320_.jpg', identifiers: ['Sandwiches and Skillets'], price: '3.99', availability: 10 },
];
const BreakfastProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(breakfastProducts, searchQuery, sortType);


const breakfastProducts = [
  { category: 'Cereals', name: 'Corn Flakes', description: 'Classic corn flakes cereal', image: 'https://m.media-amazon.com/images/I/51mMZ0m8Y-L._AC_UL320_.jpg', identifiers: ['Cereals', 'Organic'], price: '3.49' },
  { category: 'Cereals', name: 'Honey Nut Cheerios', description: 'Honey nut flavored cereal', image: 'https://m.media-amazon.com/images/I/81Mk1b019qL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '3.99' },
  { category: 'Cereals', name: 'Frosted Flakes', description: 'Sugar-coated corn flakes', image: 'https://m.media-amazon.com/images/I/51xVX5xwgFL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '3.99' },
  { category: 'Cereals', name: 'Fruit Loops', description: 'Fruity flavored cereal loops', image: 'https://m.media-amazon.com/images/I/81sHOYaMsEL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '3.99' },
  { category: 'Cereals', name: 'Oatmeal', description: 'Instant oatmeal packets', image: 'https://m.media-amazon.com/images/I/91kuB88h5-L._AC_UL320_.jpg', identifiers: ['Cereals', 'Organic'], price: '2.99' },
  { category: 'Cereals', name: 'Granola', description: 'Crunchy granola clusters', image: 'https://m.media-amazon.com/images/I/81YniCSnfIL._AC_UL320_.jpg', identifiers: ['Cereals'], price: '4.99' },
  { category: 'Cereals', name: 'Muesli', description: 'Mix of oats, nuts, and dried fruit', image: 'https://m.media-amazon.com/images/I/918kzjz4trL._AC_UL320_.jpg', identifiers: ['Cereals', 'Organic'], price: '5.99' },
  { category: 'Bakery Items', name: 'Bagels', description: 'Fresh plain bagels', image: 'https://m.media-amazon.com/images/I/61txPuSO6ZL._AC_UL320_.jpg', identifiers: ['Bakery Items'], price: '3.49' },
  { category: 'Bakery Items', name: 'English Muffins', description: 'Whole grain English muffins', image: 'https://m.media-amazon.com/images/I/71jG0z5JbrL._AC_UL320_.jpg', identifiers: ['Bakery Items'], price: '2.99' },
  { category: 'Bakery Items', name: 'Breakfast Bread', description: 'Sweet breakfast bread', image: 'https://m.media-amazon.com/images/I/81XAi0ZjWhL._AC_UL320_.jpg', identifiers: ['Bakery Items'], price: '3.99' },
  { category: 'Pancake & Waffle Mixes', name: 'Pancake Mix', description: 'Buttermilk pancake mix', image: 'https://m.media-amazon.com/images/I/81JGGk2NI3L._AC_UL320_.jpg', identifiers: ['Pancake Mix'], price: '2.99' },
  { category: 'Pancake & Waffle Mixes', name: 'Pancake & Waffle Mix', description: 'Organic mix', image: 'https://m.media-amazon.com/images/I/71O0klzifyL._AC_UL320_.jpg', identifiers: ['Pancake & Waffle Mix', 'Organic'], price: '3.49' },
  { category: 'Syrup', name: 'Maple Syrup', description: 'Rich maple syrup', image: 'https://m.media-amazon.com/images/I/51PZNCc5DiL._AC_UL320_.jpg', identifiers: ['Syrup', 'Organic'], price: '5.99' },
  { category: 'Syrup', name: 'Honey Syrup', description: 'Golden honey syrup', image: 'https://m.media-amazon.com/images/I/71pM4LJhZvL._AC_UL320_.jpg', identifiers: ['Syrup'], price: '4.99' },
  { category: 'Breakfast Bars', name: 'Granola Bars', description: 'Nut and oat granola bars', image: 'https://m.media-amazon.com/images/I/81zMG6BR8aL._AC_UL320_.jpg', identifiers: ['Breakfast Bars'], price: '4.99' },
  { category: 'Breakfast Bars', name: 'Protein Bars', description: 'High-protein bars', image: 'https://m.media-amazon.com/images/I/81ZT5n791OL._AC_UL320_.jpg', identifiers: ['Breakfast Bars'], price: '5.99' },
  { category: 'Breakfast Bars', name: 'Breakfast Bars', description: 'Breakfast bars', image: 'https://m.media-amazon.com/images/I/51bmNt4R7PL._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Breakfast Bars'], price: '4.49' },
  { category: 'Cream Cheese', name: 'Plain Cream Cheese', description: 'Smooth plain cream cheese', image: 'https://m.media-amazon.com/images/I/51cQEkVqcZL._AC_UL320_.jpg', identifiers: ['Cream Cheese'], price: '2.99' },
  { category: 'Cream Cheese', name: 'Strawberry Cream Cheese', description: 'Sweet strawberry cream cheese', image: 'https://m.media-amazon.com/images/I/71kk12Ei5NL._AC_UL320_.jpg', identifiers: ['Cream Cheese'], price: '3.49' },
  { category: 'Toaster Pastries', name: 'Pop-Tarts', description: 'Toaster pastries', image: 'https://m.media-amazon.com/images/I/81jz-HjEu0L._AC_UL320_.jpg', identifiers: ['Toaster Pastries'], price: '3.99' },
  { category: 'Frozen Pancakes', name: 'Frozen Pancakes', description: 'Buttermilk frozen pancakes', image: 'https://m.media-amazon.com/images/I/81ed58mzttL._AC_UL320_.jpg', identifiers: ['Frozen Pancakes'], price: '4.49' },
  { category: 'Frozen Waffles', name: 'Frozen Waffles', description: 'Golden frozen waffles', image: 'https://m.media-amazon.com/images/I/71I2l50QmSL._AC_UL320_.jpg', identifiers: ['Frozen Waffles'], price: '3.99' },
  { category: 'Breakfast Meats', name: 'Bacon', description: 'Crispy bacon strips', image: 'https://m.media-amazon.com/images/I/81s0gUR70qL._AC_UL320_.jpg', identifiers: ['Breakfast Meats'], price: '4.99' },
  { category: 'Breakfast Meats', name: 'Sausage', description: 'Breakfast sausage links', image: 'https://m.media-amazon.com/images/I/61q39KriFtL._AC_UL320_.jpg', identifiers: ['Breakfast Meats'], price: '4.49' },
  { category: 'Breakfast Meats', name: 'Ham', description: 'Sliced breakfast ham', image: 'https://m.media-amazon.com/images/I/71MpDwHfQIL._AC_UL320_.jpg', identifiers: ['Breakfast Meats'], price: '3.99' },
  { category: 'Breakfast Drinks', name: 'Orange Juice', description: 'Fresh orange juice', image: 'https://m.media-amazon.com/images/I/711VHNB3W6L._AC_UL320_.jpg', identifiers: ['Breakfast Drinks'], price: '3.49' },
  { category: 'Breakfast Drinks', name: 'Coffee', description: 'Ground coffee', image: 'https://m.media-amazon.com/images/I/61KT4VxTOQL._AC_UL320_.jpg', identifiers: ['Breakfast Drinks', 'Organic'], price: '7.99' },
  { category: 'Breakfast Drinks', name: 'Tea', description: 'Black tea bags', image: 'https://m.media-amazon.com/images/I/81nErrtf3HL._AC_UL320_.jpg', identifiers: ['Breakfast Drinks', 'Organic'], price: '4.49' },
  { category: 'Sandwiches and Skillets', name: 'Breakfast Sandwich', description: 'Sausage, egg, and cheese sandwich', image: 'https://m.media-amazon.com/images/I/81RnR+e7BpL._AC_UL320_.jpg', identifiers: ['Sandwiches and Skillets'], price: '2.99' },
  { category: 'Sandwiches and Skillets', name: 'Breakfast Burrito', description: 'Egg, cheese, and bacon burrito', image: 'https://m.media-amazon.com/images/I/61plkGUY8vL._AC_UL320_.jpg', identifiers: ['Sandwiches and Skillets'], price: '3.49' },
];

const sortedBreakfastProducts = breakfastProducts.sort((a, b) => a.category.localeCompare(b.category));

const BreakfastProducts = ({addToCart}) => {
  return (
    
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Breakfast Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedBreakfastProducts.map((product) => (
          <div key={product.name} className="card bg-base-100 w-72 shadow-xl">
            <figure className="h-48 flex items-center justify-center bg-white">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title flex justify-center mb-4">{product.name}</h2>
                <p className="card-description flex justify-center">{product.description}</p>
              </div>
              <div className="card-actions flex flex-row items-center">
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2" onClick={() => addToCart(product)}>Add to Cart</button>
                <div className="flex flex-col gap-1 ml-2">
                  {product.identifiers.map((identifier) => (
                    <div key={identifier} className="badge badge-outline">{identifier}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BreakfastProducts;