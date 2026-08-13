function Skills() {
  return (
    <section id="skills" className="portfolio-section">

      <div className="section-heading">
        <p>TECHNICAL SKILLS</p>
        <h2>What I Work With</h2>
      </div>

      <div className="skills-grid">

        {/* Programming */}
        <div className="skill-card">
          <div className="skill-icon">&lt;/&gt;</div>

          <h3>Programming Languages</h3>

          <p>
            Languages used for problem solving and software development.
          </p>

          <div className="skill-tags">
            <span>Java</span>
            <span>Python</span>
            <span>C++</span>
          </div>
        </div>


        {/* Web Development */}
        <div className="skill-card">
          <div className="skill-icon">🌐</div>

          <h3>Web Development</h3>

          <p>
            Technologies used to build responsive web applications.
          </p>

          <div className="skill-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>REST APIs</span>
            <span>Node.js</span>
          </div>
        </div>


        {/* Core CS */}
        <div className="skill-card">
          <div className="skill-icon">🧠</div>

          <h3>Core Computer Science</h3>

          <p>
            Fundamental concepts used in software engineering.
          </p>

          <div className="skill-tags">
            <span>Data Structures</span>
            <span>Algorithms</span>
            <span>OOP</span>
            <span>Problem Solving</span>
          </div>
        </div>


        {/* Tools */}
        <div className="skill-card">
          <div className="skill-icon">⚙</div>

          <h3>Tools & Platforms</h3>

          <p>
            Tools used for development and version control.
          </p>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>LeetCode</span>
          </div>
        </div>


        {/* AI */}
        <div className="skill-card">
          <div className="skill-icon">🤖</div>

          <h3>AI & Data</h3>

          <p>
            Areas explored through projects and learning.
          </p>

          <div className="skill-tags">
            <span>Artificial Intelligence</span>
            <span>Exploratory Data Analysis</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills