"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const RecentlyBoughtSection = () => {
  const [recentlyBought, setRecentlyBought] = useState([]);

  // Fetch recently bought data from localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem("recentlyBought");
    if (savedOrders) {
      // Parse the stored JSON data
      setRecentlyBought(JSON.parse(savedOrders));
    }
  }, []);

  const viewShippingDetails = (order) => {
    // Add your shipping details logic here
    console.log("Viewing details for order:", order);
  };

  return (
    <>
      <Navbar />
      {/* Recently Bought Section */}

      {recentlyBought.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className=" bg-white p-5 rounded-2xl shadow-lg w-full max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold text-red-500 mb-4 text-center ">
            🛍️ Recently Bought
          </h2>
          <div className="space-y-4 ">
            {recentlyBought.map((order, index) => (
              <div
                key={index}
                className="bg-pink-50 p-4 rounded-lg shadow-md"
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
        </motion.div>
      )}
    </>
  );
};

export default RecentlyBoughtSection;
