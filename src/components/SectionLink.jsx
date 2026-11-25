import { Link } from 'react-router-dom'

export default function SectionLink({ sectionId, children, className = '', ...props }) {
  return (
    <Link
      to={`/#${sectionId}`}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
