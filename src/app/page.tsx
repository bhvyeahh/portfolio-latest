import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* ------------ HERO SECTION ------------ */}
      <section className="hero-section">
        <h1 className="hero-title">
          Hello! I’m <span>Bhavya</span>
        </h1>

        <h2 className="hero-subtitle">
          Full Stack Developer
          <span className="location-badge">📍 India</span>
        </h2>

        <p className="hero-description">
          Product designer and design system specialist with growing experience,
          focusing on user experience and clean UI systems to create
          user-centered digital products.
        </p>

        <div className="hero-btn-group">
          <Link href="/about">
            <button className="btn-about">About</button>
          </Link>
          <button className="btn-copy">📋 Copy email</button>
          <button className="btn-copy">Resume</button>
        </div>
      </section>

      {/* ------------ SELECTED WORK ------------ */}
      <section className="work-section">
        <h3 className="section-title">Selected Work</h3>

        <div className="work-grid">
          {/* --- Project Card 1 --- */}
          <Link href="/projects/notezen" className="work-card">
            <div>
              <Image
                src="/images/note_zen.png"
                alt="NoteZen Project Preview"
                className="work-image"
                width={600}
                height={400}
              />

              <h4 className="work-title">NoteZen - Learning Platform</h4>
              <p className="work-desc">A clean Spaced Learning dashboard UI.</p>
            </div>
          </Link>

          {/* --- Project Card 2 --- */}
          <Link href="/projects/api-reviewer" className="work-card">
            <div>
              <img
                src="/images/api-reviewer.png"
                alt="project"
                className="work-image"
              />
              <h4 className="work-title">AI-API Reviewer CLI Tool</h4>
              <p className="work-desc">
                A detailed finance and analytics panel.
              </p>
            </div>
          </Link>
        </div>
      </section>
      {/* ------------ SKILLS SECTION ------------ */}
      <section className="skills-section">
        <h3 className="section-title">Skills & Tools</h3>

        <div className="skills-grid">
          {/* Skill Group 1 */}
          <div className="skill-cardd">
            <h4 className="skill-title">Frontend Development</h4>
            <div className="skill-list">
              <span className="skill-item">React.js</span>
              <span className="skill-item">Next.js</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">Tailwind</span>
            </div>
          </div>

          {/* Skill Group 2 */}
          <div className="skill-cardd">
            <h4 className="skill-title">Backend Development</h4>
            <div className="skill-list">
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Express.js</span>
              <span className="skill-item">REST APIs</span>
              <span className="skill-item">MongoDB</span>
              <span className="skill-item">JWT Auth</span>
            </div>
          </div>

          {/* Skill Group 3 */}
          <div className="skill-cardd">
            <h4 className="skill-title">Design & Tools</h4>
            <div className="skill-list">
              <span className="skill-item">Figma</span>
              <span className="skill-item">UI/UX</span>
              <span className="skill-item">Wireframing</span>
              <span className="skill-item">Framer</span>
            </div>
          </div>

          {/* Skill Group 4 */}
          <div className="skill-cardd">
            <h4 className="skill-title">Other Skills</h4>
            <div className="skill-list">
              <span className="skill-item">Git & GitHub</span>
              <span className="skill-item">Agile Workflow</span>
              <span className="skill-item">System Design Basics</span>
              <span className="skill-item">Problem Solving</span>
            </div>
          </div>
        </div>
      </section>
      {/* ------------ CONTACT SECTION ------------ */}
      <section className="contact-section">
        <h3 className="contact-title">Got questions?</h3>
        <p className="contact-subtext">
          I'm always excited to collaborate on innovative and exciting projects!
        </p>

        <div className="contact-flex">
          {/* Email Box */}
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4H20V20H4V4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 4L12 12L20 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div>
              <p className="contact-label">E-mail</p>
              <p className="contact-value">bhavyarathore575@gmail.com</p>
            </div>
          </div>

          {/* Phone Box */}
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="7" y="2" width="10" height="20" rx="3" />
                <circle cx="12" cy="18" r="1" />
              </svg>
            </div>

            <div>
              <p className="contact-label">Phone</p>
              <p className="contact-value">+91 7696698784</p>
            </div>
          </div>
        </div>

        <button className="contact-btn">Schedule a call</button>
      </section>
    </div>
  );
}
