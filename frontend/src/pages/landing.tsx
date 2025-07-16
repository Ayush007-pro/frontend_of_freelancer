import React from 'react';
import Navbar from '../components/navbar';
// import Footer from '../components/footer';
// import SideNav from '../components/sideNav';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20 text-center">
          <h1 className="text-5xl font-bold">Welcome to My Freelance Portfolio</h1>
          <p className="mt-4 text-xl">Innovative solutions crafted with React, TypeScript, and more.</p>
          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </section>

        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a full-stack developer passionate about building scalable applications using React, Next.js, GoLang, and AI/ML tools like TensorFlow. With expertise in blockchain and mobile development, I deliver innovative tech solutions as a 'Level 10 mage'.
          </p>
        </section>
      </main>

      {/* Sidebar */}
      {/* <SideNav /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;