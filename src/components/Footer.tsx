export function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} remislanina.com</p>
      <nav className="nav-legal" aria-label="Legal information">
        <ul>
          <li>
            <a href="/impressum">Legal Note</a>
          </li>
          <li>
            <a href="/privacy">Data Protection</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
