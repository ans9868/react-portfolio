
interface BlogPostPreviewProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  date?: string;
}

export default function BlogPostPreview({ title, description, url, imageUrl, date }: BlogPostPreviewProps) {
  return (
    <article className="blog-post-card">
      {imageUrl && (
        <div className="blog-post-image-container">
          <img 
            src={imageUrl} 
            alt={title}
            className="blog-post-image"
          />
        </div>
      )}
      <div className="blog-post-content">
        <h3 className="blog-post-title">{title}</h3>
        {date && <p className="blog-post-date">{date}</p>}
        <p className="blog-post-description">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="blog-post-link"
        >
          Read on Medium →
        </a>
      </div>
    </article>
  );
}

