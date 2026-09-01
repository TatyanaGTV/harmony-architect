import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark.png.asset.json";
import { GoldButton } from "./Buttons";

const NAV = [
  { label: "Обо мне", href: "/about" },
  { label: "Услуги", href: "/#services" },
  { label: "Моё образование", href: "/#education" },
  { label: "Специалистам", href: "/#specialists" },
  { label: "Контакты", href: "/#contacts" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => href === "/about" && pathname === "/about";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 backdrop-blur-[12px]"
      style={{ backgroundColor: "rgba(6,31,26,0.90)" }}
    >
      <div className="container-page flex h-[72px] items-center justify-between md:h-[86px]">
        <a href="/" className="flex items-center gap-3" aria-label="Tatiana Boyraz — на главную">
          <img
            src={logoMark.url}
            alt="Логотип Tatiana Boyraz — дерево и нейронные связи"
            className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
          />
          <span className="leading-tight">
            <span className="block font-heading text-[17px] tracking-[0.14em] text-gold-light md:text-[19px]">
              TATIANA BOYRAZ
            </span>
            <span className="block font-body text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              нейропсихолог
            </span>
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 font-body text-[12.5px] tracking-[0.05em] uppercase transition-colors duration-300 hover:text-gold-light ${
                isActive(item.href) ? "text-gold-light" : "text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.href) ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GoldButton href="/#contacts" className="px-6 py-3 text-[12px]">
            Записаться
          </GoldButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold/10 lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.4" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.4" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Мобильная навигация"
          className="border-t border-gold/20 bg-[#061f1a] lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-3 font-body text-[13px] tracking-[0.06em] uppercase transition-colors hover:text-gold-light ${
                    isActive(item.href) ? "text-gold-light" : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <GoldButton href="/#contacts" fullWidth onClick={() => setOpen(false)}>
                Записаться
              </GoldButton>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
