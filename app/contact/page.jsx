"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message URL
    const message = `*Name*: ${formData.name}%0A*Email*: ${formData.email}%0A*Message*: ${formData.message}`;
    const whatsAppNumber = "7085268019"; // WhatsApp number to send the message
    const whatsAppAPIUrl = `https://wa.me/${whatsAppNumber}?text=${message}`;

    // Redirect user to WhatsApp
    window.location.href = whatsAppAPIUrl;

    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen font-sans text-gray-900">
        <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg leading-relaxed mb-8">
            We're here to help! Whether you have questions about our products,
            orders, or services, feel free to get in touch. We'd love to hear
            from you.
          </p>
        </section>

        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-700 py-2 px-4 rounded-lg text-white text-lg font-semibold hover:bg-pink-500 disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                Our Location
              </h2>
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  Visit Us
                </p>
                <p className="text-gray-700">
                  Lovenest
                  <br />
                  Chumukedima Nagaland
                  <br />
                  797115 Nagaland
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:contact@valentinesgifts.com"
                    className="text-pink-600"
                  >
                    anjali.jaiswal.1l15@gmail.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a href="tel:+1234567890" className="text-pink-600">
                    +91 7085268019
                  </a>
                </p>
              </div>

              <div className="w-full h-72 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6230.226615955112!2d93.76379666539964!3d25.857610095074563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1738345488297!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-red-600 py-6 text-white text-center">
          <p>&copy; 2025 Lovenest. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
