
interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  technologies?: string[];
}

export default function ProjectCard({ title, description, githubUrl, technologies = [] }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      {technologies.length > 0 && (
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
      )}
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-link"
      >
        View on GitHub →
      </a>
    </div>
  );
} 