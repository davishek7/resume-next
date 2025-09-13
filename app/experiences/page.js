import experiences from "../data/experiences.json"
import Experience from "@/components/Experience"

export default function Experiences() {
  return (
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {experiences.map((experience) => (
            <Experience
              key={experience.id}
              position={experience.position}
              company={experience.company}
              achievements={experience.achievements}
              duration={experience.duration}
            />
          ))}
        </div>
      </section>
  )
}
