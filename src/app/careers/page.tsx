import type { Metadata } from "next";
import { ArrowUpRight, HardHat, ShieldCheck, TrendingUp, UsersRound } from "lucide-react";
import PageHero from "../page-hero";
import InquiryForm from "../inquiry-form";

export const metadata: Metadata = {
  title: "Careers | Freddy's Drywall LLC",
  description: "Explore a future in construction and share your experience with Freddy's Drywall LLC.",
};

const qualities = [
  { title: "Meaningful work", text: "Bring care and consistency to projects that shape the places people use.", icon: HardHat },
  { title: "Room to grow", text: "Build skills through hands-on experience, coaching, and teamwork.", icon: TrendingUp },
  { title: "Safety first", text: "Look out for the crew, the site, and the people around the work.", icon: ShieldCheck },
  { title: "Supportive team", text: "Work alongside people who value craft and respect one another.", icon: UsersRound },
];

export default function CareersPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="Careers at Freddy’s Drywall"
        title={<>Build with<br /><em>us.</em></>}
        description="Build your skills with a team that values quality work, safety, and people who take pride in what they do."
        imageClass="page-image-careers"
        imageLabel="Construction professional on an active commercial project"
        action={<a className="button button-pink" href="#career-paths">Explore career paths <ArrowUpRight size={15} /></a>}
      />
      <section className="career-section section-wrap">
        <div className="section-heading"><div><p className="eyebrow eyebrow-dark">Why build your career here?</p><h2>A stronger future.<br /><em>Together.</em></h2></div><p>Construction takes people with different strengths. Bring your experience, learn from the crew, and help make spaces that serve their communities.</p></div>
        <div className="career-values">{qualities.map(({ title, text, icon: Icon }) => <article className="career-value" key={title}><Icon size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="career-roles section-wrap" id="career-paths">
        <div className="section-heading"><div><p className="eyebrow eyebrow-dark">Areas to explore</p><h2>Bring your skills.<br /><em>Build what&apos;s next.</em></h2></div><p>These are career paths, not a list of current openings. Tell us where your experience fits and what you want to learn.</p></div>
        <div className="career-role-list">{["Drywall installer", "Painter", "Laborer", "Field leadership"].map((role, index) => <a className="career-role" href="#apply" key={role}><span className="role-index">0{index + 1}</span><strong>{role}</strong><span>Share your interest</span><ArrowUpRight size={16} /></a>)}</div>
      </section>
      <section className="career-apply">
        <div className="career-apply-image" role="img" aria-label="Construction worker reviewing a project in progress" />
        <div className="career-apply-content" id="apply"><p className="eyebrow">Apply today</p><h2>Let&apos;s build something <em>together.</em></h2><p>Share your experience and the kind of role you&apos;re interested in. This concept form saves your note in this browser.</p><InquiryForm variant="career" /></div>
      </section>
      <section className="career-bottom-cta"><div><p className="eyebrow">A career you can build on</p><h2>Become part of <em>the team.</em></h2></div><a className="button button-pink" href="#apply">Start an introduction <ArrowUpRight size={15} /></a></section>
    </main>
  );
}
