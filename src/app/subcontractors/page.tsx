import type { Metadata } from "next";
import { ArrowRight, Bolt, BrickWall, HardHat, Paintbrush, PanelsTopLeft, PlugZap, Wrench } from "lucide-react";
import PageHero from "../page-hero";
import InquiryForm from "../inquiry-form";

export const metadata: Metadata = {
  title: "Subcontractors | Freddy's Drywall LLC",
  description: "Connect with Freddy's Drywall LLC about subcontracting and trade partnerships.",
};

const trades = [
  { name: "Drywall", icon: PanelsTopLeft }, { name: "Metal framing", icon: Wrench },
  { name: "Painting", icon: Paintbrush }, { name: "Demolition", icon: HardHat },
  { name: "Concrete", icon: BrickWall }, { name: "Electrical", icon: Bolt },
  { name: "Mechanical", icon: PlugZap }, { name: "Flooring", icon: PanelsTopLeft },
];

export default function SubcontractorsPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Trade partners · Nebraska & Iowa"
        title={<>Work<br /><em>together.</em></>}
        description="We work with qualified subcontractors across Nebraska and Iowa. Let’s build strong projects through clear communication and good work."
        imageClass="page-image-subcontract"
        imageLabel="Commercial construction site with the project team at work"
        action={<a className="button button-pink" href="#partner-form">Become a subcontractor <ArrowRight size={15} /></a>}
      />
      <section className="trade-section section-wrap">
        <div className="trade-intro"><p className="eyebrow eyebrow-dark">Trades we work with</p><h2>Good work<br /><em>takes a good crew.</em></h2><p>We value skilled trade partners who take pride in their craft, communicate clearly, and look out for the crew.</p></div>
        <div className="trade-grid">{trades.map(({ name, icon: Icon }) => <div className="trade-tile" key={name}><Icon size={22} strokeWidth={1.5} /><span>{name}</span></div>)}</div>
      </section>
      <section className="partner-values"><div><strong>Quality work</strong><span>Care in every detail.</span></div><div><strong>Clear coordination</strong><span>Good communication on site.</span></div><div><strong>Strong partnerships</strong><span>Respect for every trade.</span></div></section>
      <section className="form-section">
        <div className="form-section-image" role="img" aria-label="Skilled tradesperson working on a construction project" />
        <div className="form-section-content" id="partner-form"><p className="eyebrow eyebrow-dark">Become a subcontractor</p><h2>Bring your<br /><em>best work.</em></h2><p>Tell us about your company, trade, service area, and the kind of projects you take on.</p><InquiryForm variant="subcontractor" /></div>
      </section>
    </main>
  );
}
