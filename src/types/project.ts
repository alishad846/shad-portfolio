export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'ml' | 'data' | 'web';
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}