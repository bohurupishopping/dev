import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bohurupi Shopping',
    description: 'An e-commerce platform specializing in Bengali-themed graphic T-shirts, mobile covers, and accessories. Features include product categorization, secure checkout, and responsive design.',
    image: '/images/bohurupi-webimg.jpg',
    category: 'WordPress',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    link: 'https://bohurupi.com',
  },
  {
    id: '2',
    title: 'Sushma Pashu Khadya',
    description: 'A website for a Hooghly-based cattle feed manufacturer, showcasing their range of organic and nutritious livestock feeds with product listings and company information.',
    image: '/images/sushma-web.jpg',
    category: 'WordPress',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
    link: 'https://sushmapashukhadya.in',
  },
  {
    id: '3',
    title: 'Pahalampur Samabay Krishi',
    description: 'An online presence for a rural cooperative society offering financial services, agricultural inputs, and community support with comprehensive service information.',
    image: '/images/pahalampur-skus-wb.jpg',
    category: 'WordPress',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
    link: 'https://pahalampurskus.com',
  },
  {
    id: '4',
    title: 'Jalpari Shop',
    description: 'An e-commerce site offering a curated collection of high-quality fabrics and trendy designs, focusing on men\'s wear with emphasis on premium quality.',
    image: '/images/jalpari-web.jpg',
    category: 'WordPress',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'jQuery'],
    link: 'https://jalparishop.com',
  },
  {
    id: '5',
    title: 'Sushma Order Management',
    description: 'A custom-built Next.js application enabling Sushma Pashu Khadya to manage orders efficiently, track inventory, and streamline customer interactions.',
    image: '/images/sushma-nextjs.jpg',
    category: 'Next.js',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma'],
  },
  {
    id: '6',
    title: 'Maponus Medical Orders',
    description: 'A tailored solution for Maponus to handle medical orders, manage client data, and oversee logistics seamlessly using modern web technologies.',
    image: '/images/map-next.jpg',
    category: 'Next.js',
    technologies: ['Next.js', 'React', 'MongoDB', 'Express'],
  },
  {
    id: '7',
    title: 'Bohurupi Medical System',
    description: 'An internal tool designed for Bohurupi to manage medical product orders, inventory, and customer relations with comprehensive tracking features.',
    image: 'https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg',
    category: 'Next.js',
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Node.js'],
  },
  {
    id: '8',
    title: 'Health & Fitness App',
    description: 'A mobile application promoting health and wellness, featuring workout routines, nutrition guides, and progress tracking functionality.',
    image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
  },
  {
    id: '9',
    title: 'OrderMS Mobile',
    description: 'An order management system application facilitating businesses to process orders, manage inventory, and communicate with customers efficiently.',
    image: 'https://images.pexels.com/photos/6214934/pexels-photo-6214934.jpeg',
    category: 'Mobile App',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
  }
];

export const categories = [
  'All',
  'WordPress',
  'Next.js',
  'Mobile App'
];