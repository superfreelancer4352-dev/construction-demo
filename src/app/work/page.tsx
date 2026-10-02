import type { Metadata } from "next";
import PageHero from "../page-hero";
import WorkGallery from "./work-gallery";

export const metadata: Metadata = {
  title: "Our Work | Freddy's Drywall LLC",
  description: "Explore commercial construction, interiors, and renovation project types.",
};

export default function WorkPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Spaces for real life"
        title={<>Our<br /><em>work.</em></>}
        description="A look at commercial and residential project types across Nebraska and Iowa."
        imageClass="page-image-work"
        imageLabel="Bright commercial interior with metal and glass detailing"
      />
      <section className="gallery-section section-wrap">
        <div className="section-heading"><div><p className="eyebrow eyebrow-dark">Project types</p><h2>Built around<br /><em>what matters.</em></h2></div><p>Browse representative project categories. Replace these examples with completed work before launch.</p></div>
        <WorkGallery />
      </section>
      <section className="featured-work">
        <div className="featured-work-copy"><p className="eyebrow"><span /> Featured project type</p><h2>Commercial<br /><em>renovation.</em></h2><p>A thoughtful interior renovation brings multiple trades together, from metal framing and drywall to paint and finish work.</p><div className="featured-tags"><span>Commercial</span><span>Drywall</span><span>Framing</span><span>Finishes</span></div><a className="button button-pink" href="/contact">Discuss a project</a></div>
        <div className="featured-work-image" role="img" aria-label="Modern commercial interior with custom reception area" />
      </section>
      <section className="page-cta"><p className="eyebrow">Have a space in mind?</p><h2>Let&apos;s make<br /><em>it happen.</em></h2><a className="button button-pink" href="/contact">Start a conversation</a></section>
    </main>
  );
}
