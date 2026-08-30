import treeBrain from "@/assets/tree-brain.png.asset.json";
import { GoldButton } from "./Buttons";
import { Leaf } from "./Leaf";
import { NeuralBackground } from "./NeuralBackground";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[112px] pb-16 md:pt-[140px] md:pb-24"
      style={{
        background:
          "radial-gradient(120% 90% at 78% 30%, rgba(11,51,41,0.9) 0%, rgba(6,31,26,1) 60%), var(--gradient-page)",
      }}
    >
      <NeuralBackground opacity={0.22} />

      <div className="container-page relative grid items-center gap-12 md:min-h-[620px] lg:grid-cols-[45fr_55fr] lg:gap-8">
        <div className="reveal" data-visible="true">
          <h1 className="font-heading text-[38px] leading-[1.02] tracking-[0.01em] sm:text-[46px] lg:text-[60px]">
            <span className="text-gold-gradient block">Нейропсихология</span>
            <span className="text-gold-gradient block">для гармонии</span>
            <span className="text-gold-gradient block">мозга и жизни</span>
          </h1>

          <div className="mt-7 flex items-center gap-3 text-gold" aria-hidden="true">
            <span className="h-px w-24 bg-gradient-to-r from-gold/80 to-transparent" />
            <Leaf size={15} className="text-gold-light" />
          </div>

          <p className="mt-7 max-w-md text-[15px] leading-[1.6] text-muted-foreground sm:text-[17px]">
            Индивидуальный подход к когнитивному развитию, эмоциональному благополучию и качеству
            жизни.
          </p>

          <div className="mt-9">
            <GoldButton href="#contacts" className="w-full sm:w-auto">
              Записаться на консультацию
            </GoldButton>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute h-[70%] w-[70%] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(214,168,79,0.16), transparent 70%)" }}
          />
          <img
            src={treeBrain.url}
            alt="Фирменный символ: дерево, объединённое с образом мозга и нейронных связей"
            width={520}
            height={520}
            className="animate-drift relative w-[280px] max-w-full mix-blend-screen sm:w-[380px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
