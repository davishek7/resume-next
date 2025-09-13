import Link from "next/link";
import data from "./data/about.json";

export default function Home() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          {data.first_name}{" "}
          <span className="text-primary">{data.last_name}</span>
        </h1>
        <div className="subheading mb-5">
          {data.address.address_line_one} · {data.address.district},{" "}
          {data.address.state}, {data.address.country_code}{" "}
          {data.address.pincode} · {data.contact.phone} ·{" "}
          <Link href={`mailto:${data.contact.email}`}>{data.contact.email}</Link>
        </div>
        <div className="lead mb-5">
          {data.about.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
        <div className="social-icons">
          <Link
            className="social-icon text-decoration-none"
            href={data.socials.github}
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Link>
          <Link
            className="social-icon text-decoration-none"
            href={data.socials.linkedin}
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link
            className="social-icon text-decoration-none"
            href={data.socials.twitter}
            target="_blank"
          >
            <i className="fab fa-x-twitter"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
