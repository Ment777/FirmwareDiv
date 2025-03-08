import { type Product } from '../types';
import { memo } from 'react';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="h-[400px] w-full transform transition-all duration-300 hover:scale-[1.02]">
      <div className="h-full bg-[#0A1018] rounded-lg p-8 flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <span className="text-cyan-400">◆</span>
          {product.name}
        </h3>
        
        <div className="text-3xl font-bold text-cyan-400 mt-4">
          ${product.price}
        </div>
        
        <div className="flex-grow space-y-3 mt-6">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start text-gray-300">
              <span className="text-cyan-400 mr-2">➜</span>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="text-cyan-300 text-sm mt-4 border-t border-gray-800 pt-4">
          {product.description}
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);
