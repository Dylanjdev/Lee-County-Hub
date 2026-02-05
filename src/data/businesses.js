/**
 * Lee County Local Business Directory
 * A curated collection of local businesses serving our community
 */

// ========================================
// FEATURED BUSINESSES
// ========================================

export const businesses = [
  // Featured - Home Services
  {
    id: 'mcguires',
    name: "McGuire's Lawn & Landscaping",
    short: 'Professional lawn care & landscaping services',
    category: 'Home Services',
    url: 'https://mcguireslawnandlandscaping.com/',
    icon: '🌿',
    featured: true
  },
  
  // Featured - Food & Dining
  {
    id: 'bbs-bakery',
    name: "BB's Bakery & Cafe",
    short: 'Fresh baked goods & cafe',
    phone: '276-537-0189',
    address: '103 Main St, Pennington Gap, VA 24277',
    category: 'Food & Dining',
    url: 'https://bbs-bakery.com',
    icon: '🥐',
    featured: true
  },
  
  // Featured - Creative Services
  {
    id: 'painting-outside-the-lines',
    name: 'Painting Outside the Lines Studio',
    short: 'Art center & creative studio',
    phone: '276-690-8848',
    address: '140 Main St, Pennington Gap, VA 24277',
    category: 'Creative Services',
    url: 'https://paintingoutsidethelinesstudios.com/',
    icon: '🎨',
    featured: true
  },

  // ========================================
  // KIDS ACTIVITIES
  // ========================================
  
  {
    id: 'bluebird-studio',
    name: 'Blue Bird Studio',
    short: 'Dance & tumbling studio for kids',
    phone: '276-299-2123',
    category: 'Kids Activities',
    url: 'https://Bluebirdstudio1.com',
    icon: '💃',
    mission: 'At Blue Bird Studio, we create a safe, joyful space where kids can dance, tumble, and belong. With clean music, age-appropriate moves, and a focus on community values, we help every child grow in confidence and creativity.',
    featured: false
  },

  // ========================================
  // CREATIVE SERVICES
  // ========================================
  
  {
    id: 'ohsomissy',
    name: 'OhSoMissy Art Design',
    short: 'Custom art & design services',
    phone: '252-876-2969',
    category: 'Creative Services',
    url: 'https://www.ohsomissyartdesign.com',
    icon: '🎨',
    featured: false
  },

  // ========================================
  // HEALTH & FITNESS
  // ========================================
  
  {
    id: 'fusion-fitness',
    name: 'Fusion Fitness and Faith',
    short: 'Faith-based fitness center',
    phone: '276-870-4549',
    email: 'fusion.fitness2013@gmail.com',
    category: 'Health & Fitness',
    url: 'https://fusionfitnessva.com',
    icon: '💪',
    featured: false
  },

  // ========================================
  // TAXIDERMY & PROCESSING
  // ========================================
  
  {
    id: 'jesse-hoskins-taxidermy',
    name: 'Jesse Hoskins Taxidermy',
    short: 'Wildlife processing & taxidermy',
    category: 'Taxidermy & Processing',
    url: 'https://www.facebook.com/share/1MpMNsL3ma/?mibextid=wwXIfr',
    icon: '🦌',
    mission: 'Right now we are processing wildlife, when we get our big building finished we will start doing beef and pork ext.',
    featured: false
  },

  // ========================================
  // RETAIL
  // ========================================
  
  {
    id: 'the-store',
    name: 'The Store',
    short: 'Boutique clothing & mattress sales',
    phone: '276-346-3744',
    category: 'Retail',
    icon: '🛍️',
    featured: false
  },
]

// Business Categories
export const categories = [
  'All',
  'Food & Dining',
  'Home Services',
  'Creative Services',
  'Kids Activities',
  'Health & Fitness',
  'Retail',
  'Taxidermy & Processing'
]