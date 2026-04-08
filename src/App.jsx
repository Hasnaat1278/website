import "./App.css";

const projects = [
  {
    title: "Emotion Recognition AI",
    description:
      "I built a machine learning-based emotion detection system that analyzes facial expressions and maps them to corresponding emotions, displaying the results visually. I worked on the data processing, model training, and integrating the predictions into a simple user-facing interface.",
    tags: ["Python", "Machine Learning", "Data Processing", "Model Training"],
  },
  {
    title: "ML Iris Data Analysis",
    description:
      "I worked on a machine learning project using the Iris dataset to classify different flower species based on their features. I handled data preprocessing, explored patterns in the data, and trained models to better understand how different features impact classification.",
    tags: ["Python", "Data Analysis", "Classification"],
  },
  {
    title: "Multigame Compilation",
    description:
      "I developed a multi-game compilation featuring several small games, focusing on gameplay mechanics, user interaction, and overall experience. I implemented core features like player controls, scoring systems, and game logic while making sure everything ran smoothly.",
    tags: ["C++", "raylib", "Game Logic", "UI"],
  },
  {
    title: "GOPS Simulator Script",
    description:
      "I wrote a script for the GOPS card game for a Computer Science Club event, using it to simulate gameplay and analyze different strategies. I focused on implementing the game logic accurately and structuring the code so I could test outcomes and explore how different approaches affect performance.",
    tags: ["Python", "Simulation", "Strategy Analysis"],
  },
];

function App() {
  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="logo">Hasnaat</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <p className="hero-kicker">Computing Student</p>
            <h1>Hi, I'm Hasnaat Tanveer</h1>
            <p className="hero-subtext">
              I enjoy building practical, user-focused applications and learning
              through hands-on work in software, AI, and cybersecurity.
            </p>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <h3>What I Work With</h3>
              <div className="pill-row">
                <span>JavaScript</span>
                <span>React</span>
                <span>Python</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>

            <div className="panel-card">
              <h3>Current Interests</h3>
              <div className="pill-row">
                <span>Artificial Intelligence</span>
                <span>Cybersecurity</span>
                <span>Fullstack Development</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            I’m a computing student at Queen’s University who enjoys building
            things that are both practical and easy to use. I’ve worked with
            Python and JavaScript across different projects, including machine
            learning work, and I like figuring out how to turn ideas into
            something real. Lately, I’ve been getting more interested in
            artificial intelligence and cybersecurity, and I’m always looking to
            keep learning and improve through hands-on work.
          </p>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <p className="projects-note">
            I’ll be making these projects available soon.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`projects-card ${project.featured ? "primary-card" : ""}`}
              >
                <div className="project-image-placeholder">
                  <span>{project.title}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tag-list">
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex}>{tag}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="research" id="research">
          <h2>Research</h2>

          <div className="research-card">
            <h3>Toward FATE in AI for Social Media and Health Care</h3>

            <p>
              I contributed to a scoping review examining fairness, accountability,
              transparency, and ethics in AI for social media and health care.
            </p>

            <p>
              The paper explores how AI is used in health-related social media contexts,
              analyzes current computational methods and evaluation metrics, and
              highlights gaps in how FATE principles are applied in practice.
            </p>

            <a
              href="https://preprints.jmir.org/preprint/50048"
              target="_blank"
              rel="noreferrer"
              className="research-btn"
            >
              View Paper →
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-simple">
            <h2>Contact Me</h2>

            <p>
              Feel free to reach out for networking, collaboration, or just to connect.
            </p>

            <p className="email">
              Hasnaat1278@gmail.com
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">Made by Hasnaat Tanveer</p>

        <div className="footer-logos">
          <a href="https://github.com/Hasnaat1278" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/hasnaat-tanveer-072103218/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:Hasnaat1278@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;