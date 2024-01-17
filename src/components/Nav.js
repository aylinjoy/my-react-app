import "./Nav.css";
;


export default function Nav() {
  return (
    <nav className="nav">
    <ul>
      <li>
      <a href= "/"> Home </a>
      </li>
        <li>
          <a href="/about"> About</a>
        </li>
        <li>
          <a href="/design"> Design</a>
        </li>
        <li>
          <a href="https://medium.com/@amart98/hci-design-manifesto-84536ff9c5c4"> Manifesto</a>
        </li>
      </ul>
    </nav>
  )
}