export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  rainfall: number;
  forecast: { day: string; temp: number; icon: string }[];
}

export interface FarmState {
  soilMoisture: number;
  cropHealth: number; // 0-100
  waterStress: number; // 0-100
  lastAction: string;
  nextSuggestion: string;
  reason: string;
}

export interface MarketPrice {
  crop: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export interface Alert {
  id: string;
  type: 'danger' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
}

export const MOCK_WEATHER: WeatherData = {
  temp: 32,
  condition: 'Partly Cloudy',
  humidity: 45,
  rainfall: 12,
  forecast: [
    { day: 'Mon', temp: 31, icon: 'cloud' },
    { day: 'Tue', temp: 33, icon: 'sun' },
    { day: 'Wed', temp: 34, icon: 'sun' },
    { day: 'Thu', temp: 30, icon: 'cloud-rain' },
    { day: 'Fri', temp: 29, icon: 'cloud-rain' },
  ]
};

export const MOCK_FARM: FarmState = {
  soilMoisture: 35,
  cropHealth: 82,
  waterStress: 15,
  lastAction: 'Irrigated 2 days ago',
  nextSuggestion: 'Apply Pest Control in North Block',
  reason: 'Satellite imagery detected early signs of aphid infestation in neighboring plots.'
};

export const MOCK_MARKET: MarketPrice[] = [
  { crop: 'Wheat', price: 2150, trend: 'up', change: 2.5 },
  { crop: 'Rice', price: 3400, trend: 'stable', change: 0.2 },
  { crop: 'Cotton', price: 6200, trend: 'down', change: -1.8 },
  { crop: 'Soybean', price: 4800, trend: 'up', change: 1.2 },
];

export const MOCK_ALERTS: Alert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Heatwave Alert',
    message: 'Temperatures expected to cross 40°C in the next 3 days. Increase irrigation frequency.',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    type: 'info',
    title: 'Community Auction',
    message: 'Collective tractor hiring starts tomorrow at Village Center.',
    timestamp: '5 hours ago'
  }
];

export const COMMUNITY_DATA = {
  activeProjects: [
    { id: '1', name: 'Canal Repair', progress: 65, goal: '100m' },
    { id: '2', name: 'Seed Bank Expansion', progress: 40, goal: '500kg' },
  ],
  sharedEquipment: [
    { id: '1', type: 'Tractor', status: 'In Use', user: 'Farmer Ram' },
    { id: '2', type: 'Drone', status: 'Available' },
  ]
};

export interface Farm {
  id: string;
  name: string;
  location: string;
  area: number; // in acres
  crops: string[];
  owner: string;
}

export interface CropData {
  id: string;
  name: string;
  plantedDate: string;
  expectedHarvest: string;
  health: number;
  area: number;
  stage: string;
}

export const MOCK_FARMS: Farm[] = [
  {
    id: 'farm-001',
    name: 'Green Valley Farm',
    location: 'Punjab, India',
    area: 25,
    crops: ['Wheat', 'Rice', 'Cotton'],
    owner: 'Rajesh Kumar'
  },
  {
    id: 'farm-002',
    name: 'Sunrise Fields',
    location: 'Haryana, India',
    area: 40,
    crops: ['Soybean', 'Mustard'],
    owner: 'Amit Singh'
  }
];

export const MOCK_CROPS: CropData[] = [
  {
    id: 'crop-001',
    name: 'Wheat',
    plantedDate: '2025-11-15',
    expectedHarvest: '2026-04-10',
    health: 85,
    area: 10,
    stage: 'Vegetative Growth'
  },
  {
    id: 'crop-002',
    name: 'Rice',
    plantedDate: '2025-06-20',
    expectedHarvest: '2026-10-15',
    health: 78,
    area: 8,
    stage: 'Tillering'
  },
  {
    id: 'crop-003',
    name: 'Cotton',
    plantedDate: '2025-05-10',
    expectedHarvest: '2026-11-20',
    health: 92,
    area: 7,
    stage: 'Flowering'
  }
];

export interface Activity {
  id: string;
  type: 'irrigation' | 'fertilizer' | 'pesticide' | 'harvest' | 'planting';
  description: string;
  date: string;
  cropId?: string;
}

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: 'act-001',
    type: 'irrigation',
    description: 'Irrigated North Block - 2 hours',
    date: '2026-01-26',
    cropId: 'crop-001'
  },
  {
    id: 'act-002',
    type: 'fertilizer',
    description: 'Applied NPK fertilizer - 50kg',
    date: '2026-01-24',
    cropId: 'crop-001'
  },
  {
    id: 'act-003',
    type: 'pesticide',
    description: 'Pest control spray for aphids',
    date: '2026-01-22',
    cropId: 'crop-003'
  }
];

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  timestamp: string;
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-001',
    title: 'Irrigation Reminder',
    message: 'Time to irrigate the wheat field in North Block',
    type: 'info',
    read: false,
    timestamp: '2026-01-28T08:00:00'
  },
  {
    id: 'notif-002',
    title: 'Weather Alert',
    message: 'Heavy rainfall expected in next 48 hours',
    type: 'warning',
    read: false,
    timestamp: '2026-01-28T06:30:00'
  },
  {
    id: 'notif-003',
    title: 'Market Update',
    message: 'Wheat prices increased by 2.5%',
    type: 'success',
    read: true,
    timestamp: '2026-01-27T14:20:00'
  }
];

