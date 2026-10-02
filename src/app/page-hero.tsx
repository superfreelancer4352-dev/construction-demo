import type { ReactNode } from "react";

export type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  imageClass: string;
  imageLabel: string;
  action?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, imageClass, imageLabel, action }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className={`page-hero-image ${imageClass}`} role="img" aria-label={imageLabel} />
      <div className="page-hero-copy">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {action && <div className="page-hero-actions">{action}</div>}
      </div>
    </section>
  );
}
