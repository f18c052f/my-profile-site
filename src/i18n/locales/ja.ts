import type { CareerSection, HobbyApp } from '../types';

import hikari from '../../assets/images/IMGP0803.jpeg';
import sunset from '../../assets/images/IMGP3645_ret.jpg';
import yurameki from '../../assets/images/IMGP5227_ret.jpg';
import ajisai from '../../assets/images/IMGP9249.jpeg';
import sakura from '../../assets/images/DSC02515.jpg';
import amsterdam from '../../assets/images/amsterdam.jpg';
import ramune from '../../assets/images/DSC00678.jpeg';
import redsun from '../../assets/images/DSC00875_ex.jpeg';
import kiritori from '../../assets/images/IMGP8660.jpeg';

export const ja = {
  header: {
    profile: 'プロフィール',
    gallery: 'ギャラリー',
  },
  hero: {
    title: "Y.Ohara's Profile",
    introduction:
      '1995年生まれ、富山県出身、新潟県在住の一児の父です。学生時代は電子回路や光干渉計といったハードウェアをメインに学んでいましたが、気づけばソフトウェアエンジニアとして働いています。',
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
    items: [
      {
        title: '秋光',
        url: hikari,
      },
      {
        title: '過去',
        url: sunset,
      },
      {
        title: '揺らめき',
        url: yurameki,
      },
      {
        title: '紫陽花',
        url: ajisai,
      },
      {
        title: '桜樹',
        url: sakura,
      },
      {
        title: '旅',
        url: amsterdam,
      },
      {
        title: '透明',
        url: ramune,
      },
      {
        title: '夕露',
        url: redsun,
      },
      {
        title: 'キリトリ',
        url: kiritori,
      },
    ],
  },
};
