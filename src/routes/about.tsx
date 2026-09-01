import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { SectionTitle } from "@/components/brand/SectionTitle";
import { GoldButton } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { LeafDivider } from "@/components/brand/Leaf";
import { NeuralBackground } from "@/components/brand/NeuralBackground";
import treeBrain from "@/assets/tree-brain.png.asset.json";

const TITLE = "Обо мне — Татьяна Бойраз, нейропсихолог";
const DESCRIPTION =
  "Татьяна Бойраз — нейропсихолог. Индивидуальный подход, бережная работа и развитие когнитивных возможностей детей, подростков и взрослых.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    num: "01",
    title: "Бережность",
    description: "Уважение к индивидуальному темпу и особенностям каждого человека.",
  },
  {
    num: "02",
    title: "Индивидуальность",
    description:
      "Не существует универсального решения — важно найти подход, который подходит именно вам.",
  },
  {
    num: "03",
    title: "Научная основа",
    description:
      "Профессиональная работа опирается на знания и современные подходы нейропсихологии.",
  },
  {
    num: "04",
    title: "Развитие",
    description: "Фокус не только на трудностях, но и на возможностях для роста.",
  },
];

const STEPS = [
  { num: "01", title: "Знакомство", description: "Определяем запрос и задачи." },
  { num: "02", title: "Диагностика", description: "Исследуем особенности когнитивной сферы." },
  {
    num: "03",
    title: "Индивидуальный план",
    description: "Формируем подход и программу работы.",
  },
  { num: "04", title: "Развитие", description: "Отслеживаем изменения и корректируем работу." },
];

