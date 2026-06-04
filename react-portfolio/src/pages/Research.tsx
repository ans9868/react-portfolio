import ResearchCard from '../components/UI/ResearchCard';
import eegPipelineImage from '../assets/distributed_pipeline.png';
import luckyFoldPreprint from '../assets/lucky-fold-preprint.pdf';

const researchProjects = [
  {
    title: "Evaluation Traps in EEG Disease Classification: Identity Leakage, Lucky Folds, and Objective Mismatch Replicated Across AD, FTD, MDD, and SCZ",
    description: "Auditing EEG disease-classification evaluation across Alzheimer's disease, frontotemporal dementia, major depressive disorder, and schizophrenia cohorts. It shows how identity leakage, lucky subject folds, and mismatched epoch-vs-subject objectives can inflate or distort model performance, then proposes a four-point reporting standard to make EEG machine-learning results more reproducible, comparable, and clinically meaningful.",
    pdfUrl: luckyFoldPreprint,
    imageUrl: eegPipelineImage,
    status: "NeurIPS under review",
    tags: ["EEG", "Clinical ML", "Evaluation", "Identity Leakage", "Lucky Folds", "Subject Accuracy", "Python", "PySpark", "Ray", "Reproducible Research"]
  },
];

export default function Research() {
  return (
    <div className="page-content">
      <section className="projects-section">
        <div className="research-grid">
          {researchProjects.map((project) => (
            <ResearchCard
              key={project.title}
              title={project.title}
              description={project.description}
              pdfUrl={project.pdfUrl}
              imageUrl={project.imageUrl}
              status={project.status}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
