export type AlertSeverity = 'critical' | 'severe' | 'moderate' | 'informational';
export type SeverityLevel = 'critical' | 'warning' | 'caution' | 'info'; // Backward compatibility mapping

export type AlertCategory = 
  | 'flood' 
  | 'cyclone' 
  | 'severe_rainfall' 
  | 'storm' 
  | 'landslide' 
  | 'heatwave' 
  | 'other';

export type HazardType = 
  | 'flash_flood' 
  | 'landslide' 
  | 'cloudburst' 
  | 'cyclone' 
  | 'heatwave' 
  | 'smog_air' 
  | 'heavy_rainfall' 
  | 'coastal_swell';

export type LanguageCode = 'en' | 'hi' | 'ta' | 'es' | 'fr';

export type VerificationStatus = 'verified' | 'pending' | 'unverified';
export type PublicationStatus = 'published' | 'draft' | 'archived';

export interface LocationData {
  id: string;
  name: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  terrainType: 'hilly' | 'coastal' | 'plains' | 'desert';
  weatherZone: string;
}

export interface DailyForecast {
  date: string;
  weatherCode: number;
  weatherCondition: string;
  tempMax: number;
  tempMin: number;
  precipitationSum: number;
  uvIndexMax: number;
}

export interface WeatherData {
  locationId: string;
  temperature: number; // Celsius
  feelsLike: number;
  humidity: number; // percentage
  rainfallMm: number; // last 24h or current precipitation
  windSpeedKmh: number;
  windDirection: string;
  aqi: number;
  aqiCategory: 'Good' | 'Moderate' | 'Unhealthy for Sensitive Groups' | 'Unhealthy' | 'Very Unhealthy' | 'Hazardous';
  uvIndex: number;
  weatherCondition: string;
  weatherCode?: number;
  weatherIcon: string;
  lastUpdated: string;
  isDemoData: boolean;
  isLiveApi?: boolean;
  apiSource?: string;
  forecast?: DailyForecast[];
}

export interface EmergencyAlert {
  id: string;
  title: string;
  titleTranslations: Record<LanguageCode, string>;
  category: AlertCategory;
  hazardType: HazardType;
  severity: AlertSeverity;
  locationName: string;
  state: string;
  affectedRadiusKm: number;
  issuingAuthority: string;
  sourceReference: string;
  issuedAt: string;
  updatedAt: string;
  expiryTimestamp: string;
  validUntil: string; // for backward compatibility
  summary: string;
  summaryTranslations: Record<LanguageCode, string>;
  officialInstructions: string[];
  instructionsTranslations: Record<LanguageCode, string[]>;
  emergencyHelpline: string;
  verificationStatus: VerificationStatus;
  publicationStatus: PublicationStatus;
  originalLanguage: LanguageCode;
  isSimulatedDemo: boolean;
  isDemoData: true; // for backward compatibility
  lat: number;
  lng: number;
}

export interface EmergencyShelter {
  id: string;
  name: string;
  locationName: string;
  state: string;
  address: string;
  lat: number;
  lng: number;
  capacityTotal: number;
  capacityCurrent: number;
  status: 'open' | 'approaching_full' | 'full' | 'standby';
  phone: string;
  amenities: string[];
  distanceKm?: number;
  isVerified: boolean;
  isDemoData: true;
}

export interface CrowdHazardReport {
  id: string;
  hazardType: HazardType;
  title: string;
  locationName: string;
  lat: number;
  lng: number;
  reportedAt: string;
  description: string;
  severity: AlertSeverity | SeverityLevel;
  status: 'pending' | 'verified' | 'rejected';
  upvotes: number;
  reportedByRole: 'tourist' | 'local' | 'official';
  isDemoData: true;
}

export interface TouristActivityAdvise {
  activity: 'Beach Visit' | 'Mountain Trekking' | 'Sightseeing' | 'Road Travel' | 'River Rafting';
  suitability: 'favorable' | 'caution_advised' | 'unsafe';
  reason: string;
  precaution: string;
}

export interface DataFeedSource {
  id: string;
  name: string;
  provider: string;
  type: 'Meteorological' | 'Disaster Management' | 'Air Quality' | 'Crowdsourced';
  status: 'Connected (Demo Data)' | 'Simulation Active' | 'Offline Prototype' | 'Live Open-Meteo API';
  lastRefreshed: string;
  officialUrl: string;
}
