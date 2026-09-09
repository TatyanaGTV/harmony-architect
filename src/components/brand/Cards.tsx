import type { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: ReactNode;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="group flex h-full min-h-[250px] flex-col rounded-[var(--radius-card)] border border-gold/35 bg-card p-8 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover">
      <span className="text-gold transition-colors duration-300 group-hover:text-gold-light">
        {icon}
      </span>
      <h3 className="mt-6 font-heading text-[24px] leading-snug text-gold-light break-words">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">{description}</p>
    </article>
  );
}

type ApproachCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function ApproachCard({ icon, title, description }: ApproachCardProps) {
  return (
    <article className="group flex h-full min-h-[190px] flex-col rounded-[var(--radius-card)] border border-gold/25 bg-card p-6 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover">
      <span className="text-gold transition-colors duration-300 group-hover:text-gold-light">
        {icon}
      </span>
      <h3 className="mt-5 font-body text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground">
        {title}
      </h3>
      <p className="mt-2.5 text-[13.5px] leading-[1.65] text-muted-foreground">{description}</p>
    </article>
  );
}
