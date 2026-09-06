import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { SectionTitle } from "@/components/brand/SectionTitle";
import { GoldButton } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { LeafDivider } from "@/components/brand/Leaf";
import { NeuralBackground } from "@/components/brand/NeuralBackground";
import { GameCard } from "@/components/brand/GameCard";
import { games, supervisions } from "@/data/games";

const TITLE = "Специалистам | Татьяна Бойраз — нейропсихолог";
const DESCRIPTION =
  "Профессиональная поддержка специалистов, супервизии по нейропсихологической диагностике и коррекции, разбор кейсов и онлайн-игры для занятий с детьми.";

export const Route = createFileRoute("/specialists")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/specialists" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/specialists" }],
  }),
  component: SpecialistsPage,
});

const GAMES_TEXT = [
  "Я разрабатываю игры для проведения онлайн-занятий с использованием платформы Zoom.",
  "Игры браузерные, то есть открываются у Вас в браузере (Яндекс, Google Chrome).",
  "Это не видеоигры, а обычные настольные игры, которые я перенесла в онлайн пространство. Взаимодействие в играх происходит также, как и при живой игре, с некоторыми изменениями.",
  "Игра полностью управляется преподавателем. Чтобы ребенок мог играть, преподаватель передает ему дистанционное управление своим экраном.",
  "Каждая игра имеет несколько уровней сложности, которые Вы можете выбирать, исходя из возможностей ребенка.",
  "В настоящее время на сайте представлены базовые версии игр.",
];

function SpecialistsPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden pt-[120px] pb-16 md:pt-[160px] md:pb-24"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 20%, rgba(11,51,41,0.85) 0%, rgba(6,31,26,1) 60%), var(--gradient-page)",
          }}
        >
          <NeuralBackground opacity={0.18} />
          <div className="container-page relative max-w-3xl text-center md:mx-auto">
            <h1 className="font-heading text-[34px] leading-tight tracking-[0.04em] text-gold-light uppercase sm:text-[44px]">
              Специалистам
            </h1>
            <LeafDivider className="mt-5" />
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-muted-foreground sm:text-[17px]">
              Профессиональная поддержка коллег, супервизия и инструменты для работы с детьми
            </p>
          </div>
        </section>

        {/* ПРОФЕССИОНАЛЬНАЯ ПОДДЕРЖКА */}
        <section
          aria-labelledby="support-title"
          className="py-[80px] md:py-[100px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page max-w-4xl">
            <Reveal>
              <SectionTitle id="support-title">Профессиональная поддержка</SectionTitle>
              <p className="mx-auto mt-8 max-w-2xl text-center text-[15.5px] leading-[1.8] text-muted-foreground sm:text-[17px]">
                Я могу быть полезна специалистам, которым необходим профессиональный взгляд на
                конкретный диагностический случай, помощь в составлении коррекционного маршрута или
                обсуждении сложного кейса.
              </p>
            </Reveal>
          </div>
        </section>

        {/* СУПЕРВИЗИИ */}
        <section
          aria-labelledby="supervision-title"
          className="relative overflow-hidden py-[80px] md:py-[100px]"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <NeuralBackground opacity={0.12} />
          <div className="container-page relative">
            <Reveal>
              <SectionTitle
                id="supervision-title"
                subtitle="Супервизия — возможность вместе разобрать конкретную профессиональную задачу, посмотреть на ситуацию с нейропсихологической точки зрения и определить дальнейшие шаги."
              >
                Супервизии
              </SectionTitle>
            </Reveal>

            <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {supervisions.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 100}>
                  <article className="flex h-full flex-col rounded-[18px] border border-gold/30 bg-card p-7 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-gold">
                    <h3 className="font-heading text-[25px] leading-snug text-gold-light">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-baseline gap-4 pt-6">
                      <span className="font-heading text-[24px] text-gold">2 000 ₽</span>
                      <span className="font-body text-[12px] tracking-[0.12em] text-muted-foreground uppercase">
                        1,5–2 часа
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-12 text-center">
              <GoldButton href="/#contacts" className="w-full sm:w-auto">
                Записаться на супервизию
              </GoldButton>
            </Reveal>
          </div>
        </section>

        {/* ИГРЫ */}
        <section
          aria-labelledby="games-title"
          className="py-[80px] md:py-[100px]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionTitle id="games-title">Игры</SectionTitle>
            </Reveal>

            <Reveal delay={80} className="mx-auto mt-8 max-w-3xl space-y-4">
              {GAMES_TEXT.map((p) => (
                <p key={p} className="text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
                  {p}
                </p>
              ))}
            </Reveal>

            <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {games.map((game, i) => (
                <Reveal as="li" key={game.url} delay={(i % 3) * 90} className="h-full">
                  <GameCard {...game} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ЗАКАЗ ИГРЫ */}
        <section
          aria-labelledby="custom-game-title"
          className="relative overflow-hidden py-[80px] md:py-[100px]"
          style={{ backgroundColor: "var(--bg-deep)" }}
        >
          <NeuralBackground opacity={0.1} />
          <div className="container-page relative max-w-[860px] text-center">
            <Reveal>
              <LeafDivider className="mb-8" />
              <p
                id="custom-game-title"
                className="mx-auto max-w-[820px] text-[15.5px] leading-[1.8] text-muted-foreground sm:text-[17px]"
              >
                Вы можете заказать разработку своей коррекционно-обучающей игры по Вашим материалам
                или адаптацию настольной игры/настольно-печатного пособия под проведение
                онлайн-занятий.
              </p>
              <div className="mt-10">
                <GoldButton href="/#contacts" className="w-full sm:w-auto">
                  Заказать
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
