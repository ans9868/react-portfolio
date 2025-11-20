import medium1 from '../assets/logos/medium1.0.png';
import youtube from '../assets/logos/youtube.png';
import BlogPostPreview from '../components/UI/blogpost-preview';
import macosTerminalImage from '../assets/medium_article_pictures/macos_terminal_setup.webp';
import xApiImage from '../assets/medium_article_pictures/x_api_v_2.webp';

const blogPosts = [
  {
    title: "Analyzing Geographic Culture Through X API v2 + British LLM",
    description: "Explore how to analyze geographic culture through X (Twitter) API v2. This article covers data collection, sentiment analysis with NLTK VADER, topic profiling with Empath, and dimensionality reduction techniques to compare regional cultural profiles.",
    url: "https://medium.com/@adelnsahuc/analyzing-geographic-culture-through-x-api-v2-british-llm-53d26f832876",
    imageUrl: xApiImage
  },
  {
    title: "Fastest Guide to macOS Terminal Setup: Autocomplete, Aliases & Colors",
    description: "A fast, foolproof terminal setup guide for macOS developers. Learn how to configure autocomplete, create useful aliases, and add fun colors to make your terminal experience more efficient and enjoyable.",
    url: "https://medium.com/@adelnsahuc/my-fast-foolproof-terminal-setup-for-macos-devs-autocomplete-alias-and-fun-colors-feb48fb35516",
    imageUrl: macosTerminalImage
  }
];

export default function Articles() {
  return (
    <div className="page-content">
      <section className="blog-section">
        <h2 className="blog-title">Blog</h2>
        <p className="blog-desc">
          I "blog" on Medium and soon on YouTube. Go check it out!
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
            <a href="https://medium.com/@adelnsahuc" target="_blank" rel="noopener noreferrer">
              <img src={medium1} alt="Medium" style={{ width: 32, height: 32, verticalAlign: 'middle', borderRadius: '20%' }} />
            </a>
            <a href="https://www.youtube.com/@AdelNour333" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" style={{ width: 32, height: 32, verticalAlign: 'middle', borderRadius: '20%' }} />
            </a>
          </span>
        </p>
        <div className="blog-posts-grid">
          {blogPosts.map((post, index) => (
            <BlogPostPreview
              key={index}
              title={post.title}
              description={post.description}
              url={post.url}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
