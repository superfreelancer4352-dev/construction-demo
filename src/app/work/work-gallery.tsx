"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Commercial", "Residential", "Retail", "Office", "Framing", "Painting", "Renovation", "Demolition", "Finishes"] as const;
type Category = (typeof categories)[number];

type WorkItem = {
  title: string;
  kind: string;
  categories: Category[];
  photo: string;
  description: string;
};

const projects: WorkItem[] = [
  { title: "Retail build-out", kind: "Drywall · Framing · Painting", categories: ["Commercial", "Retail", "Framing", "Painting", "Finishes"], photo: "work-retail", description: "Retail interior with timber details and a welcoming customer area" },
  { title: "Commercial interior", kind: "Framing · Drywall · Finishes", categories: ["Commercial", "Framing", "Finishes"], photo: "work-buildout", description: "Bright commercial interior with glass partitions" },
  { title: "Office space", kind: "Drywall · Painting · Finishes", categories: ["Commercial", "Office", "Painting", "Finishes"], photo: "work-office", description: "Light-filled office with collaborative work tables" },
  { title: "Multi-family interior", kind: "Framing · Drywall · Painting", categories: ["Residential", "Framing", "Painting"], photo: "work-residential", description: "Multi-family interior with contemporary finish work" },
  { title: "New construction", kind: "Metal framing · Drywall", categories: ["Commercial", "Residential", "Framing"], photo: "work-frame", description: "Interior framing in a commercial construction space" },
  { title: "Restaurant interior", kind: "Drywall · Painting · Finishes", categories: ["Commercial", "Retail", "Painting", "Finishes"], photo: "work-restaurant", description: "Restaurant interior with warm lighting and modern details" },
  { title: "Industrial facility", kind: "Framing · Drywall · Demolition", categories: ["Commercial", "Framing", "Demolition"], photo: "work-industrial", description: "Commercial industrial space with exposed framing" },
  { title: "Healthcare facility", kind: "Drywall · Framing · Finishes", categories: ["Commercial", "Framing", "Finishes"], photo: "work-healthcare", description: "Modern healthcare interior with durable finishes" },
  { title: "Education facility", kind: "Drywall · Painting · Finishes", categories: ["Commercial", "Painting", "Finishes"], photo: "work-education", description: "Bright learning space with glass walls and open circulation" },
];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter project types">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "filter-button active" : "filter-button"}
            type="button"
            aria-pressed={activeCategory === category}
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid" aria-live="polite">
        {visibleProjects.map((project) => (
          <article className="gallery-card" key={project.title}>
            <div className={`gallery-photo ${project.photo}`} role="img" aria-label={project.description} />
            <div className="gallery-card-meta"><div><h3>{project.title}</h3><p>{project.kind}</p></div><ArrowUpRight size={17} aria-hidden="true" /></div>
          </article>
        ))}
      </div>
    </>
  );
}
