"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const RecentlyBoughtSection = () => {
  const [recentlyBought, setRecentlyBought] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch recently bought data from localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem("recentlyBought");
    if (savedOrders) {
      setRecentlyBought(JSON.parse(savedOrders));
    }
  }, []);

  const viewShippingDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />

      {/* Recently Bought Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-5 rounded-2xl shadow-lg w-full max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
          🛍️ Recently Bought
        </h2>

        {recentlyBought.length > 0 ? (
          <div className="space-y-4">
            {recentlyBought.map((order, index) => (
              <div
                key={index}
                className="bg-pink-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-pink-100 transition duration-300"
                onClick={() => viewShippingDetails(order)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  Order {index + 1}
                </h3>
                <p className="text-sm text-gray-600">
                  Total: ₹{order.totalAmount}
                </p>
                <ul className="text-sm text-gray-500">
                  {order.products.map((item) => (
                    <li key={item.id}>
                      {item.name} (₹{item.price} x {item.quantity})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No recent orders yet. Start shopping now! 🛒
          </p>
        )}
      </motion.div>

      {/* Shipping Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-red-500 mb-4">
              📦 Shipping Details
            </h2>
            <p className="text-gray-700">
              <strong>Order ID:</strong> {selectedOrder.id || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong>Total Amount:</strong> ₹{selectedOrder.totalAmount}
            </p>

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Shipping Address:
            </h3>
            <p className="text-sm text-gray-500">
              <strong>Name:</strong> {selectedOrder.shippingAddress.name}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Phone:</strong> {selectedOrder.shippingAddress.phone}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Address:</strong> {selectedOrder.shippingAddress.address}
            </p>
            <p className="text-sm text-gray-500">
              <strong>City:</strong> {selectedOrder.shippingAddress.city}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Pincode:</strong> {selectedOrder.shippingAddress.pincode}
            </p>

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Items Ordered:
            </h3>
            <ul className="text-sm text-gray-500">
              {selectedOrder.products.map((item) => (
                <li key={item.id}>
                  {item.name} (₹{item.price} x {item.quantity})
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentlyBoughtSection;
