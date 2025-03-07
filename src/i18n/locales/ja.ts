export const ja = {
  header: {
    profile: 'プロフィール',
    gallery: 'ギャラリー'
  },
  hero: {
    title: 'あなたの名前',
    introduction: 'Web開発とクラウドアーキテクチャに5年以上の経験を持つソフトウェアエンジニア。ユーザー中心のソリューション開発と技術革新に情熱を注いでいます。'
  },
  profile: {
    title: 'プロフィール',
    education: {
      title: '学歴',
      items: [
        {
          year: '2020',
          description: '○○大学大学院 修士課程修了'
        },
        {
          year: '2018',
          description: '○○大学 工学部 卒業'
        }
      ]
    },
    career: {
      title: '職務経歴',
      auth: {
        message: '詳細を表示するにはパスワードを入力してください',
        placeholder: 'パスワードを入力',
        button: '表示',
        error: 'パスワードが正しくありません。もう一度お試しください。',
        systemError: 'エラーが発生しました。後でもう一度お試しください。',
        blocked: '試行回数が多すぎます。{{seconds}}秒後に再度お試しください。'
      },
      items: [
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
      ]
    },
    skills: {
      title: 'スキル',
      categories: {
        'Programming Languages': 'プログラミング言語',
        'Frameworks/Libraries': 'フレームワーク/ライブラリ',
        'Tools': 'ツール',
        'Qualifications': '資格'
      },
      qualifications: {
        applied_info: '応用情報技術者',
        toeic: 'TOEIC 900点'
      }
    },
    hobbies: {
      title: '趣味',
      items: [
        {
          emoji: '📚',
          title: '読書',
          description: ['技術書', 'SF小説'],
          apps: []
        },
        {
          emoji: '🎸',
          title: 'ギター',
          description: ['アコースティックギター', 'エレキギター'],
          apps: []
        },
        {
          emoji: '🏃',
          title: 'ランニング',
          description: ['マラソン練習', 'トレイルランニング'],
          apps: []
        },
        {
          emoji: '📷',
          title: '写真撮影',
          description: ['ストリート写真', '風景写真'],
          apps: [
            {
              name: 'フォトギャラリーアプリ',
              url: 'https://example.com/photo-gallery'
            }
          ]
        }
      ]
    },
    achievements: {
      title: '実績',
      patents: {
        title: '特許',
        items: [
          {
            title: '画像処理に関する特許',
            number: '特許第1234567号',
            url: 'https://patents.google.com/patent/JP1234567'
          },
          {
            title: 'データ分析手法に関する特許',
            number: '特許第7654321号',
            url: 'https://patents.google.com/patent/JP7654321'
          }
        ]
      },
      publications: {
        title: '論文',
        items: [
          {
            title: '機械学習を用いた画像認識の研究',
            journal: '情報処理学会論文誌, 2022年',
            url: 'https://doi.org/10.1234/journal.2022'
          },
          {
            title: 'クラウドシステムの可用性に関する研究',
            journal: '○○学会誌, 2021年',
            url: 'https://doi.org/10.5678/journal.2021'
          }
        ]
      },
      awards: {
        title: '受賞歴',
        items: [
          '○○学会 優秀論文賞（2022年）',
          '△△ハッカソン 優勝（2021年）'
        ]
      }
    }
  },
  gallery: {
    title: 'ギャラリー',
    items: [
      {
        title: '山の風景',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
      },
      {
        title: '海の夕暮れ',
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
      },
      {
        title: '都市の夜景',
        url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad'
      },
      {
        title: '森の小道',
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05'
      },
      {
        title: '緑の森',
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e'
      },
      {
        title: '夕暮れの空',
        url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8'
      }
    ]
  }
};