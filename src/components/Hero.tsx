import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">LINEマーケティングを簡単に。comsbiで。</h1>
        <p className="text-xl mb-8">顧客とのコミュニケーションを強化し、ビジネスを成長させましょう。</p>
        <Link to="/signup" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition duration-300">
          無料で始める
        </Link>
      </div>
    </section>
  );
};

export default Hero;