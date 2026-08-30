import logoMark from "@/assets/logo-mark.png.asset.json";

const SOCIALS = [
  {
    label: "Telegram",
    href: "#",
    path: "M21 4 3 11.2l5.2 1.9L18 7.4l-7 7.6.3 5 3-3.3 4 3.1L21 4Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Zm5 4.7a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm5.3-1.4h.01",
  },
  {
    label: "WhatsApp",
    href: "#",
    path: "M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20Zm5-8.5c.4 2 2 3.6 4 4l1.2-1.2 2 .9-.4 1.6c-2.9.4-6.4-3-6.8-6.3l1.6-.4.9 2L9 11.5Z",
  },
];

export function Footer() {
  return (
    <footer
      className="border-t border-gold/25"
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <div className="container-page flex flex-col items-center gap-8 py-12 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logoMark.url}
            alt="Логотип Tatiana Boyraz"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-heading text-[18px] tracking-[0.14em] text-gold-light">
              TATIANA BOYRAZ
            </span>
            <span className="block font-body text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              нейропсихолог
            </span>
          </span>
        </div>

        <p className="text-[13px] leading-relaxed text-muted-foreground">
          © 2026 Tatiana Boyraz.
          <br className="hidden sm:block" /> Все права защищены.
        </p>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <a
            href="#"
            className="text-[13px] text-muted-foreground transition-colors hover:text-gold-light"
          >
            Политика конфиденциальности
          </a>
          <ul className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/35 text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d={s.path}
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
