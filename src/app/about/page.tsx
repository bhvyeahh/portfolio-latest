import Image from "next/image";
import "../../styles/About.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ==== HEADER SECTION ==== */}
      <header className="about-header">
        <div className="about-text">
          <h1 className="about-title">Bhavya Rathore</h1>
          <h2 className="about-role">MERN Developer</h2>

          <p className="about-bio">
            I'm Bhavya, a MERN developer who builds fast, clean and user-focused
            web applications. I specialise in smooth UI/UX, reliable APIs and
            scalable backend logic.
            <br />
            <br />
            Built learning platforms, productivity tools, API systems, and
            dashboards.
          </p>
        </div>

        <div className="about-photo">
          <Image
            src="/images/logo.jpg" // change to your image
            alt="Bhavya Rathore"
            width={230}
            height={230}
            className="about-img"
          />
        </div>
      </header>

      {/* ==== SKILLS SECTION ==== */}
      <section className="about-section">
        <h2 className="section-heading">Skills</h2>

        <div className="skills-grid">
          <div className="skill-card" data-tech="js">
            JavaScript (ES6+)
          </div>
          <div className="skill-card" data-tech="react">
            React.js
          </div>
          <div className="skill-card" data-tech="next">
            Next.js
          </div>
          <div className="skill-card" data-tech="node">
            Node.js
          </div>
          <div className="skill-card" data-tech="express">
            Express.js
          </div>
          <div className="skill-card" data-tech="mongo">
            MongoDB
          </div>
          <div className="skill-card" data-tech="api">
            REST APIs
          </div>
          <div className="skill-card" data-tech="jwt">
            JWT Auth
          </div>
          <div className="skill-card" data-tech="state">
            Zustand / Redux
          </div>
          <div className="skill-card" data-tech="ux">
            UI/UX Engineering
          </div>
          <div className="skill-card" data-tech="css">
            Tailwind / CSS
          </div>
          <div className="skill-card" data-tech="git">
            Git & GitHub
          </div>
        </div>
      </section>

      {/* ==== EXPERIENCE ==== */}
      <section className="about-section">
  <h2 className="section-heading">Experience</h2>

  <div className="experience-timeline">

    <div className="vertical-line"></div> {/* Glowing RGB line */}

    <div className="exp-item">
      <div className="exp-marker"></div>
      <div className="exp-content">
        <h3 className="exp-title">Full Stack Intern</h3>
        <p className="exp-company">ExTech Digital</p>
        <p className="exp-date">Feb 2025 – June 2025</p>
        <p className="exp-desc">
          Building scalable web apps, dashboards, and automation tools with the MERN stack.
        </p>
      </div>
    </div>

    <div className="exp-item">
      <div className="exp-marker"></div>
      <div className="exp-content">
        <h3 className="exp-title">Next.js Intern</h3>
        <p className="exp-company">SaralTech</p>
        <p className="exp-date">June 2025 – August 2025</p>
        <p className="exp-desc">
          Worked on learning platforms, API tools and UI-heavy productivity apps.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* ==== EDUCATION ==== */}
      <section className="about-section">
        <h2 className="section-heading">Education</h2>

        <div className="edu-item">
          <div className="edu-logo">GGI</div>

          <div>
            <h3 className="edu-degree">B.Tech in Information Technology</h3>
            <p className="edu-school">Gulzar Group of Institutes</p>
            <p className="edu-duration">2021 – 2025</p>

            <p className="edu-desc">
              Learned core CS fundamentals including DBMS, OS, DSA, Computer
              Networks and Software Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* ==== FOOTER / CONTACT ==== */}
      <section className="about-contact">
        <h2 className="section-heading">Got questions?</h2>
        <p className="contact-sub">
          I'm always excited to collaborate on new ideas and interesting
          projects!
        </p>

        <div className="contact-row">
          <div className="contact-box">
            <div className="contact-icon">✉</div>
            <div>
              <div className="contact-label">E-mail</div>
              <div className="contact-value">bhavyarathore575@gmail.com</div>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">📱</div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91 7696698784</div>
            </div>
          </div>
        </div>

        <a href="mailto:bhavyarathore575@gmail.com" className="contact-btn">
          Send an Email
        </a>
      </section>
    </div>
  );
}
