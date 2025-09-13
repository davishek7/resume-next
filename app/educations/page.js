import educations from "../data/educations.json"
import Education from "@/components/Education"

export default function Educations() {
  return (
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          {educations.map((education) => (
            <Education
              key={education.id}
              college={education.college}
              degree={education.degree}
              stream={education.stream}
              gpa={education.gpa}
              startDate={education.startDate}
              endDate={education.endDate}
            />
          ))}
        </div>
      </section>
  )
}
