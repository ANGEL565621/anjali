"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bg-pink-100 min-h-screen font-sans text-gray-900">
        <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-12">
          <div className="container mx-auto text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg leading-relaxed mb-8">
              At Valentine's Gifts, we believe in spreading love and joy! Our
              curated collection of roses, flowers, and thoughtful gifts is
              designed to make your Valentine's Day special. Whether you're
              surprising a loved one or celebrating with friends, we have
              everything to make this day unforgettable.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-pink-700 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-pink-500 transition"
            >
              Learn More
            </button>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/i4.jpeg"
                alt="Roses"
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  Beautiful Roses
                </h3>
                <p className="text-gray-700">
                  Our roses are hand-picked, ensuring the freshest and most
                  beautiful blooms for your special someone.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/i11.jpeg"
                alt="Valentine Gifts"
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  Gifts for Loved Ones
                </h3>
                <p className="text-gray-700">
                  Find the perfect gift to show your love, from chocolates to
                  personalized keepsakes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/i15.jpeg"
                alt="Flowers"
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  Elegant Flower Bouquets
                </h3>
                <p className="text-gray-700">
                  Our bouquets are carefully arranged with a selection of the
                  finest flowers, perfect for any occasion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-pink-100 py-12 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Why Choose Us?
          </h2>
          <div className="container mx-auto px-4">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              We take pride in delivering high-quality flowers, roses, and gifts
              to make your Valentine's Day experience memorable. Our commitment
              to customer satisfaction ensures that your gift reaches its
              destination on time and with love.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              From quick delivery options to custom gift wrapping, we are here
              to help you express your love in the most beautiful way possible.
            </p>
          </div>
        </section>

        <footer className="bg-red-600 py-6 text-white text-center">
          <p>&copy; 2025 Lovenest. All rights reserved.</p>
        </footer>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6">
                Valentine's Gifts started with a simple vision: to help people
                express love in the most beautiful way possible. From humble
                beginnings, we have grown into a trusted brand offering
                high-quality roses, flowers, and gifts for every romantic
                occasion.
              </p>
              <button
                className="bg-pink-700 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-pink-500 transition"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
