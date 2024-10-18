import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'スタータープラン',
    price: '5,000',
    features: [
      '月間1,000メッセージ',
      '基本的な顧客セグメンテーション',
      'シンプルな自動応答機能',
      '基本的な分析レポート'
    ]
  },
  {
    name: 'プロフェッショナルプラン',
    price: '15,000',
    features: [
      '月間10,000メッセージ',
      '高度な顧客セグメンテーション',
      '複雑なシナリオ設定',
      '詳細な分析レポート',
      'カスタマーサポート'
    ]
  },
  {
    name: 'エンタープライズプラン',
    price: '要相談',
    features: [
      '無制限のメッセージ',
      'AIを活用した顧客分析',
      'カスタムインテグレーション',
      'リアルタイムレポーティング',
      '専任のアカウントマネージャー'
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">¥{plan.price}<span className="text-base font-normal text-gray-600">/月</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">
                選択する
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;