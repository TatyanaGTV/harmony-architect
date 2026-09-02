type Props = {
  num: string;
  title: string;
  description: string;
};

export function EducationInsightCard({ num, title, description }: Props) {
  return (
    <article className="group flex h-full min-h-[220px] flex-col rounded-[18px] border border-gold/35 bg-card p-8 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover">
      <span className="font-heading text-[20px] text-gold transition-colors duration-300 group-hover:text-gold-light">
        {num}
      </span>
      <h3 className="mt-5 font-body text-[13px] font-semibold tracking-[0.14em] text-foreground uppercase">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">{description}</p>
    </article>
  );
}
