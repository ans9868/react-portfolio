import ProjectCard from '../components/UI/ProjectCard';
import eegPipelineImage from '../assets/EEG-pipeline-structure.png';

const projects = [
  {
    title: "EEG ML Pipeline: Honest Cross-Subject Generalization",
    description: "A distributed PySpark + Ray pipeline implementing 50-fold random Leave-P-Subjects-Out (LPSO) evaluation for honest cross-subject generalization. On 65 AD/CN subjects, ANOVA-selected features outperform PCA by ~15-16 pts (69.5% vs 53.2% median) under strict cross-subject evaluation. A statistically rigorous, reproducible EEG benchmark that prevents the 'lucky fold' illusion through median ± IQR reporting.",
    docUrl: "https://docs.google.com/document/d/1QT2ikn4bp6Gq5iCia0xJMgnyQE1JCNyiYEHrBBLmhVk/edit?tab=t.0#heading=h.a97vqin83eo3",
    imageUrl: eegPipelineImage,
    technologies: ["Python", "PySpark", "Ray", "ML", "EEG", "ANOVA", "PCA", "LPSO", "Scikit-learn", "Pandas", "Numpy", "Distributed Computing", "Reproducible Research"]
  },
  {
    title: "Analyzing Geographic Culture Through X API v2",
    description: "Jupyter notebook counterpart for analyzing geographic culture through X (Twitter) API v2. Uses a data collection pipeline to gather regional tweets from NYC, SG, and UK, then performs sentiment analysis with NLTK VADER, topic profiling with Empath dictionary, and dimensionality reduction with PCA/UMAP to compare regional 'cultural profiles' in topic space.",
    githubUrl: "https://github.com/ans9868/medium_X_analysis",
    mediumUrl: "https://medium.com/@adelnsahuc/analyzing-geographic-culture-through-x-api-v2-british-llm-53d26f832876",
    technologies: ["Python", "Jupyter", "X API v2", "NLTK VADER", "Empath", "PCA", "UMAP", "Sentiment Analysis", "Data Pipeline", "Cultural Analysis"]
  },
  {
    title: "Binaural Beats: Before and After Effects Study",
    description: "A personal example research project testing the before and after effects of binaural beats. This study explores the cognitive and physiological impacts of binaural beat exposure through controlled experiments and data analysis.",
    docUrl: "https://docs.google.com/document/d/18QGMshTftfXnV4O4aMzXaYaNA4GWeKWKpADw2t8c1Fg/edit?tab=t.0#heading=h.eb6pdku1fqvb",
    technologies: ["Research", "Experimental Design", "EEG", "Data Analysis", "Cognitive Science", "Neuroscience"]
  },
  {
    title: "Database Project: Château NYC",
    description: "A full-stack web application with a modern UI and robust backend. This was a project for a Database course at NYU. Features include user authentication, data management, and real-time updates.",
    githubUrl: "https://github.com/TheChosenO1/DBProject",
    technologies: ["React", "Node.js", "Express", "JEST", "CSS", "JavaScript", "A lot of Postgres"]
  },
  {
    title: "Full Stack Certificate (University of Helsinki) (Pre-AI age)",
    description: "A full-stack web certificate that forced me to learn a lot of new technologies and skills. Features include user authentication, data management, and real-time updates.",
    githubUrl: "https://github.com/ans9868/FullStack/",
    technologies: ["React", "Node.js", "Express", "MongoDB", "CRUD", "MongoDB", "playwright", "Jest", "HTML", "CSS", "JavaScript", "And so much more!"]
  },
  {
    title: "Classifying Alziemers disease From EEG data",
    description: "Classifying alziemers disease From EEG data. This was a project for a Graduate Neuroscience course at NYU. Special thanks to Professor Varol and TA Malhar. The official research group can be found here: https://www.neuroinformaticslab.com/",
    githubUrl: "https://github.com/ans9868/eeg-ds004504",
    technologies: ["Python", "PySpark", "ML", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Plotly", "SciPy", "XGBoost", "MLP's", "and much more!"]
  },
  {
    title: "Data Structures and Algorithms Course (Pre-AI age)",
    description: "My Data Structures and Algorithms Course. This was a course at NYU that taught me a lot about the basics of algorithms and data structures.",
    githubUrl: "https://github.com/ans9868/Data-Structures-and-Algorithms",
    technologies: ["Python", "Runtime Analysis", "Big O Notation", "Recursion", "Dynamic Programming", "Brute force", "crying", "mental breakdowns", "tears of joy when finding the solution", "and much more!"]
  },
  // Add more projects here as needed
];

export default function Projects() {
  return (
    <div className="page-content">
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              docUrl={project.docUrl}
              mediumUrl={project.mediumUrl}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 