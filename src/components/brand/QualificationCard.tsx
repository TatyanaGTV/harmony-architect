import type { QualificationItem } from "@/data/education";

export function QualificationCard({ item }: { item: QualificationItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[18px] border border-gold/35 bg-card p-7 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover md:p-8">
      <p className="font-body text-[11px] font-semibold tracking-[0.16em] text-gold/80 uppercase">
        Повышение квалификации
      </p>
      <p className="mt-3 font-heading text-[36px] leading-none text-gold">{item.year}</p>
      <h3 className="mt-4 font-heading text-[25px] leading-tight text-gold-light">
        {item.institution}
      </h3>
      {item.institutionFull ? (
        <p className="mt-1.5 text-[13px] leading-[1.6] text-muted-foreground">
          {item.institutionFull}
        </p>
      ) : null}
      <span
        aria-hidden="true"
        className="mt-5 block h-px w-12 bg-gold/50 transition-colors duration-300 group-hover:bg-gold"
      />
      <p className="mt-5 text-[15.5px] leading-[1.7] text-foreground">{item.program}</p>
      <p className="mt-auto pt-5 text-[13.5px] leading-[1.6] text-muted-foreground">
        Преподаватель: {item.teacher}
      </p>
    </article>
  );
}
