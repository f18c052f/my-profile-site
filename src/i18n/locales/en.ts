import type { ja } from "./ja";
import type { HobbyApp } from "../types";

import hikari from "../../assets/images/IMGP0803.jpeg";
import sunset from "../../assets/images/IMGP3645_ret.jpg";
import yurameki from "../../assets/images/IMGP5227_ret.jpg";
import ajisai from "../../assets/images/IMGP9249.jpeg";
import sakura from "../../assets/images/DSC02515.jpg";
import amsterdam from "../../assets/images/amsterdam.jpg";
import ramune from "../../assets/images/DSC00678.jpeg";
import redsun from "../../assets/images/DSC00875_ex.jpeg";
import kiritori from "../../assets/images/IMGP8660.jpeg";

export const en = {
  header: {
    profile: "Profile",
    gallery: "Gallery",
  },
  hero: {
    title: "Y.Ohara's Profile",
    introduction:
      "Born in 1995, I am a father of one child, originally from Toyama Prefecture and currently residing in Niigata Prefecture. During my student days, I mainly studied hardware such as electronic circuits and optical interferometers, but I have ended up working as a software engineer.",
  },
  profile: {
    title: "Profile",
    education: {
      title: "Education",
      items: [
        {
          year: "2020",
          description:
            "Completed the Graduated School of Science and Technology, a national university",
        },
        {
          year: "2018",
          description:
            "Graduated from the Department of Electrical and Electronic Engineering, Faculty of Engineering, a national university",
        },
      ],
    },
    career: {
      title: "Career",
      auth: {
        message: "Enter a password to view details.",
        placeholder: "Enter password",
        button: "View",
        error: "Incorrect password. Please try again.",
        systemError: "An error occurred. Please try again later.",
        blocked: "Too many attempts. Please try again in {{seconds}} seconds.",
      },
      items: [
        {
          year: "2023 - Present",
          company: "SIer",
          position: "Engineer",
          summary: "Belonging to the New Business Creation Department",
          details:
            "Joined a systems integrator\n\nEngaged in a wide range of projects, mainly web and smartphone applications, including new planning, R&D, development, maintenance, and operation of in-house services, as well as basic design support and development for contracted projects.\nExperienced in both Scrum and Waterfall development.\n\n# 2023\n - Contract project: Development support in a supercomputer environment (document creation, batch program creation, testing, various investigations) (Linux/Python)\n - New business planning based on in-house services: PoC creation of a smartphone application considering accessibility (ReactNative/TypeScript/Firebase/Looker)\n# 2024\n - New business planning based on in-house services (continued): Collaboration with other companies, demonstrations and user interviews with end users (presentation in English in the Philippines)\n - Maintenance and operation of in-house services: Compliance with Google Play/Apple Store terms\n# 2025\n - Contract project: Basic design support (business flow organization, demonstration using mocks)\n - Internal small-scale study group: IoT application development (AWS IoT Core/Streamlit/ESP32)",
        },
        {
          year: "2020 - 2023",
          company: "Automotive Equipment Manufacturer",
          position: "Engineer",
          summary: "Belonging to the R&D Division",
          details:
            "Joined an automotive equipment manufacturer\n\nMainly in charge of elemental technology development for next-generation in-vehicle products, engaged in PoC (Proof of Concept) development, sensory evaluation using the results, data analysis, and patent application.\n\nIn the software field, performed tasks such as building an in-vehicle AR system and evaluating the load of embedded systems.",
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: {
        "Programming Languages": "Programming Languages/Frameworks/Libraries",
        // "Frameworks/Libraries": "Frameworks/Libraries",
        Tools: "Tools",
        Qualifications: "Qualifications",
      },
      qualifications: [
        "TOEIC 845 (2022)",
        "Google Cloud Associate Cloud Engineer (2023)",
        "G Certification (2023)",
        "Google Cloud Professional Cloud Architect (2023)",
        "Google Cloud Professional Machine Learning Engineer (2023)",
      ],
    },
    hobbies: {
      title: "Hobbies",
      items: [
        {
          emoji: "📷",
          title: "Photography/Videography",
          description: ["Landscapes", "Portraits", "Cinematic Videos"],
          apps: [] as HobbyApp[],
        },
        {
          emoji: "⚒️",
          title: "Making Things",
          description: ["App Development", "Electronics", "Woodworking"],
          apps: [] as HobbyApp[],
        },
        {
          emoji: "🍵",
          title: "Tea Ceremony",
          description: ["Urasenke"],
          apps: [] as HobbyApp[],
        },
        {
          emoji: "🏕️",
          title: "Camping",
          description: ["Group Camping"],
          apps: [] as HobbyApp[],
        },
        {
          emoji: "🖼️",
          title: "Art Appreciation",
          description: ["Netherlands", "Rembrandt", "Impressionism"],
          apps: [] as HobbyApp[],
        },
      ],
    },
    achievements: {
      title: "Achievements",
      patents: {
        title: "Patents",
        items: [
          {
            title:
              "DISPLAY CONTROL DEVICE, HEAD-UP DISPLAY DEVICE AND DISPLAY CONTROL METHOD",
            number: "Publication number2023-046339",
            url: "https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2023-046339/11/ja",
          },
          {
            title:
              "DISPLAY CONTROL DEVICE, HEAD-UP DISPLAY DEVICE AND DISPLAY CONTROL METHOD",
            number: "Publication number2024-017509",
            url: "https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-017509/11/ja",
          },
          {
            title:
              "DISPLAY CONTROL DEVICE, HEAD-UP DISPLAY DEVICE AND DISPLAY CONTROL METHOD",
            number: "Publication number2024-017515",
            url: "https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2024-017515/11/ja",
          },
        ],
      },
      publications: {
        title: "Publications",
        items: [
          {
            title:
              'Refereed Paper "Vibration distribution measurement using down sampling phase shifting interferometer" (2020)',
            journal: "Optical Engineering, First author",
            url: "https://www.spiedigitallibrary.org/journals/optical-engineering/volume-59/issue-3/034112/Vibration-distribution-measurement-using-downsampling-phase-shifting-interferometer/10.1117/1.OE.59.3.034112.short?SSO=1",
          },
        ],
      },
      awards: {
        title: "Presentations",
        items: [
          "ISMTII (International Symposium on Measurement Technology and Intelligent Instruments) - Oral presentation at an international conference (2019)",
        ],
      },
    },
  },
  gallery: {
    title: "Gallery",
    items: [
      {
        title: "Autumn Light",
        url: hikari,
      },
      {
        title: "Past",
        url: sunset,
      },
      {
        title: "Flicker",
        url: yurameki,
      },
      {
        title: "Hydrangea",
        url: ajisai,
      },
      {
        title: "Cherry Tree",
        url: sakura,
      },
      {
        title: "Travel",
        url: amsterdam,
      },
      {
        title: "Transparency",
        url: ramune,
      },
      {
        title: "Evening Dew",
        url: redsun,
      },
      {
        title: "Cropping",
        url: kiritori,
      },
    ],
  },
} satisfies typeof ja;
