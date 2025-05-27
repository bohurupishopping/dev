import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'We create modern, responsive websites and web applications that drive business growth.',
    icon: 'Code2',
    features: [
      {
        id: '1-1',
        title: 'WordPress Websites',
        description: 'Professional blogs, portfolios, and business websites built with WordPress.',
      },
      {
        id: '1-2',
        title: 'E-commerce Stores',
        description: 'Custom WooCommerce stores and Shopify alternatives tailored to your needs.',
      },
      {
        id: '1-3',
        title: 'Next.js Websites',
        description: 'Lightning-fast and SEO-optimized landing pages and full-stack applications.',
      },
      {
        id: '1-4',
        title: 'Custom Admin Panels',
        description: 'Powerful dashboards with comprehensive data management features.',
      },
    ],
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'We develop high-performance mobile applications that provide exceptional user experiences.',
    icon: 'Palette',
    features: [
      {
        id: '2-1',
        title: 'Expo (React Native) Apps',
        description: 'Cross-platform applications with smooth performance and native feel.',
      },
      {
        id: '2-2',
        title: 'Flutter Apps',
        description: 'High-quality native-like mobile applications with beautiful UI.',
      },
      {
        id: '2-3',
        title: 'E-commerce Apps',
        description: 'Scalable and user-friendly shopping applications with modern features.',
      },
      {
        id: '2-4',
        title: 'Business Apps',
        description: 'From booking to service apps, customized to your business requirements.',
      },
    ],
  },
  {
    id: '3',
    title: 'Custom Tech Solutions',
    description: 'We provide comprehensive technical solutions to enhance your business operations.',
    icon: 'BarChartBig',
    features: [
      {
        id: '3-1',
        title: 'API & Backend Integration',
        description: 'Seamless API integrations and robust backend logic implementation.',
      },
      {
        id: '3-2',
        title: 'AI Integration',
        description: 'Advanced AI solutions including chat, recommendations, and automation.',
      },
      {
        id: '3-3',
        title: 'Admin & CRM Systems',
        description: 'Custom admin tools and CRM systems for efficient business management.',
      },
      {
        id: '3-4',
        title: 'Deployment & Maintenance',
        description: 'Comprehensive deployment, hosting, and maintenance services.',
      },
    ],
  }
];

export const techIcons: string[] = [
  'React', 'Vue', 'Angular', 'Node.js', 'TypeScript', 
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Figma'
];