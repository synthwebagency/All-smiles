import { TeamMember, Service, Review, GalleryImage } from './types';

export const COLORS = {
  NAVY: '#001F3F',
  WHITE: '#FFFFFF',
  BLACK: '#111111',
  OFF_WHITE: '#F8F9FA'
};

export const SERVICES: Service[] = [
  {
    id: 'braces',
    title: 'BRACES',
    image: '/images/service-braces.jpg',
    shortDescription: 'Straighten your smile with modern orthodontic solutions.',
    price: '$3,500',
    why: 'Braces are the most effective way to correct misaligned teeth and bite issues, ensuring long-term oral health and a confident smile.',
    when: 'You should consider braces if you have crowded teeth, gaps, or an overbite/underbite that affects your chewing or confidence.',
    benefits: [
      'Improved digital alignment',
      'Better oral hygiene access',
      'Enhanced facial aesthetics',
      'Corrected bite function'
    ]
  },
  {
    id: 'crowns',
    title: 'CROWNS',
    image: '/images/service-crowns.jpg',
    shortDescription: 'Restore damaged teeth with natural-looking porcelain crowns.',
    price: '$950',
    why: 'Crowns protect weak teeth from breaking or restore already broken teeth, acting as a "cap" that looks and feels like a natural tooth.',
    when: 'Recommended for large cavities, cracked teeth, or following a root canal treatment.',
    benefits: [
      'Restored tooth strength',
      'Natural appearance',
      'Long-lasting durability',
      'Protection from decay'
    ]
  },
  {
    id: 'whitening',
    title: 'TEETH WHITENING',
    image: '/images/service-whitening.jpg',
    shortDescription: 'Professional whitening for a radiant, brighter smile.',
    price: '$450',
    why: 'Our professional-grade whitening system removes deep stains and discoloration more effectively than over-the-counter products.',
    when: 'Ideal before special events or if you notice staining from coffee, tea, or natural aging.',
    benefits: [
      'Instant results',
      'Safe for enamel',
      'Customized treatments',
      'Boosted confidence'
    ]
  },
  {
    id: 'implants',
    title: 'DENTAL IMPLANTS',
    image: '/images/service-implants.jpg',
    shortDescription: 'Permanent solutions for missing teeth that look and feel real.',
    price: '$2,800',
    why: 'Implants provide a permanent foundation for replacement teeth, preventing bone loss in the jaw and maintaining facial structure.',
    when: 'If you are missing one or more teeth and want a solution that is more comfortable and stable than dentures.',
    benefits: [
      'Permanent foundation',
      'Prevents bone loss',
      'No speech impairment',
      'Eat anything with ease'
    ]
  },
  {
    id: 'checkups',
    title: 'ROUTINE CHECKUPS',
    image: '/images/service-checkups.jpg',
    shortDescription: 'Comprehensive care to keep your smile healthy and vibrant.',
    price: '$120',
    why: 'Prevention is the key to longevity. Regular exams allow us to catch issues early before they become painful or expensive.',
    when: 'Every six months for optimal oral health maintenance.',
    benefits: [
      'Early disease detection',
      'Professional cleaning',
      'Oral cancer screening',
      'Plaque removal'
    ]
  }
];

export const TEAM: { doctors: TeamMember[]; nurses: TeamMember[] } = {
  doctors: [
    {
      name: 'Dr. Daniel Carter',
      role: 'Principal Dentist',
      education: 'Harvard University',
      description: 'Specialist in advanced cosmetic and restorative dentistry with over 20 years of experience.',
      image: '/images/team-daniel-carter.jpg'
    },
    {
      name: 'Dr. Emily Carter',
      role: 'Associate Dentist',
      education: 'Harvard Medical School',
      description: 'Focuses on modern dental care and patient comfort, bringing fresh innovations to our practice.',
      image: '/images/team-emily-carter.jpg'
    }
  ],
  nurses: [
    {
      name: 'Tanya',
      role: 'Senior Dental Nurse',
      education: 'Yale University',
      description: 'Known for patient care and precision in clinical settings.',
      image: '/images/team-tanya.jpg'
    },
    {
      name: 'Marwa',
      role: 'Clinical Assistant',
      education: 'Princeton University',
      description: 'Focuses on comfort and assistance during complex procedures.',
      image: '/images/team-marwa.jpg'
    },
    {
      name: 'Gabby',
      role: 'Patient Coordinator',
      education: 'Harvard University',
      description: 'Specializes in patient support and ensuring clinical efficiency.',
      image: '/images/team-gabby.jpg'
    }
  ]
};

export const REVIEWS: Review[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'The most calming experience I have ever had at a dentist. Dr. Carter is truly an artist.'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'State-of-the-art facilities and a team that genuinely cares. My family will not go anywhere else.'
  },
  {
    name: 'Elena Rodriguez',
    rating: 5,
    text: 'Professional, clean, and luxurious. Exactly what you expect from a premium clinic.'
  }
];

export const GALLERY: GalleryImage[] = [
  { url: '/images/clinic-reception.jpg', caption: 'Modern Reception Area' },
  { url: '/images/clinic-equipment.jpg', caption: 'High-Tech Treatment Room' },
  { url: '/images/clinic-room.jpg', caption: 'Advanced Imaging Equipment' },
  { url: '/images/clinic-team.jpg', caption: 'Our Professional Team' }
];

export const WHY_US_SLIDES = [
  {
    title: 'TRUSTED BY GENERATIONS',
    description: 'Serving families with care for over two decades, building relationships that span lifetimes.'
  },
  {
    title: 'STATE-OF-THE-ART TECHNOLOGY',
    description: 'Equipped with the latest diagnostic and imaging tools for precision treatments.'
  },
  {
    title: 'GENTLE & CARING APPROACH',
    description: 'We prioritize your comfort and anxiety-free care in a relaxing environment.'
  },
  {
    title: 'HIGHLY QUALIFIED TEAM',
    description: 'Our specialists are trained at Ivy League institutions, ensuring world-class standards.'
  }
];
