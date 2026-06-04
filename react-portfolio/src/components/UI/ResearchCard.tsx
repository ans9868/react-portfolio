interface ResearchCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  imageUrl?: string;
  status?: string;
  tags?: string[];
}

export default function ResearchCard({
  title,
  description,
  pdfUrl,
  imageUrl,
  status,
  tags = [],
}: ResearchCardProps) {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="research-card-link"
    >
      <article className="research-card">
        <div className="research-card-content">
          <h3 className="research-card-title">{title}</h3>
          <div className="research-card-meta">
            <span className="research-card-status">Preprint</span>
            {status && <span className="research-card-status">{status}</span>}
          </div>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="research-card-image"
            />
          )}
          <p className="research-card-description">{description}</p>
          {tags.length > 0 && (
            <div className="research-card-tags">
              {tags.map((tag) => (
                <span key={tag} className="research-tag">{tag}</span>
              ))}
            </div>
          )}
          <span className="research-card-action">View Preprint →</span>
        </div>
      </article>
    </a>
  );
}
