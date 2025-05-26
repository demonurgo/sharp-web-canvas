interface ProjectType {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  image: string;
  fallbackImage?: string;
  hasRealImage: boolean;
  demoUrl: string;
  featured: boolean;
  icon?: string;
  technologies: string[];
  tools: Array<{
    icon: string;
    name: string;
  }>;
}

export default ProjectType;