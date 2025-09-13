import data from "../data/skills.json";
import Skill from "@/components/Skill";

export default function Skills() {
  const skills = data.skills;
  const workflows = data.workflows;
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">
          Programming Languages, Frameworks & Tools
        </div>
        <ul className="list-inline dev-icons">
          {skills.map((skill) => (
            <Skill key={skill.id} name={skill.name} imageUrl={skill.imageUrl} />
          ))}
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {workflows.map((workflow) => (
            <li key={workflow}>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {workflow}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
