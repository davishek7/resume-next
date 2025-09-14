import Skill from "./Skill";

export default function Project({ project }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{project.title}</h3>
        <div className="subheading mb-3">{project.description}</div>

        {/* Tech stack */}
        <ul className="list-inline dev-icons">
          {project.tech_stack.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              imageUrl={skill.imageUrl}
            />
          ))}
        </ul>

        {/* Links */}
        <div className="mt-3 d-flex flex-wrap gap-2">
          {/* GitHub dropdown */}
          {project.github && (
            <div className="dropdown">
              <button
                className="btn btn-sm btn-dark dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-brands fa-github"></i>{" "}GitHub
              </button>
              <ul className="dropdown-menu">
                {project.github.frontend && (
                  <li>
                    <a
                      className="dropdown-item"
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-react"></i>{" "}Frontend
                    </a>
                  </li>
                )}
                {project.github.dashboard && (
                  <li>
                    <a
                      className="dropdown-item"
                      href={project.github.dashboard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-gauge"></i>{" "}Dashboard
                    </a>
                  </li>
                )}
                {project.github.backend && (
                  <li>
                    <a
                      className="dropdown-item"
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-server"></i>{" "}Backend
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Live dropdown */}
          {project.hosted && (
            <div className="dropdown">
              <button
                className="btn btn-sm btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-globe"></i>{" "}Live
              </button>
              <ul className="dropdown-menu">
                {project.hosted.frontend && (
                  <li>
                    <a
                      className="dropdown-item"
                      href={project.hosted.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-react"></i>{" "}Frontend
                    </a>
                  </li>
                )}
                {project.hosted.dashboard && (
                  <li>
                    <a
                      className="dropdown-item"
                      href={project.hosted.dashboard}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-gauge"></i>{" "}Dashboard
                    </a>
                  </li>
                )}
                {project.hosted.backend && (
                  <li>
                    <a
                      className="dropdown-item"
                      href={project.hosted.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-solid fa-server"></i>{" "}API
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex-shrink-0 text-end">
        {project.status === "private" && (
          <span className="badge bg-warning text-dark">Private</span>
        )}
      </div>
    </div>
  );
}
