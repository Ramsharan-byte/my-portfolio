function Projects() {
  return (
    <section id="projects" className="portfolio-section">

      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">

          <div className="project-top">
            <div className="project-icon">
              AI
            </div>

            <span className="project-number">
              01
            </span>
          </div>

          <h3>
            AI Automatic Resume Shortlisting System
          </h3>

          <p>
            An AI-based project designed to automate resume
            screening and assist in filtering candidate
            information.
          </p>

          <div className="project-tags">
            <span>AI</span>
            <span>Resume Screening</span>
            <span>Automation</span>
          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/Ramsharan-byte"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              GitHub
            </a>

            <a
              href="#"
              className="project-btn primary"
            >
              Live Demo
            </a>

          </div>

        </div>


        {/* Project 2 */}
        <div className="project-card">

          <div className="project-top">
            <div className="project-icon">
              🛒
            </div>

            <span className="project-number">
              02
            </span>
          </div>

          <h3>
            Amazon Clone
          </h3>

          <p>
            A responsive Amazon-inspired website built
            using HTML, CSS, and JavaScript with product,
            cart, and checkout interface functionality.
          </p>

          <div className="project-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/Ramsharan-byte"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              GitHub
            </a>

            <a
              href="#"
              className="project-btn primary"
            >
              Live Demo
            </a>

          </div>

        </div>


        {/* Project 3 */}
        <div className="project-card">

          <div className="project-top">
            <div className="project-icon">
              🎮
            </div>

            <span className="project-number">
              03
            </span>
          </div>

          <h3>
            Responsive Games
          </h3>

          <p>
            Two responsive games developed using HTML,
            CSS, and JavaScript with interactive gameplay
            and responsive design.
          </p>

          <div className="project-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/Ramsharan-byte"
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              GitHub
            </a>

            <a
              href="#"
              className="project-btn primary"
            >
              Live Demo
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects