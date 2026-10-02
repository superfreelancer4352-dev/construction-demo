import type { Metadata } from "next";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import PageHero from "../page-hero";

export const metadata: Metadata = {
  title: "About | Freddy's Drywall LLC",
  description: "A practical, people-first approach to building commercial spaces across Nebraska and Iowa.",
};

const principles = [
  { title: "Quality work", description: "Take the time to get the details right, and make decisions that hold up beyond the walkthrough.", icon: Sparkles },
  { title: "Safe, thoughtful sites", description: "Make room for good work by looking out for the people doing it and the people around it.", icon: ShieldCheck },
  { title: "Straight conversations", description: "Share context early, make the next step clear, and keep the whole team in the loop.", icon: HeartHandshake },
];

export default function AboutPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="People · Craftsmanship · Opportunity"
        title={<>About<br /><em>Freddy&apos;s.</em></>}
        description="A construction company built on hard work, quality, and opportunity."
        imageClass="page-image-about"
        imageLabel="Craft details inside a modern commercial building"
      />
      <section className="story-section section-wrap">
        <div className="story-photo" role="img" aria-label="Modern commercial lobby with timber and glass finishes" />
        <div className="story-copy"><p className="eyebrow eyebrow-dark">Our story</p><h2>Building stronger spaces and brighter opportunities.</h2><p>Freddy&apos;s Drywall LLC is an Omaha-based construction company providing commercial and residential construction services across Nebraska and Iowa. The work includes drywall, metal framing, painting, selective demolition, and interior finishes.</p><p>Today, we work with general contractors, developers, property managers, and business owners to build and improve spaces. Our focus is on quality work, clear communication, and long-term relationships.</p><a className="text-link dark-link" href="/services">Explore our services <ArrowRight size={15} /></a></div>
      </section>
      <section className="values-section">
        <div className="section-wrap"><div className="section-heading"><div><p className="eyebrow eyebrow-dark">What guides us</p><h2>Strong work.<br /><em>Shared standards.</em></h2></div><p>Simple principles make complex projects easier to navigate.</p></div>
          <div className="values-grid">{principles.map(({ title, description, icon: Icon }, index) => <article className="value-item" key={title}><span className="value-number">0{index + 1}</span><Icon size={24} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>
      <section className="credentials-section section-wrap">
        <div><p className="eyebrow eyebrow-dark">Our commitments</p><h2>Built on<br /><em>good standards.</em></h2><p>We bring care, accountability, and attention to detail to the work and the people around it.</p></div>
        <div className="credentials-grid"><article><ShieldCheck /><strong>Safety focused</strong><span>People and sites come first.</span></article><article><Sparkles /><strong>Quality work</strong><span>Finish the details with care.</span></article><article><MapPin /><strong>Nebraska &amp; Iowa</strong><span>Rooted in the region.</span></article><article><UsersRound /><strong>Trade partners</strong><span>Good work is built together.</span></article></div>
      </section>
      <section className="about-close section-wrap"><div><p className="eyebrow eyebrow-dark">Nebraska &amp; Iowa</p><h2>Built close<br />to <em>home.</em></h2></div><p>From a first look at the plans to the final walkthrough, the goal is a good working relationship and a space that is ready for what comes next.</p><a className="button button-pink" href="/contact">Get in touch <ArrowRight size={15} /></a></section>
      <section className="about-cta"><div><p className="eyebrow">Let&apos;s work together</p><h2>Have a project?<br /><em>Let&apos;s build it together.</em></h2><a className="button button-pink" href="/contact">Request a bid <ArrowRight size={15} /></a></div></section>
    </main>
  );
}
