import interests from "../data/interests.json";

export default function Interests() {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        {interests.map((interest) => (
          <p className="mb-0 lead" key={interest}>
            {interest}
          </p>
        ))}
      </div>
    </section>
  );
}
