export function Header() {
  return (
    <header>
      {/*  <div className="header-top"> */}
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
      {/*  </div> */}
      <h1>Portfolio Remi Slanina</h1>

      <nav className="nav-main" aria-label="Main navigation">
        <ul>
          <li>
            <a href="#snail-trail">Snail Trail</a>
          </li>
          <li>
            <a href="#odds-evens">Odds and Evens</a>
          </li>
          <li>
            <a href="#memory-game">Memory Game</a>
          </li>
          <li>
            <a href="#more-projects">Further Projects</a>
          </li>
          <li>
            <a href="#portraits">Portraits</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
