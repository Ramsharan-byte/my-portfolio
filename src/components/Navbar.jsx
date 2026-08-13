function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="navbar-logo">
        RS
      </a>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;