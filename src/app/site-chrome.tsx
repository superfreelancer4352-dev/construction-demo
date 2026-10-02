import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MobileNav from "./mobile-nav";

type SiteChromeProps = {
  children: ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Freddy's Drywall home">
          <span className="brand-mark">F<span>D</span></span>
          <span className="brand-name">FREDDY&apos;S <small>DRYWALL LLC</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <a href="/services">Services</a>
          <a href="/work">Our work</a>
          <a href="/about">About</a>
          <a href="/subcontractors">Subcontract</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="button button-pink header-cta" href="/contact">
          Request a bid <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <MobileNav />
      </header>
      {children}
      <footer className="site-footer">
        <Link className="brand footer-brand" href="/" aria-label="Freddy's Drywall home">
          <span className="brand-mark">F<span>D</span></span>
          <span className="brand-name">FREDDY&apos;S <small>DRYWALL LLC</small></span>
        </Link>
        <p>Built for what&apos;s next.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/services">Services</a>
          <a href="/work">Our work</a>
          <a href="/about">About</a>
          <a href="/subcontractors">Subcontractors</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="footer-region"><div className="footer-states"><span>NE</span><span>IA</span></div><span>Nebraska &amp; Iowa<br />Service area</span></div>
        <a className="button button-pink footer-cta" href="/contact">Request a bid <ArrowUpRight size={14} /></a>
        <span className="footer-legal">© 2026 Freddy&apos;s Drywall LLC <span>Concept site</span></span>
      </footer>
    </>
  );
}
