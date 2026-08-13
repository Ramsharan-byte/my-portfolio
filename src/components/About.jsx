function About() {
  return (
    <section id="about" className="portfolio-section">

      <div className="section-heading">
        <p>ABOUT ME</p>
        <h2>Who I Am</h2>
      </div>

      <div className="about-container">

        {/* About Card */}
        <div className="about-card">

          <div className="about-icon">
            👨‍💻
          </div>

          <h3>Computer Science Student</h3>

          <p>
            I am a B.Tech Computer Science student interested in
            software development, web technologies, artificial
            intelligence, and problem solving.
          </p>

          <p>
            I am continuously developing my programming,
            Data Structures and Algorithms, and web development
            skills through projects and practical learning.
          </p>

        </div>


        {/* Education Card */}
        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <span className="education-label">
            EDUCATION
          </span>

          <h3>
            B.Tech in Computer Science
          </h3>

          <p className="college-name">
            Greater Noida Institute of Technology
          </p>

          <p className="education-details">
            2023 — 2027
          </p>

          <p className="education-details">
            Dr. A.P.J. Abdul Kalam Technical University
          </p>

        </div>

      </div>

    </section>
  )
}

export default About