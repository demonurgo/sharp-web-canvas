interface STARMethodology {
  situation: {
    context: string;
    problem: string;
    opportunity: string;
  };
  task: {
    objective: string;
    responsibilities: string[];
    challenges: string[];
    newTechnologies?: string[];
    essentialFeatures: string[];
  };
  action: {
    technicalImplementation: string[];
    keyDecisions: string[];
    strategies: string[];
  };
  result: {
    performance: string[];
    impact: string[];
    technicalAchievements: string[];
    learnings: string[];
    futureImprovements?: string[];
  };
}

interface ProjectType {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  image: string;
  fallbackImage?: string;
  lqip?: string;
  hasRealImage: boolean;
  demoUrl: string;
  featured: boolean;
  icon?: string;
  technologies: string[];
  tools: Array<{
    icon: string;
    name: string;
  }>;
  star?: STARMethodology;
  galleryImages?: string[]; // Add this line
}

export default ProjectType;
export type { STARMethodology };
