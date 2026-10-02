import {
  ArrowRight,
  BadgeCheck,
  BrickWall,
  Building2,
  Clock3,
  HardHat,
  Layers3,
  MapPin,
  Paintbrush,
  Sparkles,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export default function Home() {
  return (
    <main id="top">
      <section className="home-hero">
        <div className="home-hero-shade" />
        <div className="home-hero-content">
          <p className="eyebrow"><span /> Commercial / Residential / General contracting</p>
          <h1>Built for<br /><em>what&apos;s next.</em></h1>
          <p className="hero-lede">Construction solutions for commercial and residential projects across Nebraska and Iowa.</p>
          <div className="hero-actions">
            <a className="button button-pink" href="/contact">Request a bid <ArrowRight size={15} aria-hidden="true" /></a>
            <a className="button button-outline" href="/work">View our work <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="hero-proof">
            <div><ShieldCheck size={22} /><span>Quality<br />workmanship</span></div>
            <div><UsersRound size={22} /><span>Trusted<br />partner</span></div>
            <div><MapPin size={22} /><span>Nebraska &amp;<br />Iowa</span></div>
            <div><BadgeCheck size={22} /><span>On time<br />&amp; on budget</span></div>
          </div>
        </div>
      </section>

      <nav className="home-services-strip" aria-label="Construction services">
        <a href="/services"><Building2 /><span>General<br />contracting</span></a>
        <a href="/services"><Layers3 /><span>Drywall<br />installation</span></a>
        <a href="/services"><BrickWall /><span>Metal<br />framing</span></a>
        <a href="/services"><Paintbrush /><span>Painting</span></a>
        <a href="/services"><HardHat /><span>Selective<br />demolition</span></a>
        <a href="/services"><Sparkles /><span>Interior<br />finishes</span></a>
      </nav>

      <section className="home-story" id="about">
        <div className="home-story-image" role="img" aria-label="Finished commercial interior with architectural timber and glass" />
        <div className="home-story-copy">
          <p className="eyebrow"><span /> Why choose Freddy&apos;s Drywall</p>
          <h2>Quality work.<br /><em>Stronger spaces.</em></h2>
          <p>Freddy&apos;s Drywall LLC provides commercial and residential construction services with a focus on quality, safety, and long-term partnerships. We specialize in drywall, metal framing, painting, selective demolition, and interior finishes, helping bring architects, general contractors, and property owners&apos; visions to life across Nebraska and Iowa.</p>
          <div className="story-proof">
            <div><BadgeCheck /><span>Experienced<br />crews</span></div>
            <div><ShieldCheck /><span>Safety<br />focused</span></div>
            <div><UsersRound /><span>Reliable<br />partner</span></div>
            <div><Building2 /><span>Built for<br />what&apos;s next</span></div>
          </div>
          <a className="button button-pink" href="/about">Learn more about us <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="home-projects" id="work">
        <div className="home-section-heading"><div><span className="pink-rule" /><p>Featured project types</p></div><a href="/work">View all project types <ArrowRight size={15} /></a></div>
        <div className="home-projects-grid">
          <a className="home-project-card" href="/work"><div className="home-project-photo home-project-retail" role="img" aria-label="Retail interior with polished finish details" /><h3>Retail build-out</h3><p>Drywall · Framing · Painting</p><ArrowRight className="project-arrow" size={16} /></a>
          <a className="home-project-card" href="/work"><div className="home-project-photo home-project-commercial" role="img" aria-label="Modern commercial interior with glass partitions" /><h3>Commercial interior</h3><p>Framing · Drywall · Finishes</p><ArrowRight className="project-arrow" size={16} /></a>
          <a className="home-project-card" href="/work"><div className="home-project-photo home-project-office" role="img" aria-label="Contemporary office space" /><h3>Office space</h3><p>Drywall · Painting · Finishes</p><ArrowRight className="project-arrow" size={16} /></a>
          <a className="home-project-card" href="/work"><div className="home-project-photo home-project-multi" role="img" aria-label="Multi-level residential interior" /><h3>Multi-family interior</h3><p>Framing · Drywall · Painting</p><ArrowRight className="project-arrow" size={16} /></a>
        </div>
      </section>

      <section className="home-cta-pair">
        <article className="home-cta-project"><div><p className="eyebrow"><span /> Have a project?</p><h2>Let&apos;s build it<br /><em>together.</em></h2><p>We bring experience, people, and a commitment to quality on every project.</p><a className="button button-pink" href="/contact">Request a bid <ArrowRight size={15} /></a></div></article>
        <article className="home-cta-trades"><div><p className="eyebrow"><span /> Are you a subcontractor?</p><h2>Good work<br /><em>takes a good crew.</em></h2><p>Interested in working together? Tell us about your trade and services.</p><a className="button button-outline" href="/subcontractors">Become a subcontractor <ArrowRight size={15} /></a></div></article>
      </section>

      <section className="home-commitments" aria-label="Our commitments">
        <div><ShieldCheck /><span>Quality<br />workmanship</span></div>
        <div><UsersRound /><span>Trusted trade<br />partnerships</span></div>
        <div><MapPin /><span>Nebraska &amp; Iowa<br />service area</span></div>
        <div><Clock3 /><span>Committed to<br />the details</span></div>
      </section>
    </main>
  );
}
