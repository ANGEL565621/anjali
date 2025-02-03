"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Heart, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    image: "/i1.jpeg",
    name: "Valentine Teddy Bear",
    price: 599,
    status: "Add to Cart",
  },
  {
    id: 2,
    image: "/i2.jpeg",
    name: "Romantic Rose Bouquet",
    price: 899,
    status: "Add to Cart",
  },
  {
    id: 3,
    image: "/i3.jpeg",
    name: "Luxury Chocolate Box",
    price: 499,
    status: "Add to Cart",
  },
  {
    id: 4,
    image: "/i4.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 5,
    image: "/i5.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 6,
    image: "/i6.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 7,
    image: "/i7.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 8,
    image: "/i8.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 9,
    image: "/i9.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 10,
    image: "/i10.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 11,
    image: "/i11.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 12,
    image: "/i12.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 13,
    image: "/i13.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 14,
    image: "/i14.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 15,
    image: "/i15.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
  {
    id: 16,
    image: "/i16.jpeg",
    name: "Couple's Silver Ring",
    price: 1299,
    status: "Add to Cart",
  },
];

export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [recentlyBought, setRecentlyBought] = useState([]);

  useEffect(() => {
    // Load previously saved recently bought items from local storage
    const savedBoughtItems =
      JSON.parse(localStorage.getItem("recentlyBought")) || [];
    setRecentlyBought(savedBoughtItems);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the message
    const cartItems = cart
      .map((item) => `${item.name} (₹${item.price} x ${item.quantity})`)
      .join("\n");
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const message = encodeURIComponent(`  
      *Order Details* 📦
      Name: ${formData.name}
      Phone: ${formData.phone}
      Address: ${formData.address}
      City: ${formData.city}
      Pincode: ${formData.pincode}

      *Products:*
      ${cartItems}

      *Total Amount:* ₹${totalAmount}
    `);

    // WhatsApp API link
    const whatsappLink = `https://wa.me/7085268019?text=${message}`;

    // Open the WhatsApp link
    window.open(whatsappLink, "_blank");

    // Store the order in the "recentlyBought" section and save it to localStorage
    const newOrder = {
      products: cart,
      totalAmount,
      shippingAddress: formData,
    };
    const updatedBoughtItems = [newOrder, ...recentlyBought];
    setRecentlyBought(updatedBoughtItems);
    localStorage.setItem("recentlyBought", JSON.stringify(updatedBoughtItems));

    // Optional: Alert or confirmation message
    alert("Order placed successfully!");

    // Clear the cart after order submission
    setCart([]);
  };

  const addToCart = (product) => {
    alert("Added to cart!");
    if (product.status !== "Add to Cart") return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const viewShippingDetails = (order) => {
    alert(`
      Shipping Details:
      Name: ${order.shippingAddress.name}
      Phone: ${order.shippingAddress.phone}
      Address: ${order.shippingAddress.address}
      City: ${order.shippingAddress.city}
      Pincode: ${order.shippingAddress.pincode}
    `);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6 mt-20">
        💝 Valentine's Day Specials 💝
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 mb-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Recently Bought Section */}
      {
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white p-5 rounded-2xl shadow-lg w-full max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
            🛍️ Recently Bought
          </h2>

          {recentlyBought.length > 0 ? (
            <div className="space-y-4">
              {recentlyBought.map((order, index) => (
                <div
                  key={index}
                  className="bg-pink-50 p-4 rounded-lg shadow-md cursor-pointer"
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
            <p className="text-center text-gray-500">No recent orders yet.</p>
          )}
        </motion.div>
      }

      {/* Cart Section */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white p-5 rounded-2xl shadow-lg w-full max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-red-500 mb-4 text-center md:text-left">
            🛒 Your Cart
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-pink-100 text-gray-800 text-sm md:text-base">
                  <th className="p-2 md:p-3 text-left">Product</th>
                  <th className="p-2 md:p-3 text-left">Price</th>
                  <th className="p-2 md:p-3 text-center">Quantity</th>
                  <th className="p-2 md:p-3 text-center">Total</th>
                  <th className="p-2 md:p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-t text-sm md:text-base">
                    <td className="p-2 md:p-3 flex items-center gap-2 md:gap-3">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <span className="font-semibold text-gray-800 truncate max-w-[100px] md:max-w-none">
                        {item.name}
                      </span>
                    </td>
                    <td className="p-2 md:p-3 text-red-500 font-semibold">
                      ₹{item.price}
                    </td>
                    <td className="p-2 md:p-3 flex justify-center items-center gap-1 md:gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-pink-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-l-md hover:bg-pink-600"
                      >
                        -
                      </button>
                      <span className="px-2 md:px-4 text-gray-800 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-pink-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-r-md hover:bg-pink-600"
                      >
                        +
                      </button>
                    </td>
                    <td className="p-2 md:p-3 text-gray-800 font-semibold">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="p-2 md:p-3 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Order Form */}
      <div className="mt-10 bg-white p-5 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
          📝 Shipping Details
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Shipping Address"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="relative  h-80">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill" // Ensures image takes up the entire container
          objectFit="cover" // Maintains the aspect ratio and covers the area
          className="rounded-lg transition-all duration-300 transform hover:scale-110"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-800 truncate transition-all duration-300 hover:text-red-500">
        {product.name}
      </h3>
      <p className="text-red-500 font-semibold transition-all duration-300">
        ₹{product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        disabled={product.status !== "Add to Cart"}
        className={`mt-4 px-4 py-2 flex items-center justify-center gap-2 text-white rounded-lg w-full transition-all duration-300 transform ${
          product.status === "Add to Cart"
            ? "bg-red-500 hover:bg-red-600 hover:scale-105 hover:translate-y-1"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        <Heart size={20} />
        {product.status === "Add to Cart" ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};
