import { Leaf } from "./Leaf";
import type { Game } from "@/data/games";

export function GameCard({ title, image, url }: Game) {
  return (
    <article className="group flex flex-col rounded-[var(--radius-card)] border border-gold/30 bg-card p-6 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-gold">
      {image ? (
        <img
          src={image}
          alt={`Онлайн-игра «${title}»`}
          loading="lazy"
          className="w-full rounded-[12px] object-cover"
          style={{ aspectRatio: "16 / 10" }}
        />
      ) : (
        <div
          className="flex w-full items-center justify-center rounded-[12px] border border-gold/20"
          style={{
            aspectRatio: "16 / 10",
            background:
              "radial-gradient(120% 100% at 30% 20%, rgba(214,168,79,0.16), rgba(4,27,23,1) 70%)",
          }}
          aria-hidden="true"
        >
          <Leaf size={28} className="text-gold/60" />
        </div>
      )}

      <h3 className="mt-5 font-heading text-[26px] leading-snug text-gold-light">{title}</h3>

      <div className="mt-auto pt-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[30px] border border-gold px-7 py-3 font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold-light transition-all duration-[250ms] ease-out hover:bg-gold hover:text-ink"
        >
          Играть
        </a>
      </div>
    </article>
  );
}
