import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { GoldButton, OutlineButton } from "@/components/brand/Buttons";
import { LeafDivider } from "@/components/brand/Leaf";
import { Reveal } from "@/components/brand/Reveal";
import { NeuralBackground } from "@/components/brand/NeuralBackground";

const TITLE = "Чем я могу помочь — Татьяна Бойраз, нейропсихолог";
const DESCRIPTION =
  "Нейропсихологическая диагностика, коррекция, скорочтение и консультирование. Стоимость и подробное описание услуг нейропсихолога Татьяны Бойраз.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES_CARDS = [
  { title: "Нейропсихологическая диагностика", price: "6 000 ₽", anchor: "#diagnostika" },
  { title: "Нейропсихологическая коррекция", price: "3 000 ₽", anchor: "#korrekciya" },
  { title: "Скорочтение", price: "1 250 ₽", anchor: "#skorochtenie" },
  {
    title: "Системное и краткосрочное стратегическое консультирование",
    price: "3 500 ₽",
    anchor: "#consulting",
  },
];

const SIGNS = [
  "пропускает буквы на письме",
  "пишет предложение с маленькой буквы и не ставит точку в конце, хотя знает правила",
  "пишет зеркально отдельные буквы или целые слова и предложения",
  'делает "глупые" ошибки',
  '"витает в облаках"',
  'пишет "как курица лапой"',
  '"может" учиться хорошо, но "не хочет"',
  '"ленивый"',
  "буквы разного размера",
  "неровный почерк",
  "задачи из двух, трех и более действий решает в одно",
  "начинает писать с середины листа",
  "медленно считает, медленно пишет, медленно читает",
  "неусидчив",
  "быстро устает",
  "постоянно ерзает на стуле",
  "очень долго делает уроки дома",
  "не может делать уроки самостоятельно",
  "медлительный",
];

const WORKS_WITH = [
  "тревожностью",
  "фобиями и страхами",
  "ОКР",
  "отношениями",
  "семьями",
  "самооценкой",
  "уверенностью в себе",
];

function Price({ children }: { children: string }) {
  return (
    <p className="font-heading text-[30px] text-gold-light sm:text-[34px]">
      {children}
    </p>
  );
}

