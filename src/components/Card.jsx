export default function Card({ children, className = '', ...props }) {
  return (
    <article
      className={`border-4 border-black ${className}`}
      {...props}
    >
      {children}
    </article>
  )
}
