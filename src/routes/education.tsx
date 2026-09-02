import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { SectionTitle } from "@/components/brand/SectionTitle";
import { GoldButton } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { LeafDivider } from "@/components/brand/Leaf";
import { NeuralBackground } from "@/components/brand/NeuralBackground";
import { EducationTimeline } from "@/components/brand/EducationTimeline";
import { QualificationCard } from "@/components/brand/QualificationCard";
import { EducationInsightCard } from "@/components/brand/EducationInsightCard";
import { ProfessionalDevelopment } from "@/components/brand/ProfessionalDevelopment";
import { educationInsights, educationItems, qualificationItems } from "@/data/education";
import treeBrain from "@/assets/tree-brain.png.asset.json";

const TITLE = "Образование — Татьяна Бойраз, нейропсихолог";
const DESCRIPTION =
  "Профессиональное образование Татьяны Бойраз: специальная психология, клиническая психология, нейропсихология, диагностика, коррекция, нейропсихологическая реабилитация и системное консультирование.";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/education" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

/** Thin decorative graphic: roots → trunk → branches → neural links. */
function RootsToBranches() {
  return (
    <div className="container-page" aria-hidden="true">
      <svg viewBox="0 0 400 120" className="mx-auto h-[110px] w-full max-w-[520px]" fill="none">
        <g stroke="var(--gold)" strokeWidth="0.8" strokeLinecap="round" opacity="0.45">
          <path d="M200 120V70" />
          <path d="M200 96c-18 6-30 12-42 22M200 96c18 6 30 12 42 22" />
          <path d="M200 108c-26 2-42 6-58 12M200 108c26 2 42 6 58 12" />
          <path d="M200 70c-22-8-36-20-46-36M200 70c22-8 36-20 46-36" />
          <path d="M200 58c-14-12-22-26-26-42M200 58c14-12 22-26 26-42" />
          <path d="M154 34c-16-4-28-10-38-18M246 34c16-4 28-10 38-18" />
        </g>
        <g fill="var(--gold-bright)" opacity="0.6">
          {[
            [116, 16],
            [154, 34],
            [174, 16],
            [200, 70],
            [226, 16],
            [246, 34],
            [284, 16],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function EducationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section
          className="relative flex items-center overflow-hidden pt-[120px] pb-[70px] md:min-h-[540px] md:pt-[140px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
          aria-labelledby="education-hero-title"
        >
          <NeuralBackground opacity={0.14} />
          <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <p className="font-body text-[12px] font-semibold tracking-[0.28em] text-gold uppercase">
                Профессиональный путь
              </p>
              <h1
                id="education-hero-title"
                className="mt-5 font-heading text-[40px] leading-[1] font-medium text-gold-light uppercase sm:text-[48px] lg:text-[60px]"
              >
                Моё
                <br />
                образование
              </h1>
              <LeafDivider align="left" className="mt-7" />
              <p className="mt-7 max-w-lg text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
                Знания, профессиональное развитие и постоянное совершенствование — основа
                качественной работы.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto max-w-[320px] lg:max-w-[380px]">
                <img
                  src={treeBrain.url}
                  alt="Декоративный символ бренда — дерево, переходящее в нейронные связи"
                  className="w-full opacity-90"
                  style={{
                    maskImage:
                      "radial-gradient(closest-side circle at 50% 50%, #000 82%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(closest-side circle at 50% 50%, #000 82%, transparent 100%)",
                  }}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ВВОДНАЯ СЕКЦИЯ */}
        <section
          aria-labelledby="path-title"
          className="py-[80px] md:py-[100px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="path-title">Мой профессиональный путь</SectionTitle>
            </Reveal>
            <Reveal delay={100}>
              <div className="mx-auto mt-10 max-w-[760px] space-y-5 text-center text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                <p>
                  Моё профессиональное образование формировалось последовательно — от специальной
                  психологии к клинической психологии, нейропсихологии и системному
                  консультированию.
                </p>
                <p>
                  Параллельно с основным образованием я постоянно расширяла профессиональные знания
                  на специализированных курсах повышения квалификации, уделяя особое внимание
                  нейропсихологии детского возраста, диагностике, коррекции и нейропсихологической
                  реабилитации.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ОСНОВНОЕ ОБРАЗОВАНИЕ */}
        <section
          aria-labelledby="main-education-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="main-education-title">Основное образование</SectionTitle>
            </Reveal>
            <EducationTimeline items={educationItems} />
          </div>
        </section>

        {/* ДЕКОРАТИВНАЯ МЕТАФОРА */}
        <div className="pb-4" style={{ backgroundColor: "var(--bg-primary)" }}>
          <RootsToBranches />
        </div>

        {/* ПОВЫШЕНИЕ КВАЛИФИКАЦИИ */}
        <section
          aria-labelledby="qualification-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle
                id="qualification-title"
                subtitle="Профессиональные знания требуют постоянного обновления. Дополнительное обучение позволило мне углубить знания в области нейропсихологии, диагностики, коррекции, реабилитации и работы с детьми и семьями."
              >
                Повышение квалификации
              </SectionTitle>
            </Reveal>
            <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
              {qualificationItems.map((item, i) => (
                <Reveal as="li" key={`${item.year}-${item.institution}`} delay={i * 90}>
                  <QualificationCard item={item} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* АКЦЕНТ НА НЕЙРОПСИХОЛОГИИ */}
        <section
          aria-labelledby="neuro-focus-title"
          className="relative overflow-hidden py-[80px] md:py-[100px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <NeuralBackground opacity={0.14} />
          <div className="container-page relative">
            <Reveal>
              <div className="mx-auto max-w-[820px] rounded-[24px] border border-gold/35 p-8 text-center md:p-12">
                <h2
                  id="neuro-focus-title"
                  className="font-heading text-[26px] leading-tight text-gold-light uppercase sm:text-[34px]"
                >
                  Нейропсихология — основа моей профессиональной специализации
                </h2>
                <LeafDivider className="mt-5" />
                <p className="mx-auto mt-6 max-w-[640px] text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                  Мой профессиональный путь последовательно связан с изучением нейропсихологии — от
                  раннего обучения до специализации в диагностике, коррекции и нейропсихологической
                  реабилитации.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ЧТО ДАЛО МНЕ ОБРАЗОВАНИЕ */}
        <section
          aria-labelledby="insights-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="insights-title">Что дало мне образование</SectionTitle>
            </Reveal>
            <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
              {educationInsights.map((item, i) => (
                <Reveal as="li" key={item.num} delay={i * 90}>
                  <EducationInsightCard {...item} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <ProfessionalDevelopment />

        {/* CTA */}
        <section
          aria-labelledby="education-cta-title"
          className="relative overflow-hidden py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <NeuralBackground opacity={0.14} />
          <div className="container-page relative text-center">
            <Reveal>
              <h2
                id="education-cta-title"
                className="font-heading text-[32px] leading-tight text-gold-light uppercase sm:text-[42px]"
              >
                Если вы ищете специалиста
              </h2>
              <LeafDivider className="mt-5" />
              <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.7] text-muted-foreground sm:text-base">
                Буду рада познакомиться и обсудить ваш запрос.
              </p>
              <div className="mt-9">
                <GoldButton href="/#contacts" className="w-full sm:w-auto">
                  Записаться на консультацию
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
