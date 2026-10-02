import type { Metadata } from "next";
import { ArrowUpRight, MapPin, MessageCircle, MoveRight } from "lucide-react";
import PageHero from "../page-hero";
import InquiryForm from "../inquiry-form";
import ServiceAreaMap from "../service-area-map";

export const metadata: Metadata = {
  title: "Contact | Freddy's Drywall LLC",
  description: "Start a conversation about a commercial construction or renovation project.",
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Good things start with a conversation"
        title={<>Get in<br /><em>touch.</em></>}
        description="Have a project, a question, or an idea taking shape? Let’s build a plan together."
        imageClass="page-image-contact"
        imageLabel="Interior construction in progress inside a commercial building"
      />
      <section className="contact-page section-wrap">
        <div className="contact-details">
          <p className="eyebrow eyebrow-dark">A good place to start</p><h2>Tell us what<br /><em>you have in mind.</em></h2>
          <p>Share a few details and the right conversation can begin. This concept form saves your note in this browser.</p>
          <div className="contact-detail-row"><MapPin size={20} /><div><strong>Service area</strong><span>Nebraska &amp; Iowa</span></div></div>
          <div className="contact-detail-row"><MessageCircle size={20} /><div><strong>Project conversations</strong><span>Commercial · Interiors · Renovation</span></div></div>
          <a className="text-link dark-link" href="/services">Explore services <MoveRight size={16} /></a>
          <ServiceAreaMap className="contact-area-map" />
        </div>
        <div className="contact-form-wrap"><div className="contact-form-heading"><h3>Request a bid</h3><span>01 / PROJECT</span></div><InquiryForm variant="project" /></div>
      </section>
      <section className="contact-ribbon"><span>Commercial construction</span><span>Thoughtful interiors</span><span>Good people, good work</span><a href="/about">Meet the team concept <ArrowUpRight size={14} /></a></section>
    </main>
  );
}
