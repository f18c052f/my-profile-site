import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Award, Briefcase, Lock } from 'lucide-react';

const Profile: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'demo') {
      setIsAuthenticated(true);
    }
  };

  const education = [
    { year: '2020', description: '○○大学大学院 修士課程修了' },
    { year: '2018', description: '○○大学 工学部 卒業' },
  ];

  const career = [
    {
      year: '2020 - 現在',
      company: '株式会社ABC',
      position: 'シニアエンジニア',
      summary: 'Web アプリケーション開発',
      details: [
        'マイクロサービスアーキテクチャの設計と実装',
        'チームリーダーとして10名のエンジニアをマネジメント',
        'AWS を活用したクラウドインフラの構築と運用',
        'CI/CD パイプラインの整備とデプロイ自動化の実現'
      ]
    },
    {
      year: '2018 - 2020',
      company: '株式会社XYZ',
      position: 'ソフトウェアエンジニア',
      summary: 'モバイルアプリケーション開発',
      details: [
        'React Native を使用したクロスプラットフォームアプリの開発',
        'バックエンド API の設計と実装',
        'ユーザー認証システムの構築',
        'パフォーマンス最適化によるアプリの応答速度を50%改善'
      ]
    }
  ];

  const skills = {
    'Programming Languages': ['TypeScript', 'Python', 'Java'],
    'Frameworks/Libraries': ['React', 'Next.js', 'Django'],
    'Tools': ['Git', 'Docker', 'AWS'],
    'Qualifications': ['応用情報技術者', 'TOEIC 900点'],
  };

  const achievements = {
    patents: [
      '画像処理に関する特許（特許第1234567号）',
      'データ分析手法に関する特許（特許第7654321号）'
    ],
    publications: [
      '機械学習を用いた画像認識の研究（情報処理学会論文誌, 2022年）',
      'クラウドシステムの可用性に関する研究（○○学会誌, 2021年）'
    ],
    awards: [
      '○○学会 優秀論文賞（2022年）',
      '△△ハッカソン 優勝（2021年）'
    ]
  };

  return (
    <section id="profile" className="min-h-screen pt-20 pb-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Profile
        </motion.h2>

        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <BookOpen className="mr-2" /> 学歴
          </h3>
          <div className="space-y-4">
            {education.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-24 flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {item.year}
                </div>
                <div className="flex-grow pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career History */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <Briefcase className="mr-2" /> 職務経歴
          </h3>
          {!isAuthenticated ? (
            <div className="space-y-6">
              {career.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.company}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.summary}</p>
                </div>
              ))}
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <form onSubmit={handleAuth} className="max-w-md mx-auto">
                  <div className="flex items-center space-x-2 mb-4">
                    <Lock className="text-gray-500 dark:text-gray-400" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      詳細を表示するにはパスワードを入力してください
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="パスワードを入力"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                               transition-colors duration-200"
                    >
                      表示
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {career.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.company}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.summary}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <Code className="mr-2" /> スキル
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h4 className="font-medium mb-3 text-gray-900 dark:text-white">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <Award className="mr-2" /> 実績
          </h3>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">特許</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {achievements.patents.map((patent, index) => (
                  <li key={index}>{patent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">論文</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {achievements.publications.map((publication, index) => (
                  <li key={index}>{publication}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">受賞歴</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {achievements.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;