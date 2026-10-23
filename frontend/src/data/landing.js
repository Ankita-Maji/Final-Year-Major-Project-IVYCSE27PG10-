// All landing-page content lives here. Later, swap these for API responses.

export const NAV_LINKS = [
  { label: 'Platform', href: '#features', id: 'features' },
  { label: 'Impact', href: '#stats', id: 'stats' },
  { label: 'Farmers', href: '#testimonials', id: 'testimonials' },
  { label: 'Contact', href: '#footer', id: 'footer' },
]

export const HERO_STATS = [
  { num: '2.1L+', lbl: 'Farmers onboarded' },
  { num: '94.6%', lbl: 'Crop model accuracy' },
  { num: '₹340Cr', lbl: 'Produce traded' },
]

// Sample recommendations shown in the hero card (dummy data).
export const SAMPLE_RECOMMENDATIONS = [
  { crop: 'Basmati Rice', confidence: 91.7, yield: '4.8t', profit: '₹58k', ph: '6.8pH', weather: '32°C, Clear', weatherNote: 'Ideal sowing window', price: 'Rice ₹2,140/qtl', priceNote: '↑ 4.2% this week' },
  { crop: 'Wheat', confidence: 88.3, yield: '2.1t', profit: '₹41k', ph: '7.1pH', weather: '24°C, Clear', weatherNote: 'Good for rabi sowing', price: 'Wheat ₹2,240/qtl', priceNote: '↑ 3.4% this week' },
  { crop: 'Moong Dal', confidence: 85.9, yield: '0.6t', profit: '₹36k', ph: '6.5pH', weather: '30°C, Humid', weatherNote: 'Low water need', price: 'Moong ₹7,120/qtl', priceNote: '↑ 5.6% this week' },
]

export const FEATURES = [
  { icon: '🌾', tint: 'rgba(29,184,118,.12)', title: 'AI Crop Recommendation', text: 'Input soil type, pH, rainfall and land size — get the crop with the highest expected profit, ranked by confidence.' },
  { icon: '🔬', tint: 'rgba(217,85,63,.12)', title: 'Disease Detection', text: 'Upload a leaf photo and get an instant diagnosis with treatment, dosage and organic alternatives.' },
  { icon: '🌦️', tint: 'rgba(58,175,224,.12)', title: '7-Day Weather Intelligence', text: 'Hyperlocal forecasts with rain-risk heatmaps and irrigation alerts, right down to your field.' },
  { icon: '💧', tint: 'rgba(214,163,43,.12)', title: 'Smart Irrigation', text: 'Live soil-moisture graphs and one-tap motor control, so nothing is watered on guesswork.' },
  { icon: '📊', tint: 'rgba(29,184,118,.12)', title: 'Live Market Prices', text: 'Compare mandi prices across cities in real time and list your produce to buyers directly.' },
  { icon: '🏛️', tint: 'rgba(58,175,224,.12)', title: 'Govt. Scheme Matching', text: "See every subsidy and scheme you're eligible for, with a one-click application tracker." },
]

// value is a number so it can count up; prefix/suffix/decimals handle formatting.
export const STATS = [
  { value: 210482, label: 'Active farmers' },
  { value: 18.4, decimals: 1, suffix: 'L', label: 'Acres monitored' },
  { value: 94.6, decimals: 1, suffix: '%', label: 'Model accuracy' },
  { value: 340, prefix: '₹', suffix: 'Cr', label: 'Produce traded YTD' },
]

export const TESTIMONIALS = [
  { quote: 'The disease detection caught blight on my tomato crop three days before I noticed it myself. Saved almost 40% of the yield.', name: 'Ramesh Chaudhary', role: 'Wheat & Tomato Farmer, Rajasthan' },
  { quote: 'I used to sell to the first trader who showed up. Now I check five mandis in one screen and always get a fairer rate.', name: 'Sunita Patil', role: 'Onion Grower, Maharashtra' },
  { quote: 'The AI told me to switch half my land to moong instead of paddy this season. Water use dropped and profit per acre went up.', name: 'Harpreet Singh', role: 'Farmer, Punjab' },
]

export const FOOTER_COLUMNS = [
  { title: 'Product', links: ['Crop AI', 'Disease Detection', 'Market Prices', 'Weather'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Resources', links: ['Help Center', 'API Docs', 'Govt. Schemes', 'Community'] },
]

export const CHAT_QUICK_REPLIES = ['What should I grow?', 'Check mandi prices', 'Detect a disease']
