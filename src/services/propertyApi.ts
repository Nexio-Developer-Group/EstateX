// Dummy API Response Service for Property Data

export interface Property {
  id: string;
  title: string;
  price: number;
  pricePerSqFt: number;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  propertyType: string;
  transactionType: string;
  furnishing: string;
  facing: string;
  floor: string;
  totalFloors: number;
  builtUpArea: number;
  badge?: 'For Sale' | 'New Launch' | 'Verified' | 'Luxury' | 'Commercial' | 'Investment' | 'Ready to Move';
  images: string[];
  description: string;
  amenities: string[];
  landmarks: string[];
  agent: {
    name: string;
    phone: string;
    type: string;
  };
}

export interface PropertyListResponse {
  properties: Property[];
  total: number;
  page: number;
  pageSize: number;
}

// Import images for properties
import property1 from '@/assets/property-1.png';
import property2 from '@/assets/property-2.png';
import property3 from '@/assets/property-3.png';
import property4 from '@/assets/property-4.png';
import property5 from '@/assets/property-5.png';
import property6 from '@/assets/property-6.png';


const dummyProperties: Property[] = [
  {
    id: 'RE1689350',
    title: '3BHK Luxury Builder Floor in Koramangala',
    price: 24500000,
    pricePerSqFt: 48611,
    location: '3rd Block, Koramangala',
    city: 'Bangalore, Karnataka 560034',
    bedrooms: 3,
    bathrooms: 4,
    area: 504,
    areaUnit: 'sq.ft',
    propertyType: 'Builder Floor',
    transactionType: 'New Property',
    furnishing: 'Semi-Furnished',
    facing: 'North East',
    floor: 'Ground Floor',
    totalFloors: 3,
    builtUpArea: 504,
    badge: 'For Sale',
    images: [property1, property1, property1, property1],
    description: 'Experience luxury living in this brand new semi-furnished builder floor located in the prime area of Koramangala. Designed for modern families, this ground-floor unit features spacious interiors, premium fittings, and excellent ventilation. The property faces North-East ensuring ample natural light throughout the day. With a strategic location close to IT hubs and social infrastructure, it offers the perfect balance of connectivity and tranquility.',
    amenities: ['Covered Parking', 'Power Backup', '24x7 Security', 'Water Supply', 'Garden', 'Fibre Internet', 'Lift', 'CCTV'],
    landmarks: ['Apollo Hospital', 'St. Francis School', 'HDFC Bank ATM', 'Forum Mall', 'SBI Bank'],
    agent: {
      name: 'Vikram Singh',
      phone: '+91 98765 00000',
      type: 'Certified Agent'
    }
  },
  {
    id: 'RE1689351',
    title: 'Luxury 4BHK Villa with Private Garden',
    price: 45000000,
    pricePerSqFt: 15000,
    location: 'Whitefield',
    city: 'Bangalore',
    bedrooms: 4,
    bathrooms: 4,
    area: 3000,
    areaUnit: 'sq.ft',
    propertyType: 'Villa',
    transactionType: 'New Property',
    furnishing: 'Unfurnished',
    facing: 'East',
    floor: 'Ground + 1',
    totalFloors: 2,
    builtUpArea: 3000,
    badge: 'For Sale',
    images: [property1],
    description: 'Stunning 4BHK villa with private garden in the heart of Whitefield.',
    amenities: ['Private Garden', 'Swimming Pool', 'Gym', 'Covered Parking', 'Power Backup'],
    landmarks: ['ITPL', 'Phoenix Mall', 'International Airport'],
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98765 11111',
      type: 'Premium Agent'
    }
  },
  {
    id: 'RE1689352',
    title: 'Premium Agricultural Plot near Lake',
    price: 8500000,
    pricePerSqFt: 0,
    location: 'Near Hesarghatta Lake',
    city: 'Bangalore',
    bedrooms: 0,
    bathrooms: 0,
    area: 0.5,
    areaUnit: 'Acres',
    propertyType: 'Agricultural Land',
    transactionType: 'New Property',
    furnishing: 'None',
    facing: 'Farm Land',
    floor: 'N/A',
    totalFloors: 0,
    builtUpArea: 0,
    badge: 'New Launch',
    images: [property2],
    description: 'Beautiful agricultural plot with lake view and fertile soil.',
    amenities: ['Farm Land', 'Water Source', 'Road Access'],
    landmarks: ['Hesarghatta Lake', 'Bangalore 25km'],
    agent: {
      name: 'Raju Kumar',
      phone: '+91 98765 22222',
      type: 'Land Specialist'
    }
  },
  {
    id: 'RE1689353',
    title: '3BHK Premium Apartment Gated Community',
    price: 12000000,
    pricePerSqFt: 8000,
    location: 'Sarjapur Road, Bellandur',
    city: 'Bangalore',
    bedrooms: 3,
    bathrooms: 3,
    area: 1500,
    areaUnit: 'sq.ft',
    propertyType: 'Apartment',
    transactionType: 'Resale',
    furnishing: 'Fully Furnished',
    facing: 'South',
    floor: '12th Floor',
    totalFloors: 25,
    builtUpArea: 1500,
    badge: 'Verified',
    images: [property3],
    description: 'Premium 3BHK apartment in a gated community with world-class amenities.',
    amenities: ['Swimming Pool', 'Gym', 'Club House', 'Tennis Court', 'Kids Play Area'],
    landmarks: ['Wipro Corporate Office', 'Decathlon', 'More Supermarket'],
    agent: {
      name: 'Amit Patel',
      phone: '+91 98765 33333',
      type: 'Verified Agent'
    }
  },
  {
    id: 'RE1689354',
    title: 'Commercial Corner Plot Main Road',
    price: 35000000,
    pricePerSqFt: 0,
    location: 'Electronic City',
    city: 'Bangalore',
    bedrooms: 0,
    bathrooms: 0,
    area: 4000,
    areaUnit: 'sq.ft',
    propertyType: 'Commercial Plot',
    transactionType: 'New Property',
    furnishing: 'None',
    facing: 'Corner',
    floor: 'N/A',
    totalFloors: 0,
    builtUpArea: 0,
    badge: 'Investment',
    images: [property4],
    description: 'Prime commercial corner plot on main road in Electronic City.',
    amenities: ['Main Road', 'Commercial Zone', 'High Visibility'],
    landmarks: ['Infosys Campus', 'Electronic City Metro'],
    agent: {
      name: 'Suresh Reddy',
      phone: '+91 98765 44444',
      type: 'Commercial Specialist'
    }
  },
  {
    id: 'RE1689355',
    title: '3 BHK Premium Villa',
    price: 12500000,
    pricePerSqFt: 5952,
    location: 'Porvorim',
    city: 'Goa',
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    areaUnit: 'sq.ft',
    propertyType: 'Villa',
    transactionType: 'New Property',
    furnishing: 'Semi-Furnished',
    facing: 'East',
    floor: 'Ground + 1',
    totalFloors: 2,
    builtUpArea: 2100,
    badge: 'Ready to Move',
    images: [property1],
    description: 'Premium 3BHK villa with modern amenities in Porvorim, Goa.',
    amenities: ['Garden', 'Parking', 'Power Backup', 'Security'],
    landmarks: ['Candolim Beach 5km', 'Panjim 8km'],
    agent: {
      name: 'John D\'Souza',
      phone: '+91 98765 55555',
      type: 'Goa Expert'
    }
  },
  {
    id: 'RE1689356',
    title: '2 BHK Sea View Apartment',
    price: 8500000,
    pricePerSqFt: 7391,
    location: 'Vasco Da Gama',
    city: 'Goa',
    bedrooms: 2,
    bathrooms: 2,
    area: 1150,
    areaUnit: 'sq.ft',
    propertyType: 'Apartment',
    transactionType: 'Resale',
    furnishing: 'Furnished',
    facing: 'West',
    floor: '8th Floor',
    totalFloors: 12,
    builtUpArea: 1150,
    badge: 'New Launch',
    images: [property5],
    description: 'Beautiful sea view apartment with stunning sunset views.',
    amenities: ['Sea View', 'Swimming Pool', 'Gym', 'Parking'],
    landmarks: ['Bogmalo Beach 2km', 'Airport 5km'],
    agent: {
      name: 'Maria Fernandes',
      phone: '+91 98765 66666',
      type: 'Beach Property Expert'
    }
  },
  {
    id: 'RE1689357',
    title: 'Residential Plot in Gated Community',
    price: 4500000,
    pricePerSqFt: 0,
    location: 'Mapusa',
    city: 'Goa',
    bedrooms: 0,
    bathrooms: 0,
    area: 250,
    areaUnit: 'sq.m',
    propertyType: 'Plot',
    transactionType: 'New Property',
    furnishing: 'None',
    facing: 'North',
    floor: 'Sanad',
    totalFloors: 0,
    builtUpArea: 0,
    badge: 'Verified',
    images: [property2],
    description: 'RERA approved residential plot in premium gated community.',
    amenities: ['Gated Community', 'Club House', 'Internal Roads'],
    landmarks: ['Mapusa Market 3km', 'Anjuna Beach 10km'],
    agent: {
      name: 'Antonio Gomes',
      phone: '+91 98765 77777',
      type: 'Plot Specialist'
    }
  },
  {
    id: 'RE1689358',
    title: 'Portuguese Style Heritage Villa',
    price: 35000000,
    pricePerSqFt: 7778,
    location: 'Assagao',
    city: 'Goa',
    bedrooms: 4,
    bathrooms: 5,
    area: 4500,
    areaUnit: 'sq.ft',
    propertyType: 'Villa',
    transactionType: 'Resale',
    furnishing: 'Fully Furnished',
    facing: 'South',
    floor: 'Ground + 1',
    totalFloors: 2,
    builtUpArea: 4500,
    badge: 'Luxury',
    images: [property6],
    description: 'Stunning Portuguese heritage villa with modern amenities.',
    amenities: ['Private Pool', 'Garden', 'Staff Quarters', 'Parking'],
    landmarks: ['Vagator Beach 5km', 'Mapusa 8km'],
    agent: {
      name: 'Ricardo Pereira',
      phone: '+91 98765 88888',
      type: 'Luxury Property Expert'
    }
  },
  {
    id: 'RE1689359',
    title: 'Spacious 2 BHK Near Beach',
    price: 6500000,
    pricePerSqFt: 6633,
    location: 'Calangute',
    city: 'Goa',
    bedrooms: 2,
    bathrooms: 2,
    area: 980,
    areaUnit: 'sq.ft',
    propertyType: 'Apartment',
    transactionType: 'Resale',
    furnishing: 'Semi-Furnished',
    facing: 'West',
    floor: '3rd Floor',
    totalFloors: 5,
    builtUpArea: 980,
    badge: undefined,
    images: [property5],
    description: 'Cozy 2BHK apartment walking distance from Calangute beach.',
    amenities: ['Near Beach', 'Parking', 'Security', 'Power Backup'],
    landmarks: ['Calangute Beach 500m', 'Candolim 3km'],
    agent: {
      name: 'Peter Dias',
      phone: '+91 98765 99999',
      type: 'Calangute Specialist'
    }
  },
  {
    id: 'RE1689360',
    title: 'Premium Office Space',
    price: 18000000,
    pricePerSqFt: 15000,
    location: 'Panjim Patto',
    city: 'Goa',
    bedrooms: 0,
    bathrooms: 2,
    area: 1200,
    areaUnit: 'sq.ft',
    propertyType: 'Commercial',
    transactionType: 'New Property',
    furnishing: 'Furnished',
    facing: 'East',
    floor: '5th Floor',
    totalFloors: 8,
    builtUpArea: 1200,
    badge: 'Commercial',
    images: [property4],
    description: 'Premium furnished office space in the heart of Panjim.',
    amenities: ['Central AC', 'Parking', 'Lift', 'Security', 'Conference Room'],
    landmarks: ['Panjim Bus Stand 1km', 'Miramar Beach 3km'],
    agent: {
      name: 'Nelson Cardozo',
      phone: '+91 98765 00001',
      type: 'Commercial Expert'
    }
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API Functions
export const fetchProperties = async (page = 1, pageSize = 6, filters?: Record<string, unknown>): Promise<PropertyListResponse> => {
  await delay(300);
  
  let filtered = [...dummyProperties];
  
  if (filters?.city) {
    filtered = filtered.filter(p => p.city.toLowerCase().includes((filters.city as string).toLowerCase()));
  }
  
  if (filters?.propertyType && (filters.propertyType as string[]).length > 0) {
    filtered = filtered.filter(p => (filters.propertyType as string[]).some(type => 
      p.propertyType.toLowerCase().includes(type.toLowerCase())
    ));
  }
  
  if (filters?.bedrooms && (filters.bedrooms as string[]).length > 0) {
    filtered = filtered.filter(p => {
      const bedroomFilters = filters.bedrooms as string[];
      if (bedroomFilters.includes('4+')) {
        return p.bedrooms >= 4 || bedroomFilters.includes(`${p.bedrooms}`);
      }
      return bedroomFilters.includes(`${p.bedrooms}`);
    });
  }
  
  if (filters?.minBudget) {
    filtered = filtered.filter(p => p.price >= (filters.minBudget as number));
  }
  
  if (filters?.maxBudget) {
    filtered = filtered.filter(p => p.price <= (filters.maxBudget as number));
  }
  
  const start = (page - 1) * pageSize;
  const paginatedProperties = filtered.slice(start, start + pageSize);
  
  return {
    properties: paginatedProperties,
    total: filtered.length,
    page,
    pageSize
  };
};

export const fetchPropertyById = async (id: string): Promise<Property | null> => {
  await delay(200);
  return dummyProperties.find(p => p.id === id) || null;
};

export const fetchFeaturedProperties = async (): Promise<Property[]> => {
  await delay(200);
  return dummyProperties.slice(0, 4);
};

export const fetchRelatedProperties = async (excludeId: string): Promise<Property[]> => {
  await delay(200);
  return dummyProperties.filter(p => p.id !== excludeId).slice(0, 4);
};

// Format price in Indian format
export const formatPrice = (price: number): string => {
  if (price >= 10000000) {
    return `₹ ${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹ ${(price / 100000).toFixed(0)} Lac`;
  }
  return `₹ ${price.toLocaleString('en-IN')}`;
};

export const formatPriceShort = (price: number): string => {
  if (price >= 10000000) {
    const cr = price / 10000000;
    return `₹ ${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹ ${(price / 100000).toFixed(0)} Lac`;
  }
  return `₹ ${price.toLocaleString('en-IN')}`;
};
