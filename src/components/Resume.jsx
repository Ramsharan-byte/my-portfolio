function Resume() {
  return (
    <section id="resume" className="portfolio-section">

      <div className="section-heading">
        <p>MY RESUME</p>
        <h2>Resume</h2>
      </div>

      <div className="resume-container">

        <div className="resume-icon">
          📄
        </div>

        <h3>My Resume</h3>

        <p>
          View or download my latest resume to learn more
          about my education, technical skills, and projects.
        </p>

        <div className="resume-buttons">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn primary"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download="Ram-Sharan-Upadhyay-Resume.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;