const AUDIENCES = [
  {
    title: "Детям",
    description: "Помогаю разобраться с трудностями обучения, внимания, памяти и развития.",
  },
  {
    title: "Подросткам",
    description:
      "Поддерживаю в период изменений, учебных нагрузок и формирования самостоятельности.",
  },
  {
    title: "Взрослым",
    description:
      "Работаю с когнитивными трудностями, эмоциональным состоянием и вопросами развития.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section
          className="relative flex items-center overflow-hidden pt-[120px] pb-[70px] md:min-h-[560px] md:pt-[140px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
          aria-labelledby="about-hero-title"
        >
          <NeuralBackground opacity={0.12} />
          <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-body text-[12px] font-semibold tracking-[0.28em] text-gold uppercase">
                Обо мне
              </p>
              <h1
                id="about-hero-title"
                className="mt-5 font-heading text-[40px] leading-[1] font-medium text-gold-light uppercase sm:text-[48px] lg:text-[56px]"
              >
                Помогаю
                <br />
                понять возможности
                <br />
                мозга
              </h1>
              <LeafDivider align="left" className="mt-7" />
              <p className="mt-7 max-w-md text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
                Нейропсихология помогает увидеть не только трудности, но и возможности для
                развития.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <NeuralBackground opacity={0.15} className="absolute -inset-8" />
                <div
                  className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[18px] border border-gold/35 max-lg:mx-auto"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(11,51,41,1) 0%, rgba(4,27,23,1) 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <LeafDivider />
                    <p className="font-heading text-[22px] text-gold-light">
                      Фотография специалиста
                    </p>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      Место для вашего портрета — замените изображение в разделе Assets.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* КТО Я */}
        <section
          aria-labelledby="who-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionTitle align="left" id="who-title">
                Кто я
              </SectionTitle>
            </Reveal>
            <Reveal delay={120}>
              <div className="max-w-[620px] space-y-5 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                <p>
                  Я — нейропсихолог. В своей работе я помогаю детям, подросткам и взрослым лучше
                  понимать особенности своего мышления, внимания, памяти и эмоциональной сферы.
                </p>
                <p>
                  Для меня важно видеть не только проблему, но и человека за ней — его
                  индивидуальность, сильные стороны, возможности и потенциал для развития.
                </p>
                <p>
                  Я стремлюсь создавать пространство, в котором можно спокойно разобраться в
                  происходящем и найти подходящий именно вам путь.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ЦИТАТА */}
        <section
          aria-label="Акцентная цитата"
          className="py-[70px] md:py-[90px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <blockquote className="mx-auto max-w-3xl border-l border-gold/60 pl-7 md:pl-10">
                <p className="font-heading text-[26px] leading-[1.3] text-gold-light italic sm:text-[32px] lg:text-[36px]">
                  У каждого человека есть свой путь развития. Моя задача — помочь увидеть
                  возможности этого пути.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* МОЯ МИССИЯ */}
        <section
          aria-labelledby="mission-title"
          className="relative overflow-hidden py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle
                id="mission-title"
                subtitle="Помогать человеку лучше понимать себя и возможности своего мозга."
              >
                Моя миссия
              </SectionTitle>
            </Reveal>
            <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="relative mx-auto max-w-[420px]">
                  <NeuralBackground opacity={0.14} className="absolute -inset-6" />
                  <img
                    src={treeBrain.url}
                    alt="Декоративный символ — дерево, переходящее в нейронные связи мозга"
                    className="relative w-full"
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
              <Reveal delay={120}>
                <div className="max-w-[620px] space-y-5 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                  <p>
                    Я верю, что работа с когнитивными функциями — это не только про коррекцию
                    трудностей. Это возможность лучше понять себя, свои сильные стороны и способы
                    взаимодействия с окружающим миром.
                  </p>
                  <p>
                    Поэтому в работе я соединяю профессиональные знания, индивидуальный подход и
                    бережное отношение к человеку.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* МОИ ЦЕННОСТИ */}
        <section
          aria-labelledby="values-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="values-title">Мои ценности</SectionTitle>
            </Reveal>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {VALUES.map((v, i) => (
                <Reveal as="li" key={v.num} delay={i * 90}>
                  <article className="group flex min-h-[230px] flex-col rounded-[18px] border border-gold/35 bg-card p-8 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover">
                    <span className="font-heading text-[20px] text-gold transition-colors duration-300 group-hover:text-gold-light">
                      {v.num}
                    </span>
                    <h3 className="mt-5 font-heading text-[24px] leading-snug text-gold-light">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">
                      {v.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* КАК Я РАБОТАЮ */}
        <section
          aria-labelledby="process-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="process-title">Как я работаю</SectionTitle>
            </Reveal>
            <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-0">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.num} delay={i * 100}>
                  <div className="relative flex gap-5 lg:block lg:px-8">
                    {/* соединительная линия: горизонтальная на desktop, вертикальная на mobile */}
                    {i < STEPS.length - 1 ? (
                      <>
                        <span
                          aria-hidden="true"
                          className="absolute top-[26px] right-0 left-[calc(50%+40px)] hidden h-px bg-gradient-to-r from-gold/60 to-gold/15 lg:block"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute top-[52px] bottom-[-40px] left-[25px] w-px bg-gradient-to-b from-gold/60 to-gold/15 lg:hidden"
                        />
                      </>
                    ) : null}
                    <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-gold/50 bg-card font-heading text-[18px] text-gold">
                      {s.num}
                    </span>
                    <div className="lg:mt-6">
                      <h3 className="font-body text-[13px] font-semibold tracking-[0.14em] text-foreground uppercase">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 max-w-[260px] text-[14px] leading-[1.65] text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* КОМУ Я ПОМОГАЮ */}
        <section
          aria-labelledby="audience-title"
          className="py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="audience-title">Кому я помогаю</SectionTitle>
            </Reveal>
            <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
              {AUDIENCES.map((a, i) => (
                <Reveal as="li" key={a.title} delay={i * 90}>
                  <article className="group flex min-h-[200px] flex-col rounded-[18px] border border-gold/35 bg-card p-8 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover">
                    <h3 className="font-heading text-[26px] text-gold-light">{a.title}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-4 h-px w-12 bg-gold/50 transition-colors duration-300 group-hover:bg-gold"
                    />
                    <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground">
                      {a.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="about-cta-title"
          className="relative overflow-hidden py-[90px] md:py-[110px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <NeuralBackground opacity={0.14} />
          <div className="container-page relative text-center">
            <Reveal>
              <h2
                id="about-cta-title"
                className="font-heading text-[32px] leading-tight text-gold-light uppercase sm:text-[42px]"
              >
                Хотите узнать больше?
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
