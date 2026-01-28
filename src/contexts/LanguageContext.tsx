import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navigation & Common
  'dashboard': { en: 'Dashboard', hi: 'डैशबोर्ड' },
  'login': { en: 'Login', hi: 'लॉगिन' },
  'logout': { en: 'Logout', hi: 'लॉगआउट' },
  'back': { en: 'Back to Dashboard', hi: 'डैशबोर्ड पर वापस जाएं' },
  
  // Login Page
  'signIn': { en: 'Sign in to access your farm dashboard', hi: 'अपने फार्म डैशबोर्ड तक पहुंचने के लिए साइन इन करें' },
  'email': { en: 'Email', hi: 'ईमेल' },
  'password': { en: 'Password', hi: 'पासवर्ड' },
  'signingIn': { en: 'Signing in...', hi: 'साइन इन हो रहा है...' },
  'signInButton': { en: 'Sign In', hi: 'साइन इन करें' },
  'demoAccounts': { en: 'Demo Accounts:', hi: 'डेमो खाते:' },
  'farmer': { en: 'Farmer', hi: 'किसान' },
  'analyst': { en: 'Analyst', hi: 'विश्लेषक' },
  'admin': { en: 'Admin', hi: 'व्यवस्थापक' },
  'invalidCredentials': { en: 'Invalid email or password', hi: 'अमान्य ईमेल या पासवर्ड' },
  
  // Dashboard
  'farmManagement': { en: 'Farm Management', hi: 'फार्म प्रबंधन' },
  'weatherToday': { en: 'Weather Today', hi: 'आज का मौसम' },
  'humidity': { en: 'Humidity', hi: 'आर्द्रता' },
  'rainfall': { en: 'Rainfall', hi: 'वर्षा' },
  'goodForCrops': { en: 'Good for crops', hi: 'फसलों के लिए अच्छा' },
  'farmStatus': { en: 'Farm Status', hi: 'फार्म की स्थिति' },
  'currentConditions': { en: 'Current conditions and recommendations', hi: 'वर्तमान स्थिति और सुझाव' },
  'soilMoisture': { en: 'Soil Moisture', hi: 'मिट्टी की नमी' },
  'cropHealth': { en: 'Crop Health', hi: 'फसल स्वास्थ्य' },
  'waterStress': { en: 'Water Stress', hi: 'जल तनाव' },
  'nextSuggestion': { en: 'Next Suggestion:', hi: 'अगला सुझाव:' },
  'myCrops': { en: 'My Crops', hi: 'मेरी फसलें' },
  'recentActivities': { en: 'Recent Activities', hi: 'हाल की गतिविधियां' },
  'health': { en: 'Health', hi: 'स्वास्थ्य' },
  'planted': { en: 'Planted', hi: 'बोया गया' },
  'harvest': { en: 'Harvest', hi: 'कटाई' },
  
  // Farm Details
  'farmDetails': { en: 'Farm Details', hi: 'फार्म विवरण' },
  'location': { en: 'Location', hi: 'स्थान' },
  'totalArea': { en: 'Total Area', hi: 'कुल क्षेत्र' },
  'acres': { en: 'acres', hi: 'एकड़' },
  'crops': { en: 'Crops', hi: 'फसलें' },
  
  // Market
  'marketPrices': { en: 'Market Prices', hi: 'बाजार मूल्य' },
  'todayRates': { en: "Today's rates (₹/quintal)", hi: 'आज की दरें (₹/क्विंटल)' },
  
  // Notifications
  'notifications': { en: 'Notifications', hi: 'सूचनाएं' },
  
  // Subsystems
  'community': { en: 'Community', hi: 'समुदाय' },
  'land': { en: 'Land', hi: 'भूमि' },
  'energy': { en: 'Energy', hi: 'ऊर्जा' },
  'seed': { en: 'Seed', hi: 'बीज' },
  
  // Community Page
  'collaborativeFarming': { en: 'Collaborative farming and resource sharing', hi: 'सहयोगी खेती और संसाधन साझाकरण' },
  'activeProjects': { en: 'Collective Active Projects', hi: 'सामूहिक सक्रिय परियोजनाएं' },
  'sharedEquipment': { en: 'Shared Equipment', hi: 'साझा उपकरण' },
  'communityMembers': { en: 'Community Members', hi: 'समुदाय के सदस्य' },
  'upcomingEvents': { en: 'Upcoming Events', hi: 'आगामी कार्यक्रम' },
  'requestEquipment': { en: 'Request Equipment', hi: 'उपकरण का अनुरोध करें' },
  'viewAllEvents': { en: 'View All Events', hi: 'सभी कार्यक्रम देखें' },
  'available': { en: 'Available', hi: 'उपलब्ध' },
  'inUse': { en: 'In Use', hi: 'उपयोग में' },
  
  // Land Page
  'landManagement': { en: 'Land management and soil health monitoring', hi: 'भूमि प्रबंधन और मिट्टी स्वास्थ्य निगरानी' },
  'productivityScore': { en: 'Productivity Score', hi: 'उत्पादकता स्कोर' },
  'superiorToRegion': { en: 'Superior to 85% of region', hi: 'क्षेत्र के 85% से बेहतर' },
  'leaseEstimate': { en: 'Lease Estimate', hi: 'पट्टा अनुमान' },
  'perYear': { en: 'Per year, inflation adjusted', hi: 'प्रति वर्ष, मुद्रास्फीति समायोजित' },
  'underCultivation': { en: 'Acres under cultivation', hi: 'खेती के तहत एकड़' },
  'landParcels': { en: 'Land Parcels', hi: 'भूमि खंड' },
  'cropSuitability': { en: 'Crop Suitability Analysis', hi: 'फसल उपयुक्तता विश्लेषण' },
  'fertility': { en: 'Fertility', hi: 'उर्वरता' },
  'high': { en: 'High', hi: 'उच्च' },
  'medium': { en: 'Medium', hi: 'मध्यम' },
  'low': { en: 'Low', hi: 'निम्न' },
  
  // Energy Page
  'renewableEnergy': { en: 'Renewable energy management and monitoring', hi: 'नवीकरणीय ऊर्जा प्रबंधन और निगरानी' },
  'solarPumpControl': { en: 'Solar Pump Control', hi: 'सौर पंप नियंत्रण' },
  'realTimeMonitoring': { en: 'Real-time energy monitoring', hi: 'वास्तविक समय ऊर्जा निगरानी' },
  'battery': { en: 'Battery', hi: 'बैटरी' },
  'output': { en: 'Output', hi: 'आउटपुट' },
  'today': { en: 'Today', hi: 'आज' },
  'savings': { en: 'Savings', hi: 'बचत' },
  'startPumpSchedule': { en: 'Start Pump Schedule', hi: 'पंप शेड्यूल शुरू करें' },
  'energySources': { en: 'Energy Sources', hi: 'ऊर्जा स्रोत' },
  'energyConsumption': { en: 'Energy Consumption', hi: 'ऊर्जा खपत' },
  'active': { en: 'Active', hi: 'सक्रिय' },
  'backup': { en: 'Backup', hi: 'बैकअप' },
  
  // Seed Page
  'climateResilient': { en: 'Climate-resilient seed varieties and seed bank', hi: 'जलवायु-प्रतिरोधी बीज किस्में और बीज बैंक' },
  'seedBank': { en: 'Community Seed Bank', hi: 'सामुदायिक बीज बैंक' },
  'availableInventory': { en: 'Available inventory', hi: 'उपलब्ध सूची' },
  'requestSeeds': { en: 'Request Seeds', hi: 'बीज का अनुरोध करें' },
  'climateResilientVarieties': { en: 'Climate-Resilient Varieties', hi: 'जलवायु-प्रतिरोधी किस्में' },
  'rating': { en: 'rating', hi: 'रेटिंग' },
  'orderNow': { en: 'Order Now', hi: 'अभी ऑर्डर करें' },
  'inStock': { en: 'In Stock', hi: 'स्टॉक में' },
  'limited': { en: 'Limited', hi: 'सीमित' },
  'updated': { en: 'Updated', hi: 'अपडेट किया गया' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('agra_language');
    return (stored as Language) || 'en';
  });

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    localStorage.setItem('agra_language', newLang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
