import Link from "next/link"

export default function Certificate({ name, issuedBy, issuedOn, url }) {
  return (
    <li>
      <span className="fa-li">
        <i className="fas fa-certificate text-warning"></i>
      </span>
      <Link href={url} target="_blank" className="text-decoration-none lead">
        {name}, {issuedBy} ({issuedOn})
      </Link>
    </li>
  )
}