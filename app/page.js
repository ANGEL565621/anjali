import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Card />
      <footer className="bg-red-600 py-6 text-white text-center mt-10">
        <p>&copy; 2025 Lovenest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
