import { LeafDivider } from "./Leaf";
import { Reveal } from "./Reveal";

export function ProfessionalDevelopment() {
  return (
    <section
      aria-labelledby="prof-dev-title"
      className="py-[90px] md:py-[110px]"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-page text-center">
        <Reveal>
          <h2
            id="prof-dev-title"
            className="font-heading text-[32px] leading-tight text-gold-light uppercase sm:text-[42px]"
          >
            Профессиональное развитие
          </h2>
          <LeafDivider className="mt-5" />
          <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
            Образование для меня — это не завершённый этап, а основа постоянного профессионального
            развития. Я продолжаю расширять знания, изучать современные подходы и совершенствовать
            профессиональные навыки.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
