
interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  docUrl?: string;
  mediumUrl?: string;
  imageUrl?: string;
  technologies?: string[];
}

export default function ProjectCard({ title, description, githubUrl, docUrl, mediumUrl, imageUrl, technologies = [] }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title}
          className="project-image"
        />
      )}
      <p className="project-description">{description}</p>
      {technologies.length > 0 && (
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
      )}
      <div className="project-links">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            View on GitHub →
          </a>
        )}
        {docUrl && (
          <a 
            href={docUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            View Document →
          </a>
        )}
        {mediumUrl && (
          <a 
            href={mediumUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            View on Medium →
          </a>
        )}
      </div>
    </div>
  );
} 