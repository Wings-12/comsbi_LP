import React from 'react';
import { MessageCircle, Users, BarChart2, Zap } from 'lucide-react';

const features = [
  {
    icon: <MessageCircle className="w-12 h-12 text-green-600" />,
    title: '双方向コミュニケーション',
    description: 'LINEを通じて顧客と直接対話。リアルタイムでニーズに応えます。'
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: '顧客セグメンテーション',
    description: '顧客を属性や行動に基づいてグループ化し、的確なアプローチを実現。'
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-green-600" />,
    title: '詳細な分析',
    description: 'キャンペーンの効果を数値で把握。データに基づく戦略立案が可能に。'
  },
  {
    icon: <Zap className="w-12 h-12 text-green-600" />,
    title: '自動化機能',
    description: 'メッセージの自動送信やシナリオ設定で、効率的な運用を実現。'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;