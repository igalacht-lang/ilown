
import { Stock, NewsItem, AffinityTask, ImpactProject } from './types';

export const ISRAELI_BLUE = '#0038B8';

export const MOCK_STOCKS: Stock[] = [
  {
    symbol: 'WIX',
    name: 'Wix.com Ltd.',
    price: 184.20,
    change: 2.4,
    description: 'Cloud-based development platform that allows users to create professional HTML5 websites.',
    sector: 'Technology',
    owned: 1.5 // $276.30
  },
  {
    symbol: 'ESLT',
    name: 'Elbit Systems Ltd.',
    price: 235.40,
    change: 1.5,
    description: 'A global high-technology company engaged in a wide range of defense, homeland security and commercial programs throughout the world.',
    sector: 'Defense & Aerospace',
    owned: 2.0 // $470.80
  },
  {
    symbol: 'CHKP',
    name: 'Check Point Software',
    price: 162.80,
    change: 0.8,
    description: 'A leading provider of cyber security solutions to governments and corporate enterprises globally.',
    sector: 'Cybersecurity',
    owned: 1.25 // $203.50
  },
  {
    symbol: 'AGRO',
    name: 'IL-Agro Innovation ETF',
    price: 112.40,
    change: 3.1,
    description: 'A diversified fund providing exposure to leading Israeli agricultural technology companies, focusing on precision farming, water management, and sustainable food systems.',
    sector: 'Agrotech',
    owned: 2.623665 // $294.90
  }
];

// Calculation verification:
// WIX: 1.5 * 184.20 = 276.30
// ESLT: 2.0 * 235.40 = 470.80
// CHKP: 1.25 * 162.80 = 203.50
// AGRO: 2.623665 * 112.4 = 294.90
// Total: 276.30 + 470.80 + 203.50 + 294.90 = 1,245.50

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Israeli High-Tech: Capital Raising Jumps 20% in Last Quarter',
    summary: 'Despite regional tensions, foreign investors continue to show confidence in Israeli technology and resilience.',
    source: 'TheMarker',
    time: '2 hours ago',
    category: 'Economy'
  },
  {
    id: '2',
    title: 'Check Point Launches New AI Platform for Cloud Security',
    summary: 'The company announced a breakthrough in detecting AI-based threats in real-time, setting a new industry standard.',
    source: 'Globes',
    time: '4 hours ago',
    category: 'Tech'
  }
];

export const AFFINITY_TASKS: AffinityTask[] = [
  { id: '1', title: 'Complete "Israeli Innovation" Course', points: 150, icon: 'book', completed: true },
  { id: '2', title: 'Visit Innovation Center in Tel Aviv', points: 300, icon: 'map-pin', completed: false },
  { id: '3', title: 'Share Article on Israeli Economy', points: 50, icon: 'share', completed: false },
  { id: '4', title: 'Attend Investor Webinar', points: 100, icon: 'video', completed: false }
];

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    id: 'p1',
    name: 'Negev Tech Hub',
    description: 'Building the next generation of Israeli high-tech in the heart of the Negev.',
    category: 'Zionist',
    image: 'https://picsum.photos/seed/negev/400/200'
  },
  {
    id: 'p2',
    name: 'Startup Mentors',
    description: 'Mentoring programs for young entrepreneurs from the periphery.',
    category: 'Education',
    image: 'https://picsum.photos/seed/mentor/400/200'
  },
  {
    id: 'p3',
    name: 'Security Tech Fund',
    description: 'Supporting civilian defense technologies for border communities.',
    category: 'Security',
    image: 'https://picsum.photos/seed/defense/400/200'
  }
];
