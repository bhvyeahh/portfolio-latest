import Image from "next/image";
import Link from "next/link";
import "../../styles/Projects.css";

export default function ProjectsPage() {
  return (
    <div className="projects-container">

      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtext">
        Explore cutting-edge design innovations that transform ideas into reality
      </p>

      <div className="projects-grid">

        <Link href="/projects/notezen" className="project-card">
          <Image
            src="/images/note_zen.png"
            alt="NoteZen Project"
            width={600}
            height={400}
            className="project-image"
          />
          <h3 className="project-name">NoteZen – Learning Platform</h3>
          <p className="project-year">2023 – 2024</p>
        </Link>

        <Link href="/projects/api-reviewer" className="project-card">
          <Image
            src="/images/api-reviewer.png"
            alt="TripMate Project"
            width={600}
            height={400}
            className="project-image"
          />
          <h3 className="project-name">TripMate – Travel Planner</h3>
          <p className="project-year">2023 – 2024</p>
        </Link>

      </div>
    </div>
  );
}
