import type { ja } from './ja';
import type { HobbyApp } from '../types';

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
            'M.Eng. in Electronics and Information Engineering, at a national university people can never agree is in Tohoku or Hokuriku',
        },
        {
          year: '2018',
          description:
            'B.Eng. in Electrical and Electronic Engineering, at a national university people can never agree is in Tohoku or Hokuriku',
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
          summary: 'New business division',
        },
        {
          year: '2020 - 2023',
          company: 'Automotive Equipment Manufacturer',
          position: 'Engineer',
          summary: 'Advanced development division',
        },
      ],
    },
    skills: {
      title: 'Skills',
      domainsTitle: 'What I work on',
      domains: [
        {
          name: 'Web systems',
          description:
            'Involved in in-house services from planning through development, maintenance and operation, and in basic design support on contract projects. Experienced in both Scrum and Waterfall.',
        },
        {
          name: 'Android / iOS apps',
          description:
            'Built proof-of-concept smartphone apps with accessibility in mind, and handled maintenance including app store policy compliance.',
        },
        {
          name: 'Unity with external sensors (PoC)',
          description:
            'Proof-of-concept development combining Unity with external sensors, including an in-vehicle AR system, plus load evaluation of embedded systems.',
        },
        {
          name: 'Data analysis',
          description:
            'Sensory evaluation and data analysis using the results of proof-of-concept work, and building collection and visualisation pipelines for IoT data.',
        },
      ],
      technologiesTitle: 'Technologies I reach for',
      qualificationsTitle: 'Certifications',
      qualifications: [
        'TOEIC 845 (2022)',
        'Google Cloud Associate Cloud Engineer (2023)',
        'JDLA Deep Learning for GENERAL (2023)',
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
    lightbox: {
      open: 'View {{title}} larger',
      close: 'Close',
      previous: 'Previous photo',
      next: 'Next photo',
      position: '{{current}} of {{total}}',
    },
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
