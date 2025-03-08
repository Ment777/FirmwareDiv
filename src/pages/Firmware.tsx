import { memo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Firmware() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Available Firmware
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Firmware);
