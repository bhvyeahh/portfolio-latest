import Link from "next/link";
import Image from "next/image";
import "../../../styles/Notezen.css";

export default function NoteZenPage() {
  return (
    <div className="project-page">
      <div className="project-toprow">
        <Link href="/projects" className="back-link">‹ Back to list</Link>
      </div>

      <header className="project-header">
        <h1 className="project-title">NoteZen — Spaced Learning Platform</h1>

        <div className="project-meta">
          <div className="meta-item">
            <div className="meta-label">Date</div>
            <div className="meta-value">2025</div>
          </div>

          <div className="meta-item">
            <div className="meta-label">Tech Stack</div>
            <div className="meta-value">MERN</div>
          </div>

          <div className="meta-item">
            <div className="meta-label">Client</div>
            <div className="meta-value">Self-initiated</div>
          </div>
        </div>

        <div className="project-cta">
          <a className="btn-live" href="https://notezenn.vercel.app/" target="_blank" rel="noreferrer">
            Live Preview ↗
          </a>
        </div>
      </header>

      <section className="project-hero">
        <Image
          src="/images/note_zen.png"
          alt="NoteZen preview"
          width={1200}
          height={640}
          className="project-hero-image"
          priority
        />
      </section>

      <main className="project-content">

        {/* ---------------- Overview ---------------- */}

        <section className="project-section">
          <h2 className="section-title">Overview</h2>
          <p className="lead">
            NoteZen is a spaced-learning tool that helps users remember what they study. 
            Notes turn into small review tasks that appear at the right time, making 
            learning simple, consistent, and more effective.
          </p>
        </section>

        {/* ---------------- Problem ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Problem</h3>
          <p>
            People take notes but rarely revisit them. Without structured review, most 
            learning is forgotten. NoteZen solves this by automatically resurfacing 
            important notes before users forget them.
          </p>
        </section>

        {/* ---------------- Approach ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Approach</h3>
          <p>
            A clean UI and spaced-repetition logic work together to build a simple 
            daily learning habit. Users create notes, convert them into cards, and 
            review them through a focused, distraction-free queue.
          </p>
        </section>

        {/* ---------------- Key Features ---------------- */}

        <section className="project-section features">
          <h3 className="section-subtitle">Key Features</h3>

          <div className="features-grid">

            <div className="feature-card">
              <h4>Spaced Repetition Engine</h4>
              <p>Automatically schedules reviews based on recall performance.</p>
            </div>

            <div className="feature-card">
              <h4>Smart Notes → Cards</h4>
              <p>Create notes and convert them into simple study cards.</p>
            </div>

            <div className="feature-card">
              <h4>Daily Queue</h4>
              <p>A focused daily list showing exactly what needs review.</p>
            </div>

            <div className="feature-card">
              <h4>Progress Tracking</h4>
              <p>Streaks, retention indicators, and review stats.</p>
            </div>

            <div className="feature-card">
              <h4>Adaptive Difficulty</h4>
              <p>Easy/Medium/Hard feedback adjusts future intervals.</p>
            </div>

            <div className="feature-card">
              <h4>Import / Export</h4>
              <p>Supports Markdown export and easy content backup.</p>
            </div>

          </div>
        </section>

        {/* ---------------- Spaced Logic ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Spaced Learning Logic</h3>
          <ol className="logic-list">
            <li><strong>Create:</strong> Add short notes or convert them into cards.</li>
            <li><strong>Review:</strong> New items appear in the daily session.</li>
            <li><strong>Interval Grow:</strong> Correct answers increase interval time.</li>
            <li><strong>Reset:</strong> Incorrect answers reappear sooner.</li>
            <li><strong>Boost Mode:</strong> Optional quick-refresh before exams.</li>
          </ol>
        </section>

        {/* ---------------- Gallery ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Gallery view</h3>
          <p>
            A clean board-style preview for browsing notes and cards visually.
          </p>

          <div className="gallery-row">
            <Image 
              src="/images/note_zen-gal.png" 
              alt="NoteZen gallery 1" 
              width={1100} 
              height={520} 
              className="gallery-image"
            />
          </div>
        </section>

        {/* ---------------- Tech Stack ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Technical Stack & Architecture</h3>
          <p>
            Built using Next.js, React, and custom CSS. Backend powered by 
            Node.js and MongoDB for storing notes, cards, and review intervals. 
            Background tasks manage scheduling and review reminders.
          </p>
        </section>

        {/* ---------------- Final Thoughts ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Final thoughts</h3>
          <p>
            NoteZen makes revision effortless by turning notes into a consistent, 
            manageable habit. It’s designed to help users remember more while putting 
            in less effort.
          </p>
        </section>

      </main>
    </div>
  );
}
