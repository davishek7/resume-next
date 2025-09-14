import projects from "../data/portfolio.json"
import Project from "@/components/Project"

export default function Portfolio() {
  return (
      <section className="resume-section" id="portfolio">
        <div className="resume-section-content">
          <h2 className="mb-5">Portfolio</h2>
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </section>
  )
}