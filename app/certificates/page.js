import certificates from "../data/certificates.json"
import Certificate from "@/components/Certificate"

export default function Certificates() {
  return (
      <section className="resume-section" id="certificates">
        <div className="resume-section-content">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            {certificates.map((certificate) => (
              <Certificate
                key={certificate.id}
                name={certificate.name}
                issuedBy={certificate.issuedBy}
                issuedOn={certificate.issuedOn}
                url={certificate.url}
              />
            ))}
          </ul>
        </div>
      </section>
  )
}
