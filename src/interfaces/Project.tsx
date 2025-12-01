interface Project {
  id: string;
  cardTitle: string;
  cardDescription?: string;
  imagePath: string;
  liveDemoLink?: string;
  liveDemoButtonText?: string;
  moreInfoLink?: boolean;
}

export default Project;
