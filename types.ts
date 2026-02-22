
export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  description: string;
  sector: string;
  owned: number; // Fractional shares
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  time: string;
  category: string;
}

export interface AffinityTask {
  id: string;
  title: string;
  points: number;
  icon: string;
  completed: boolean;
}

export interface ImpactProject {
  id: string;
  name: string;
  description: string;
  category: 'Zionist' | 'Social' | 'Education' | 'Security';
  image: string;
}

export enum AppTab {
  DASHBOARD = 'dashboard',
  MARKET = 'market',
  NEWS = 'news',
  COMMUNITY = 'community'
}
