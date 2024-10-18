import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare className="text-green-600 w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-gray-800">comsbi</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-green-600">機能</a></li>
            <li><a href="#pricing" className="text-gray-600 hover:text-green-600">料金</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-green-600">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;