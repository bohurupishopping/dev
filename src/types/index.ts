export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: Feature[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TechIcon {
  name: string;
  icon: string;
}