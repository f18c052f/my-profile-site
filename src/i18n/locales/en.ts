import type { ja } from './ja';
import type { CareerSection, HobbyApp } from '../types';

export const en = {
  a11y: {
    toggleLanguage: 'Switch language',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    github: 'Open the GitHub profile',
    email: 'Send an email',
  },
  footer: {
    copyright: '© {{year}} Y.Ohara. All rights reserved.',
  },
  header: {
    profile: 'Profile',
    gallery: 'Gallery',
  },
  hero: {
    title: "Y.Ohara's Profile",
    introduction:
      'Born in 1995, I am a father of one child, originally from Toyama Prefecture and currently residing in Niigata Prefecture. During my student days, I mainly studied hardware such as electronic circuits and optical interferometers, but I have ended up working as a software engineer.',
    portraitAlt: 'Portrait of the author',
  },
  profile: {
    title: 'Profile',
    education: {
      title: 'Education',
      items: [
        {
          year: '2020',
          description:
            'Completed the Graduated School of Science and Technology, a national university',
        },
        {
          year: '2018',
          description:
            'Graduated from the Department of Electrical and Electronic Engineering, Faculty of Engineering, a national university',
        },
      ],
    },
    career: {
      title: 'Career',
      items: [
        {
          year: '2023 - Present',
          company: 'SIer',
          position: 'Engineer',
          summary: 'Belonging to the New Business Creation Department',
          details: {
            intro: [
              'Joined a systems integrator',
              'Engaged in a wide range of projects, mainly web and smartphone applications, including new planning, R&D, development, maintenance, and operation of in-house services, as well as basic design support and development for contracted projects.',
              'Experienced in both Scrum and Waterfall development.',
            ],
            sections: [
              {
                heading: '2023',
                points: [
                  'Contract project: Development support in a supercomputer environment (document creation, batch program creation, testing, various investigations) (Linux/Python)',
                  'New business planning based on in-house services: PoC creation of a smartphone application considering accessibility (ReactNative/TypeScript/Firebase/Looker)',
                ],
              },
              {
                heading: '2024',
                points: [
                  'New business planning based on in-house services (continued): Collaboration with other companies, demonstrations and user interviews with end users (presentation in English in the Philippines)',
                  'Maintenance and operation of in-house services: Compliance with Google Play/Apple Store terms',
                ],
              },
              {
                heading: '2025',
                points: [
                  'Contract project: Basic design support (business flow organization, demonstration using mocks)',
                  'Internal small-scale study group: IoT application development (AWS IoT Core/Streamlit/ESP32)',
                ],
              },
            ] as CareerSection[],
          },
        },
        {
          year: '2020 - 2023',
          company: 'Automotive Equipment Manufacturer',
          position: 'Engineer',
          summary: 'Belonging to the R&D Division',
          details: {
            intro: [
              'Joined an automotive equipment manufacturer',
              'Mainly in charge of elemental technology development for next-generation in-vehicle products, engaged in PoC (Proof of Concept) development, sensory evaluation using the results, data analysis, and patent application.',
              'In the software field, performed tasks such as building an in-vehicle AR system and evaluating the load of embedded systems.',
            ],
            sections: [] as CareerSection[],
          },
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: {
        'Programming Languages': 'Programming Languages/Frameworks/Libraries',
        // "Frameworks/Libraries": "Frameworks/Libraries",
        Tools: 'Tools',
        Qualifications: 'Qualifications',
      },
      qualifications: [
        'TOEIC 845 (2022)',
        'Google Cloud Associate Cloud Engineer (2023)',
        'G Certification (2023)',
        'Google Cloud Professional Cloud Architect (2023)',
        'Google Cloud Professional Machine Learning Engineer (2023)',
      ],
    },
    hobbies: {
      title: 'Hobbies',
      items: [
        {
          emoji: '📷',
          title: 'Photography/Videography',
          description: ['Landscapes', 'Portraits', 'Cinematic Videos'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '⚒️',
          title: 'Making Things',
          description: ['App Development', 'Electronics', 'Woodworking'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '🍵',
          title: 'Tea Ceremony',
          description: ['Urasenke'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '🏕️',
          title: 'Camping',
          description: ['Group Camping'],
          apps: [] as HobbyApp[],
        },
        {
          emoji: '🖼️',
          title: 'Art Appreciation',
          description: ['Netherlands', 'Rembrandt', 'Impressionism'],
          apps: [] as HobbyApp[],
        },
      ],
    },
    achievements: {
      title: 'Achievements',
      patents: {
        title: 'Patents',
        items: [
          {
            title: 'DISPLAY CONTROL DEVICE, HEAD-UP DISPLAY DEVICE AND DISPLAY CONTROL METHOD',
            number: 'Publication number2023-046339',
            url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2023-046339/11/ja',
          },
          {
            title: 'DISPLAY CONTROL DEVICE, HEAD-UP DISPLAY DEVICE AND DISPLAY CONTROL METHOD',
            number: 'Publication number2024-017509',
            url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-017509/11/ja',
          },
          {
            title: 'DISPLAY CONTROL DEVICE, HEAD-UP DISPLAY DEVICE AND DISPLAY CONTROL METHOD',
            number: 'Publication number2024-017515',
            url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-017515/11/ja',
          },
        ],
      },
      publications: {
        title: 'Publications',
        items: [
          {
            title:
              'Refereed Paper "Vibration distribution measurement using down sampling phase shifting interferometer" (2020)',
            journal: 'Optical Engineering, First author',
            url: 'https://www.spiedigitallibrary.org/journals/optical-engineering/volume-59/issue-3/034112/Vibration-distribution-measurement-using-downsampling-phase-shifting-interferometer/10.1117/1.OE.59.3.034112.short?SSO=1',
          },
        ],
      },
      awards: {
        title: 'Presentations',
        items: [
          'ISMTII (International Symposium on Measurement Technology and Intelligent Instruments) - Oral presentation at an international conference (2019)',
        ],
      },
    },
  },
  gallery: {
    title: 'Gallery',
    items: {
      hikari: { title: 'Autumn Light', alt: 'Yellow maple leaves glowing against the backlight' },
      sunset: { title: 'Past', alt: 'Two people holding each other by a river at dusk' },
      yurameki: { title: 'Flicker', alt: 'A figure blurred behind rising steam and bokeh' },
      ajisai: { title: 'Hydrangea', alt: 'A cluster of blue hydrangeas after the rain' },
      sakura: { title: 'Cherry Tree', alt: 'Cherry petals scattered over mossy tree roots' },
      amsterdam: {
        title: 'Travel',
        alt: 'Travellers crossing the square in front of Amsterdam Centraal',
      },
      ramune: { title: 'Transparency', alt: 'A hand holding a ramune bottle above white pebbles' },
      redsun: {
        title: 'Evening Dew',
        alt: 'A silhouette against the sea with a red column of sunset light',
      },
      kiritori: {
        title: 'Cropping',
        alt: 'A person raising a camera on a tree-lined path in fresh greenery',
      },
    },
  },
} satisfies typeof ja;
