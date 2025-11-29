import Link from "next/link";
import Image from "next/image";
import "../../../styles/Notezen.css"; // using same style file

export default function ApiReviewerPage() {
  return (
    <div className="project-page">
      <div className="project-toprow">
        <Link href="/projects" className="back-link">‹ Back to list</Link>
      </div>

      <header className="project-header">
        <h1 className="project-title">AI-API Reviewer — CLI Tool</h1>

        <div className="project-meta">
          <div className="meta-item">
            <div className="meta-label">Date</div>
            <div className="meta-value">2025</div>
          </div>

          <div className="meta-item">
            <div className="meta-label">Service</div>
            <div className="meta-value">AI · Backend · CLI Engineering</div>
          </div>

          <div className="meta-item">
            <div className="meta-label">Client</div>
            <div className="meta-value">Self-initiated</div>
          </div>
        </div>

        <div className="project-cta">
          <a
            className="btn-live"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <section className="project-hero">
        <Image
          src="/images/api-reviewer.png"
          alt="AI API Reviewer preview"
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
            AI-API Reviewer is a command-line tool that scans API responses or
            request objects and instantly reviews them using an AI model.
            It helps developers validate APIs faster, catch issues early,
            and maintain cleaner backend logic.
          </p>
        </section>

        {/* ---------------- Problem ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Problem</h3>
          <p>
            API debugging usually requires manual checks, repetitive console.logs,
            and switching between tools. Developers often miss inconsistent fields,
            incorrect types, or poor response structures.  
            This tool solves these issues by giving instant AI-powered feedback.
          </p>
        </section>

        {/* ---------------- Approach ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Approach</h3>
          <p>
            The goal was to create a fast, offline-friendly CLI that integrates with
            any workflow. The tool reads raw JSON, analyzes API structure, detects
            issues, and generates improvement suggestions — all within seconds.
          </p>
        </section>

        {/* ---------------- Key Features ---------------- */}

        <section className="project-section features">
          <h3 className="section-subtitle">Key Features</h3>

          <div className="features-grid">

            <div className="feature-card">
              <h4>AI-Powered Review</h4>
              <p>Instant feedback on API structure, naming, and consistency.</p>
            </div>

            <div className="feature-card">
              <h4>Error & Issue Detection</h4>
              <p>Finds missing fields, wrong types, or unoptimized responses.</p>
            </div>

            <div className="feature-card">
              <h4>Readable Suggestions</h4>
              <p>Generates actionable improvements for backend developers.</p>
            </div>

            <div className="feature-card">
              <h4>CLI-First</h4>
              <p>Runs directly from terminal with a single command.</p>
            </div>

            <div className="feature-card">
              <h4>Local JSON Analysis</h4>
              <p>Accepts file input, copy-paste input, or piped output.</p>
            </div>

            <div className="feature-card">
              <h4>Lightweight & Fast</h4>
              <p>No heavy UI or tooling — built for speed and simplicity.</p>
            </div>

          </div>
        </section>

        {/* ---------------- Logic ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">How it Works</h3>
          <ol className="logic-list">
            <li><strong>Input:</strong> Developer passes JSON (from file or clipboard).</li>
            <li><strong>Parse:</strong> The tool structures and validates the payload.</li>
            <li><strong>Analyze:</strong> AI checks clarity, naming, structure, and errors.</li>
            <li><strong>Review:</strong> Generates improvement suggestions.</li>
            <li><strong>Refine:</strong> Developers fix and re-run until clean.</li>
          </ol>
        </section>

        {/* ---------------- Gallery ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Preview</h3>
          <p>A simple terminal-based interface showing structured output and suggestions.</p>

          <div className="gallery-row">
            <Image 
              src="/images/api-gal.png"
              alt="AI reviewer gallery"
              width={1100}
              height={520}
              className="gallery-image"
            />
          </div>
        </section>

        {/* ---------------- Tech Stack ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Tech Stack & Architecture</h3>
          <p>
            Built using Node.js, Commander.js, and OpenAI’s API.  
            The tool parses JSON locally, sends structured prompts to the model,  
            and displays the results in a clean terminal output.
          </p>
        </section>

        {/* ---------------- Final Thoughts ---------------- */}

        <section className="project-section">
          <h3 className="section-subtitle">Final thoughts</h3>
          <p>
            AI-API Reviewer speeds up backend development by automating API review.  
            It’s designed as a small companion tool for developers who want quick  
            feedback without switching tools or writing extra debug code.
          </p>
        </section>

      </main>
    </div>
  );
}
