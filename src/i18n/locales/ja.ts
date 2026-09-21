import type { CareerSection, HobbyApp } from '../types';

export const ja = {
  a11y: {
    toggleLanguage: '言語を切り替える',
    switchToDark: 'ダークモードに切り替える',
    switchToLight: 'ライトモードに切り替える',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    github: 'GitHub のプロフィールを開く',
    email: 'メールを送る',
  },
  footer: {
    copyright: '© {{year}} Y.Ohara. All rights reserved.',
  },
  header: {
    profile: 'プロフィール',
    gallery: 'ギャラリー',
  },
  hero: {
    title: "Y.Ohara's Profile",
    introduction:
      '1995年生まれ、富山県出身、新潟県在住の一児の父です。学生時代は電子回路や光干渉計といったハードウェアをメインに学んでいましたが、気づけばソフトウェアエンジニアとして働いています。',
    portraitAlt: '撮影者本人のポートレート',
  },
  profile: {
    title: 'プロフィール',
    education: {
      title: '学歴',
      items: [
        {
          year: '2020',
          description: '国立大学大学院 自然科学研究科電子情報工学専攻修了',
        },
        {
          year: '2018',
          description: '国立大学 工学部 電気電子工学科修了',
        },
      ],
    },
    career: {
      title: '職務経歴',
      items: [
        {
          year: '2023 - 現在',
          company: 'SIer',
          position: 'エンジニア',
          summary: '新規事業創出部所属',
          details: {
            intro: [
              'SIerに入社。',
              'Webアプリやスマホアプリを中心に、自社サービスの新規企画・研究開発・製造・保守運用、および受託での基本設計支援・製造など、幅広い案件に参画。',
              'スクラム開発、ウォーターフォール開発のいずれも経験。',
            ],
            sections: [
              {
                heading: '2023',
                points: [
                  '受託案件：スパコン環境での開発支援 (ドキュメント作成、バッチ・プログラム作成、テスト、各種調査) (Linux/Python)',
                  '自社サービスベースの新規事業企画：アクセシビリティを考慮したスマホアプリのPoC作成 (ReactNative/TypeScript/Firebase/Looker)',
                ],
              },
              {
                heading: '2024',
                points: [
                  '自社サービスベースの新規事業企画 (継続)：他企業との共創、エンドユーザーへのデモ・ヒアリング (フィリピンで英語プレゼン実施)',
                  '自社サービスの保守運用：Google Play/Apple Storeの規約対応',
                ],
              },
              {
                heading: '2025',
                points: [
                  '受託案件：基本設計支援 (業務フロー整理、モックによるデモ)',
                  '社内小規模研究会：IoTアプリ構築（AWS IoT Core/Streamlit/ESP32）',
                ],
              },
            ] as CareerSection[],
          },
        },
        {
          year: '2020 - 2023',
          company: '車載機器メーカー',
          position: 'エンジニア',
          summary: 'R&D事業部所属',
          details: {
            intro: [
              '車載機器メーカーに入社。',
              '主に次世代車載製品の要素技術開発を担当し、PoC (概念実証) の開発、成果物を用いた感性評価、データ分析、特許出願等の業務に従事。',
              'ソフトウェア領域においては、車両向けARシステムの構築、組込みシステムの負荷評価等を実施。',
            ],
            sections: [] as CareerSection[],
          },
        },
      ],
    },
    skills: {
      title: 'スキル',
      categories: {
        'Programming Languages': 'プログラミング言語/フレームワーク/ライブラリ',
        // "Frameworks/Libraries": "フレームワーク/ライブラリ",
        Tools: 'ツール',
        Qualifications: '資格',
      },
      qualifications: [
        'TOEIC 845点(2022)',
        'Google Cloud Associate Cloud Engineer(2023)',
        'G検定(2023)',
        'Google Cloud Professional Cloud Architect(2023)',
        'Google Cloud Professional Machine Learning Engineer(2023)',
      ],
    },
    hobbies: {
      title: '趣味',
      items: [
        {
          emoji: '📷',
          title: '写真・動画 撮影',
          description: ['風景', 'ポートレート', 'シネマティック動画'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '⚒️',
          title: 'ものづくり',
          description: ['アプリ開発', '電子工作', '木工工作'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '🍵',
          title: '茶道',
          description: ['裏千家'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '🏕️',
          title: 'キャンプ',
          description: ['グルキャン'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '🖼️',
          title: '美術鑑賞',
          description: ['オランダ', 'レンブラント', '印象派'],
          apps: [] as HobbyApp[],
        },
      ],
    },
    achievements: {
      title: '実績',
      patents: {
        title: '特許',
        items: [
          {
            title: '表示制御装置、ヘッドアップディスプレイ装置、及び表示制御方法',
            number: '特開2023-046339',
            url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2023-046339/11/ja',
          },
          {
            title: '表示制御装置、ヘッドアップディスプレイ装置、及び表示制御方法',
            number: '特開2024-017509',
            url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-017509/11/ja',
          },
          {
            title: '表示制御装置、ヘッドアップディスプレイ装置、及び表示制御方法',
            number: '特開2024-017515',
            url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-017515/11/ja',
          },
        ],
      },
      publications: {
        title: '論文',
        items: [
          {
            title:
              '査読あり論文「Vibration distribution measurement using down sampling phase shifting interferometer」(2020)',
            journal: 'Optical Engineering, First author',
            url: 'https://www.spiedigitallibrary.org/journals/optical-engineering/volume-59/issue-3/034112/Vibration-distribution-measurement-using-downsampling-phase-shifting-interferometer/10.1117/1.OE.59.3.034112.short?SSO=1',
          },
        ],
      },
      awards: {
        title: '登壇',
        items: [
          'ISMTII(International Symposium on Measurement Technology and Intelligent Instruments) - 国際会議 口頭発表(2019)',
        ],
      },
    },
  },
  gallery: {
    title: 'ギャラリー',
    items: {
      hikari: { title: '秋光', alt: '逆光に透ける黄色い紅葉の枝' },
      sunset: { title: '過去', alt: '夕暮れの川辺で寄り添う二人の後ろ姿' },
      yurameki: { title: '揺らめき', alt: '湯気と光の玉に包まれてぼやける人影' },
      ajisai: { title: '紫陽花', alt: '雨上がりの青い紫陽花の群れ' },
      sakura: { title: '桜樹', alt: '苔むした木の根元に散り敷いた桜の花びら' },
      amsterdam: { title: '旅', alt: 'アムステルダム中央駅前の広場を行き交う旅行者' },
      ramune: { title: '透明', alt: '白い小石の上でラムネの瓶を手に持つ' },
      redsun: { title: '夕露', alt: '夕焼けの海に立つ人物のシルエットと縦に伸びる赤い光' },
      kiritori: { title: 'キリトリ', alt: '新緑の並木道でカメラを構える人' },
    },
  },
};
