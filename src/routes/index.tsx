import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Hero } from "@/components/brand/Hero";
import { Footer } from "@/components/brand/Footer";
import { ContactCTA } from "@/components/brand/ContactCTA";
import { SectionTitle } from "@/components/brand/SectionTitle";
import { ServiceCard, ApproachCard } from "@/components/brand/Cards";
import { OutlineButton } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { LeafDivider } from "@/components/brand/Leaf";
import {
  BrainIcon,
  PuzzleIcon,
  LotusIcon,
  ParentIcon,
  ScienceIcon,
  PersonIcon,
  TrustIcon,
  ResultIcon,
} from "@/components/brand/icons";

const TITLE = "Татьяна Бойраз — нейропсихолог | Развитие и гармония мозга";
const DESCRIPTION =
  "Татьяна Бойраз — нейропсихолог. Индивидуальный подход к развитию когнитивных функций, поддержке детей, подростков и взрослых.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Татьяна Бойраз",
          jobTitle: "Нейропсихолог",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: <BrainIcon />,
    title: (
      <>
        Нейропсихологическая
        <br />
        диагностика
      </>
    ),
    description: "Комплексная оценка когнитивных функций.",
  },
  {
    icon: <PuzzleIcon />,
    title: (
      <>
        Коррекционные
        <br />
        занятия
      </>
    ),
    description: "Индивидуальные программы для детей и взрослых.",
  },
  {
    icon: <LotusIcon />,
    title: (
      <>
        Эмоциональная
        <br />
        поддержка
      </>
    ),
    description: "Работа с тревожностью, стрессом и самооценкой.",
  },
  {
    icon: <ParentIcon />,
    title: (
      <>
        Консультации
        <br />
        для родителей
      </>
    ),
    description: "Рекомендации и поддержка в развитии ребёнка.",
  },
];

const APPROACH = [
  {
    icon: <ScienceIcon />,
    title: "Научная основа",
    description: "Использую доказательные методы нейропсихологии.",
  },
  {
    icon: <PersonIcon />,
    title: "Индивидуальность",
    description: "Учитываю особенности каждого клиента.",
  },
  {
    icon: <TrustIcon />,
    title: "Доверие и поддержка",
    description: "Создаю безопасное пространство для изменений.",
  },
  {
    icon: <ResultIcon />,
    title: "Результативность",
    description: "Помогаю достигать реальных и устойчивых изменений.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />

        {/* ОБО МНЕ */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] border border-gold/30"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(11,51,41,1) 0%, rgba(4,27,23,1) 100%)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <LeafDivider />
                  <p className="font-heading text-[22px] text-gold-light">Фотография специалиста</p>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Место для вашего портрета — замените изображение в разделе Assets.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionTitle align="left" id="about-title">
                Обо мне
              </SectionTitle>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
                Я — нейропсихолог, помогаю детям, подросткам и взрослым справляться с трудностями,
                связанными с вниманием, памятью, мышлением, эмоциями и поведением.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
                Моя цель — раскрыть потенциал мозга и помочь вам достичь внутренней гармонии и
                уверенности в себе.
              </p>
              <div className="mt-8">
                <OutlineButton href="#services" className="w-full sm:w-auto">
                  Узнать больше
                </OutlineButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* МОИ УСЛУГИ */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="services-title">Мои услуги</SectionTitle>
            </Reveal>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {SERVICES.map((s, i) => (
                <Reveal as="li" key={i} delay={i * 90}>
                  <ServiceCard {...s} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* МОЙ ПОДХОД */}
        <section
          id="approach"
          aria-labelledby="approach-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="approach-title">Мой подход</SectionTitle>
            </Reveal>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {APPROACH.map((a, i) => (
                <Reveal as="li" key={a.title} delay={i * 90}>
                  <ApproachCard {...a} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
