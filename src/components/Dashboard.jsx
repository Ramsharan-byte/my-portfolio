function Dashboard() {
  return (
    <section id="home" className="dashboard">

      {/* Hero Section */}
      <div className="hero-content">

        <p className="hero-label">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Ram Sharan
          <span>Upadhyay</span>
        </h1>

        <p className="hero-role">
          Computer Science Student • Developer • Problem Solver
        </p>

        <p className="hero-description">
          I build web applications and AI-based projects
          while continuously improving my problem-solving
          and software development skills.
        </p>

      </div>


      {/* Navigation Grid */}
      <section className="app-grid">

        <a href="#about" className="app-card">
          <div className="app-icon">👤</div>
          <h3>About</h3>
          <p>Who I am</p>
        </a>

        <a href="#skills" className="app-card">
          <div className="app-icon">&lt;/&gt;</div>
          <h3>Skills</h3>
          <p>Technical skills</p>
        </a>

        <a href="#projects" className="app-card">
          <div className="app-icon">📁</div>
          <h3>Projects</h3>
          <p>My work</p>
        </a>

        <a href="#resume" className="app-card">
          <div className="app-icon">📄</div>
          <h3>Resume</h3>
          <p>View resume</p>
        </a>

        <a href="#contact" className="app-card">
          <div className="app-icon">✉</div>
          <h3>Contact</h3>
          <p>Let's connect</p>
        </a>

      </section>


      {/* Social Links */}
      <div className="social-links">

        <a
          href="https://github.com/Ramsharan-byte"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ram-sharan-upadhyay-0545r/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>

        <a
          href="mailto:ramsharansdr0@gmail.com"
          className="social-link"
        >
          Email
        </a>

      </div>


      {/* Footer */}
      <p className="dashboard-footer">
        © 2026 Ram Sharan Upadhyay. Built with React.
      </p>

    </section>
  )
}

export default Dashboard