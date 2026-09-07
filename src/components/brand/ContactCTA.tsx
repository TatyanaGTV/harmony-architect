import { GoldButton } from "./Buttons";
import { NeuralBackground } from "./NeuralBackground";
import { Reveal } from "./Reveal";
import { LeafDivider } from "./Leaf";

const CONTACTS = [
  {
    label: "Телефон",
    value: "+7 (XXX) XXX-XX-XX",
    path: "M6 3h3l2 5-2.2 1.3a12 12 0 0 0 5.9 5.9L16 13l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z",
  },
  {
    label: "Email",
    value: "tatyanaboyraz@gmail.com",
    path: "M3.5 6h17v12h-17V6Zm0 .8 8.5 6.4 8.5-6.4",
  },
  { label: "Город", value: "Айдын", path: "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" },
];

export function ContactCTA() {
  return (
    <section
      id="contacts"
      aria-labelledby="cta-title"
      className="relative overflow-hidden py-[90px] md:py-[110px]"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <NeuralBackground opacity={0.16} />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <h2
            id="cta-title"
            className="font-heading text-[32px] leading-tight text-gold-light sm:text-[42px]"
          >
            Готовы начать?
          </h2>
          <LeafDivider align="left" className="mt-4" />
          <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-muted-foreground sm:text-base">
            Запишитесь на консультацию, и мы вместе найдём путь к вашим целям.
          </p>
          <div className="mt-8">
            <GoldButton href="#contacts" className="w-full sm:w-auto">
              Записаться
            </GoldButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[var(--radius-large)] border border-gold/30 bg-card p-8">
            <h3 className="font-heading text-[26px] text-gold-light">Контакты</h3>
            <ul className="mt-6 space-y-5">
              {CONTACTS.map((c) => (
                <li key={c.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 text-gold">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d={c.path}
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-body text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                      {c.label}
                    </span>
                    <span className="block text-[15px] text-foreground">{c.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