function SubTitle({ children }: { children: string }) {
  return (
    <h3 className="font-heading text-[26px] text-gold-light sm:text-[32px]">{children}</h3>
  );
}

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden pt-[150px] pb-10 md:pt-[180px] md:pb-14"
          style={{
            background:
              "radial-gradient(120% 90% at 78% 30%, rgba(11,51,41,0.9) 0%, rgba(6,31,26,1) 60%), var(--gradient-page)",
          }}
        >
          <NeuralBackground opacity={0.18} />
          <div className="container-page relative text-center">
            <h1 className="font-heading text-[36px] leading-tight tracking-[0.01em] text-gold-gradient sm:text-[48px] lg:text-[58px]">
              Чем я могу помочь
            </h1>
            <LeafDivider className="mt-6" />
          </div>
        </section>

        {/* КАРТОЧКИ УСЛУГ */}
        <section
          className="pt-[42px] pb-[70px] md:pt-[54px] md:pb-[90px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-7">
              {SERVICES_CARDS.map((s, i) => (
                <Reveal as="li" key={s.anchor} delay={i * 90} className="h-full">
                  <article className="flex h-full min-h-[270px] flex-col rounded-[var(--radius-card)] border border-gold/35 bg-card p-7 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-gold hover:bg-card-hover">
                    <h2 className="font-heading text-[22px] leading-snug text-gold-light break-words">
                      {s.title}
                    </h2>
                    <div className="flex-1" aria-hidden="true" />
                    <p className="font-heading text-[28px] text-gold-bright">{s.price}</p>
                    <div className="pt-6">
                      <OutlineButton href={s.anchor} withLeaf={false} className="px-6 py-3 text-[12px]">
                        Подробнее
                      </OutlineButton>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ДИАГНОСТИКА */}
        <section
          id="diagnostika"
          aria-labelledby="diagnostika-title"
          className="scroll-mt-[100px] py-[90px] md:py-[120px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page max-w-[800px]">
            <Reveal>
              <h2
                id="diagnostika-title"
                className="font-heading text-[34px] leading-tight text-gold-light sm:text-[44px] lg:text-[52px]"
              >
                Нейропсихологическая диагностика
              </h2>
              <LeafDivider align="left" className="mt-5" />
              <div className="mt-6">
                <Price>6 000 ₽</Price>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SubTitle>Что это такое?</SubTitle>
              <p className="mt-6 text-base leading-[1.8] text-gold-light sm:text-[17px]">
                Это увлекательное путешествие в тайны работы мозга человека, целью которого является
                нахождение причин, почему он работает именно так у конкретно взятого человека.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
                Это исследование работы высших психических функций (ВПФ), таких как память, внимание,
                мышление, речь и др., при помощи специально подобранных заданий.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-14">
                <SubTitle>Для чего?</SubTitle>
                <div className="mt-7 grid gap-6 md:grid-cols-2">
                  <article className="rounded-[var(--radius-card)] border border-gold/30 bg-card p-7 transition-colors duration-300 hover:border-gold">
                    <h4 className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                      Трудности в обучении
                    </h4>
                    <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
                      Когда есть трудности в обучении у детей — для того, чтобы выявить причины этих
                      трудностей для их преодоления.
                    </p>
                  </article>
                  <article className="rounded-[var(--radius-card)] border border-gold/30 bg-card p-7 transition-colors duration-300 hover:border-gold">
                    <h4 className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                      Восстановление
                    </h4>
                    <p className="mt-4 text-[15px] leading-[1.75] text-muted-foreground">
                      Когда ребенок перенес инсульт, черепно-мозговую травму в результате ДТП,
                      серьезные сотрясения мозга и др. состояния и испытывает трудности в усвоении
                      учебной программы — для того, чтобы выявить пострадавшие функции для их
                      восстановления.
                    </p>
                  </article>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-14">
                <SubTitle>Когда?</SubTitle>
                <p className="mt-5 text-base text-muted-foreground sm:text-[17px]">
                  Если Ваш ребенок:
                </p>
                <ul className="mt-7 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                  {SIGNS.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[10px] h-[5px] w-[5px] shrink-0 rotate-45 bg-gold"
                      />
                      <span className="text-[15px] leading-[1.7] text-muted-foreground">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <Price>6 000 ₽</Price>
                <GoldButton href="/#contacts" className="w-full sm:w-auto">
                  Записаться на диагностику
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* КОРРЕКЦИЯ */}
        <section
          id="korrekciya"
          aria-labelledby="korrekciya-title"
          className="scroll-mt-[100px] py-[90px] md:py-[120px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page max-w-[800px]">
            <Reveal>
              <h2
                id="korrekciya-title"
                className="font-heading text-[34px] leading-tight text-gold-light sm:text-[44px] lg:text-[52px]"
              >
                Нейропсихологическая коррекция
              </h2>
              <LeafDivider align="left" className="mt-5" />
              <div className="mt-6">
                <Price>3 000 ₽</Price>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SubTitle>Что это такое?</SubTitle>
              <blockquote className="mt-7 border-l-2 border-gold/70 pl-6 sm:pl-8">
                <p className="font-heading text-[22px] leading-[1.5] text-gold-light sm:text-[26px]">
                  «Это длинный путь перестройки нейронных связей, работающих неоптимальным образом, и
                  формирования новых, более функциональных и менее энергозатратных. Как следствие —
                  улучшается качество жизни человека».
                </p>
              </blockquote>
              <p className="mt-7 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
                Это эффективный метод преодоления школьных трудностей, когда они вызваны
                особенностями работы мозга и нервной системы в целом. Это эффективный метод, система
                физических, когнитивных упражнений, направленных на восстановление поврежденных ВПФ
                или формирование/развитие незрелых ВПФ, благодаря которой преодолеваются трудности и
                улучшается качество жизни.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 rounded-[var(--radius-large)] border border-gold/50 bg-card px-8 py-10 sm:px-12 sm:py-12">
                <p className="text-center font-heading text-[22px] leading-[1.55] text-gold-light sm:text-[26px]">
                  Программа нейропсихологической коррекции составляется на основе данных
                  нейропсихологической диагностики.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <Price>3 000 ₽</Price>
                <GoldButton href="/#contacts" className="w-full sm:w-auto">
                  Записаться на коррекцию
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* КОНСУЛЬТИРОВАНИЕ */}
        <section
          id="consulting"
          aria-labelledby="consulting-title"
          className="scroll-mt-[100px] py-[90px] md:py-[120px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="container-page max-w-[800px]">
            <Reveal>
              <h2
                id="consulting-title"
                className="font-heading text-[34px] leading-tight text-gold-light sm:text-[44px] lg:text-[52px]"
              >
                Системное и краткосрочное стратегическое консультирование
              </h2>
              <LeafDivider align="left" className="mt-5" />
              <div className="mt-6">
                <Price>3 500 ₽</Price>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SubTitle>Что это такое?</SubTitle>
              <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
                Позволяет решить проблему достаточно быстро за 10–12 сессий. Концентрируется на
                главной проблеме и её решении больше, чем на исследовании её возникновения.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12">
                <SubTitle>С чем работает</SubTitle>
                <ul className="mt-7 grid gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {WORKS_WITH.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[10px] h-[5px] w-[5px] shrink-0 rotate-45 bg-gold"
                      />
                      <span className="text-[15px] leading-[1.7] text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <Price>3 500 ₽</Price>
                <GoldButton href="/#contacts" className="w-full sm:w-auto">
                  Записаться на консультацию
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* СКОРОЧТЕНИЕ */}
        <section
          id="skorochtenie"
          aria-labelledby="skorochtenie-title"
          className="scroll-mt-[100px] py-[90px] md:py-[120px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page max-w-[800px]">
            <Reveal>
              <h2
                id="skorochtenie-title"
                className="font-heading text-[34px] leading-tight text-gold-light sm:text-[44px] lg:text-[52px]"
              >
                Скорочтение
              </h2>
              <LeafDivider align="left" className="mt-5" />
              <div className="mt-6">
                <Price>1 250 ₽</Price>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SubTitle>Для чего нужны занятия?</SubTitle>
              <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
                Занятия направлены на развитие навыков эффективного чтения, повышение скорости обработки
                текстовой информации и формирование более продуктивных способов работы с текстом.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <Price>1 250 ₽</Price>
                <GoldButton href="/#contacts" className="w-full sm:w-auto">
                  Записаться
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ФИНАЛЬНЫЙ БЛОК */}
        <section className="py-[90px] md:py-[110px]" style={{ backgroundColor: "var(--bg-secondary)" }}>
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-heading text-[32px] leading-tight text-gold-light sm:text-[42px]">
                  Готовы начать?
                </h2>
                <LeafDivider className="mt-5" />
                <p className="mt-6 text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
                  Запишитесь на консультацию/диагностику и начните менять жизнь к лучшему.
                </p>
                <div className="mt-9">
                  <GoldButton href="/#contacts" className="w-full sm:w-auto">
                    Записаться
                  </GoldButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