// Decision Timeline
export interface Decision {
  id: string;
  date: string;
  action: string;
  status: 'completed' | 'pending' | 'delayed';
  outcome?: string;
  reason?: string;
}

export const MOCK_DECISIONS: Decision[] = [
  { id: '1', date: '2026-01-22', action: 'WAIT', status: 'completed', outcome: 'Rain came as expected', reason: 'Weather forecast' },
  { id: '2', date: '2026-01-23', action: 'IRRIGATE', status: 'completed', outcome: 'Soil moisture improved', reason: 'Low moisture detected' },
  { id: '3', date: '2026-01-24', action: 'SPRAY DELAY', status: 'delayed', outcome: 'Wind too strong', reason: 'Weather conditions' },
  { id: '4', date: '2026-01-25', action: 'FERTILIZE', status: 'completed', outcome: 'Applied successfully', reason: 'Growth stage optimal' },
  { id: '5', date: '2026-01-26', action: 'MONITOR', status: 'completed', outcome: 'No action needed', reason: 'All parameters normal' },
  { id: '6', date: '2026-01-27', action: 'PEST CONTROL', status: 'completed', outcome: 'Early intervention successful', reason: 'Satellite detection' },
  { id: '7', date: '2026-01-28', action: 'IRRIGATE', status: 'pending', reason: 'Soil moisture dropping' }
];

// Farm Health Status
export type HealthStatus = 'Good' | 'Watch' | 'Risk';
export type WaterStatus = 'Adequate' | 'Stress';
export type ClimateRisk = 'Low' | 'Medium' | 'High';
export type MarketReadiness = 'Weak' | 'Neutral' | 'Strong';

export interface FarmHealthSnapshot {
  cropHealth: HealthStatus;
  waterStatus: WaterStatus;
  climateRisk: ClimateRisk;
  marketReadiness: MarketReadiness;
}

export const MOCK_HEALTH_SNAPSHOT: FarmHealthSnapshot = {
  cropHealth: 'Good',
  waterStatus: 'Adequate',
  climateRisk: 'Medium',
  marketReadiness: 'Strong'
};

// Community Signals
export interface CommunitySignal {
  id: string;
  message: string;
  type: 'trend' | 'alert' | 'insight';
  timestamp: string;
}

export const MOCK_COMMUNITY_SIGNALS: CommunitySignal[] = [
  { id: '1', message: '68% nearby farms delayed sowing this week', type: 'trend', timestamp: '2026-01-28T10:00:00' },
  { id: '2', message: 'Pest alert reported 3–5 km away', type: 'alert', timestamp: '2026-01-28T08:30:00' },
  { id: '3', message: 'Water usage unusually high in your block', type: 'insight', timestamp: '2026-01-27T16:00:00' }
];

// Recent Alerts
export interface SystemAlert {
  id: string;
  what: string;
  when: string;
  suggestedAction: string;
  severity: 'high' | 'medium' | 'low';
}

export const MOCK_SYSTEM_ALERTS: SystemAlert[] = [
  {
    id: '1',
    what: 'Heatwave expected',
    when: 'In 48 hours',
    suggestedAction: 'Increase irrigation frequency, apply mulch',
    severity: 'high'
  },
  {
    id: '2',
    what: 'Heavy rainfall warning',
    when: 'Tomorrow evening',
    suggestedAction: 'Delay fertilizer application, check drainage',
    severity: 'medium'
  },
  {
    id: '3',
    what: 'Pest risk detected nearby',
    when: 'Active now',
    suggestedAction: 'Monitor crops closely, prepare pest control',
    severity: 'medium'
  }
];

// System Status
export interface SystemStatus {
  dataFreshness: string;
  confidenceLevel: 'High' | 'Medium' | 'Low';
  sources: string[];
  lastUpdated: string;
}

export const MOCK_SYSTEM_STATUS: SystemStatus = {
  dataFreshness: 'Updated 2 hrs ago',
  confidenceLevel: 'High',
  sources: ['Weather', 'Soil Sensors', 'Satellite', 'Community'],
  lastUpdated: '2026-01-28T10:00:00'
};

// Knowledge Nuggets
export interface KnowledgeNugget {
  id: string;
  title: string;
  explanation: string[];
  audioLength?: string;
}

export const MOCK_KNOWLEDGE_NUGGETS: KnowledgeNugget[] = [
  {
    id: '1',
    title: 'Why AGRA suggested irrigation today',
    explanation: [
      'Soil moisture dropped below optimal level',
      'No rain expected in next 3 days',
      'Crop is in critical growth stage'
    ],
    audioLength: '25 sec'
  },
  {
    id: '2',
    title: 'Why pest control was recommended',
    explanation: [
      'Satellite detected early signs in neighboring plots',
      'Weather conditions favor pest spread',
      'Early action prevents major damage'
    ],
    audioLength: '30 sec'
  }
];
