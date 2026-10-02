import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Building2, HardHat, Layers3, Paintbrush, PanelsTopLeft, Sparkles } from "lucide-react";
import PageHero from "../page-hero";
import ServiceAreaMap from "../service-area-map";

export const metadata: Metadata = {
  title: "Services | Freddy's Drywall LLC",
  description: "Commercial construction, interiors, renovation, millwork, and preconstruction services.",
};

const services = [
  { number: "01", title: "General contracting", description: "Project management, trade coordination, and complete construction solutions for commercial and residential projects.", icon: Building2, media: "general" },
  { number: "02", title: "Drywall installation", description: "Expert installation, finishing, and repair for commercial and residential spaces, with attention to detail.", icon: Layers3, media: "drywall" },
  { number: "03", title: "Metal framing", description: "Light-gauge metal framing for interior and exterior applications, engineered for strength and precision.", icon: PanelsTopLeft, media: "framing" },
  { number: "04", title: "Painting", description: "Interior and exterior painting, coatings, and specialty finishes to bring your vision to life.", icon: Paintbrush, media: "painting" },
  { number: "05", title: "Selective demolition", description: "Interior and exterior demolition with careful coordination around occupied spaces and existing structures.", icon: HardHat, media: "demolition" },
  { number: "06", title: "Interior finishes", description: "Acoustical ceilings, insulation, wall protection, and custom finishes for functional, modern spaces.", icon: Sparkles, media: "finishes" },
];

export default function ServicesPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="The work behind the work"
        title={<>Comprehensive<br /><em>construction services.</em></>}
        description="From start to finish, Freddy’s Drywall LLC provides construction solutions for commercial and residential projects across Nebraska and Iowa."
        imageClass="page-image-services"
        imageLabel="Contemporary commercial interior with timber construction details"
      />
      <section className="service-page section-wrap">
        <div className="section-heading">
          <div><p className="eyebrow eyebrow-dark">Our services</p><h2>Complete solutions.<br /><em>Higher standards.</em></h2></div>
          <p>From start to finish, bring the trades, planning, and finishing details together with one clear team.</p>
        </div>
        <div className="service-page-grid">
          {services.map(({ number, title, description, icon: Icon, media }) => (
            <article className="service-page-item" key={number}>
              <div className={`service-page-photo service-visual-${media}`} aria-hidden="true"><Icon size={34} strokeWidth={1.4} /></div>
              <div className="service-page-body"><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><a href="/contact" aria-label={`Ask about ${title}`}>Learn more <ArrowUpRight size={15} /></a></div>
            </article>
          ))}
        </div>
      </section>
      <section className="process-band">
        <div className="section-wrap process-inner">
          <div><p className="eyebrow">A steady process</p><h2>Good work is<br /><em>built together.</em></h2></div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Plan</h3><p>Listen, assess needs, and build a detailed project plan together.</p></div></li>
            <li><span>02</span><div><h3>Execute</h3><p>Coordinate the right people and keep the work moving with care.</p></div></li>
            <li><span>03</span><div><h3>Communicate</h3><p>Share progress and keep decisions clear from start to finish.</p></div></li>
            <li><span>04</span><div><h3>Deliver</h3><p>Complete the work with attention to quality, schedule, and detail.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="service-area section-wrap">
        <div className="area-copy"><p className="eyebrow eyebrow-dark">Service areas</p><h2>Proudly serving<br /><em>Nebraska &amp; Iowa.</em></h2><p>Commercial and residential construction for communities across Nebraska and Iowa.</p><a className="button button-pink" href="/work">View our work <ArrowRight size={15} /></a></div>
        <ServiceAreaMap className="area-map service-area-map" />
      </section>
      <section className="page-cta"><p className="eyebrow">Have a project taking shape?</p><h2>Let&apos;s make room<br /><em>for what&apos;s next.</em></h2><a className="button button-pink" href="/contact">Talk through your project <ArrowUpRight size={15} /></a></section>
    </main>
  );
}
