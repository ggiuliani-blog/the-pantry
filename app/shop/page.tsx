import { ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Shop | The Pantry',
  description: 'Browse refillable goods and eco essentials. Online shop coming soon.'
};

export default function ShopPage() {
  return (
    <div className="container-page py-16">
      <div className="flex items-center gap-3 mb-2">
        <ShoppingBag className="w-8 h-8 text-leaf-700" />
        <h1 className="text-3xl font-bold">Shop</h1>
      </div>
      <p className="text-gray-700 max-w-2xl mb-6">
        Our Shopify-powered store is coming soon. In the meantime, visit the van for in-person refills and
        eco essentials.
      </p>
      <div className="rounded-md border p-8 bg-gray-50 flex flex-col items-center justify-center gap-4">
        <ShoppingBag className="w-16 h-16 text-gray-400" />
        <p className="text-gray-600">No products yet. Check back shortly!</p>
      </div>
    </div>
  );
}

