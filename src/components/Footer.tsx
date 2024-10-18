import React from 'react';
import { MessageSquare, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-green-400 w-8 h-8 mr-2" />
              <span className="text-xl font-bold">comsbi</span>
            </div>
            <p className="text-gray-400">LINEマーケティングを簡単に。ビジネスの成長をサポートします。</p>
          </div>
          {/* ... rest of the footer content remains the same */}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 comsbi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;