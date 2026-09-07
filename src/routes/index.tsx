import { useState } from "react";
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

const TITLE = "Татьяна Бойраз — нейропсихолог | Нейропсихология детского возраста";
const DESCRIPTION =
  "Татьяна Бойраз — нейропсихолог детского возраста. Помогает понять, как развивается мозг и как ему помочь: диагностика, коррекция, скорочтение, консультирование.";

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
    description: "Оценка актуального состояния когнитивных функций",
  },
  {
    icon: <PuzzleIcon />,
    title: (
      <>
        Нейропсихологическая
        <br />
        коррекция
      </>
    ),
    description: "Индивидуальные программы коррекции",
  },
  {
    icon: <LotusIcon />,
    title: "Скорочтение",
    description: "Развитие навыков эффективного чтения",
  },
  {
    icon: <ParentIcon />,
    title: "Консультирование",
    description: "Индивидуальное и семейное",
  },
];

const APPROACH = [
  {
    icon: <ScienceIcon />,
    title: "Профессионализм",
    description: "Использую только проверенные и эффективные методы",
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

const FAQ = [
  {
    question: "Как долго длится коррекция?",
    answer:
      "Минимальный курс нейропсихологической коррекции составляет 4 месяца. Общая длительность зависит от возраста ребёнка и выраженности учебных трудностей.",
  },
  {
    question: "Можно ли начать занятия без диагностики?",
    answer:
      "Нет. Диагностика позволяет выявить причины трудностей, их механизм. На основе данных диагностики составляется коррекционная программа.",
  },
  {
    question: "Эффективно ли заниматься онлайн?",
    answer:
      "Да, при условии соблюдения технических требований к проведению занятий, а также выполнения рекомендаций специалиста и домашних заданий.",
  },
  {
    question: "После 12 лет уже поздно обращаться к нейропсихологу?",
    answer:
      "Нет. Мозг развивается до 25 лет. Поэтому при необходимости обращаться к нейропсихологу можно и нужно в любом возрасте.",
  },
  {
    question: "Чем занимается нейропсихолог?",
    answer:
      "Помогает восстанавливать работу мозга у взрослых и детей после ДТП, инсультов, а также развивать высшие психические функции (ВПФ), такие как: память, восприятие, внимание, мышление, речь у детей, имеющих трудности обучения по тем или иным причинам.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/25">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-[19px] leading-snug text-gold-light sm:text-[22px]">
          {question}
        </span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-8 text-[14.5px] leading-[1.75] text-muted-foreground sm:text-[15.5px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

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
                Я — нейропсихолог, специалист по работе с дискалькулией и развитию навыков
                эффективного чтения.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-base">
                Я — разработчик браузерных коррекционно-развивающих игр для онлайн-занятий для
                нейропсихологов, логопедов, дефектологов.
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
              <SectionTitle id="services-title">Чем я могу помочь</SectionTitle>
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

        {/* ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="faq-title">Часто задаваемые вопросы</SectionTitle>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-12 max-w-3xl border-t border-gold/25">
                {FAQ.map((item) => (
                  <FaqItem key={item.question} {...item} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
