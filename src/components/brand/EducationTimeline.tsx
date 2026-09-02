import type { EducationItem } from "@/data/education";
import { Reveal } from "./Reveal";

type Props = { items: EducationItem[] };

/** Vertical education timeline: alternating on desktop, left-rail on mobile. */
export function EducationTimeline({ items }: Props) {
  return (
    <ol className="relative mt-14 space-y-12 lg:space-y-20">
      {/* line: left on mobile, centered on desktop */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[11px] w-px bg-gold/50 lg:left-1/2 lg:-translate-x-1/2"
      />

      {items.map((item, i) => {
        const rightSide = i % 2 === 0;
        return (
          <Reveal as="li" key={item.year} delay={i * 110} className="relative">
            <div
              className={`grid lg:grid-cols-2 lg:gap-16 ${rightSide ? "" : "lg:[&>*]:col-start-1"}`}
            >
              {/* marker */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 left-0 flex h-[24px] w-[24px] items-center justify-center rounded-full border border-gold/40 lg:left-1/2 lg:-translate-x-1/2"
                style={{ backgroundColor: "var(--bg-primary)" }}
              >
                <span className="block h-[11px] w-[11px] rounded-full bg-gold" />
              </span>

              <div
                className={`pl-12 lg:pl-0 ${rightSide ? "lg:col-start-2" : "lg:col-start-1 lg:text-right"}`}
              >
                <p className="font-heading text-[42px] leading-none text-gold lg:text-[50px]">
                  {item.year}
                </p>
                <article
                  className={`mt-5 rounded-[18px] border bg-card p-7 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:bg-card-hover md:p-8 ${
                    item.label
                      ? "border-gold/60 shadow-[0_18px_50px_-30px_rgba(214,168,79,0.8)]"
                      : "border-gold/35 hover:border-gold"
                  }`}
                >
                  {item.label ? (
                    <p className="mb-4 font-body text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                      {item.label}
                    </p>
                  ) : null}
                  <h3 className="font-heading text-[27px] leading-tight text-gold-light">
                    {item.institution}
                  </h3>
                  {item.institutionFull ? (
                    <p className="mt-1.5 text-[13px] leading-[1.6] text-muted-foreground">
                      {item.institutionFull}
                    </p>
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={`mt-5 block h-px w-12 bg-gold/50 ${rightSide ? "" : "lg:ml-auto"}`}
                  />
                  <p className="mt-5 text-[16px] leading-[1.7] text-foreground">{item.program}</p>
                  {item.specialization ? (
                    <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
                      {item.specialization}
                    </p>
                  ) : null}
                  <p className="mt-4 font-body text-[12px] tracking-[0.12em] text-gold uppercase">
                    {item.qualification}
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
