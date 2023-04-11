import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <a href= "/" className="site-title">
        AYLIN.JOY
      </a>
      <ul>
        <li>
          <a href="/about"> About</a>
        </li>
        <li>
          <a href="/design"> Design</a>
        </li>
      </ul>
    </nav>
  )
}