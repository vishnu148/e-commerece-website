import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Support Local Businesses</span>
                  <span className="block text-indigo-600">Shop with Purpose</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Discover unique products from local artisans and businesses in your community.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <Link
                      to="/products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Package className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Quality Products</h3>
            <p className="mt-2 text-gray-600">Handpicked selection of premium local goods</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <ShoppingBag className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Secure Shopping</h3>
            <p className="mt-2 text-gray-600">Safe and reliable shopping experience</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Community Support</h3>
            <p className="mt-2 text-gray-600">Supporting local businesses and artisans</p>
          </div>
        </div>
      </div>
    </div>
  );
}