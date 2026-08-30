import type { ReactNode } from "react";
import { LeafDivider } from "./Leaf";

type Props = {
  children: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  id?: string;
};

export function SectionTitle({
  children,
  subtitle,
  align = "center",
  as: Tag = "h2",
  id,
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Tag
        id={id}
        className="font-heading text-[32px] leading-tight text-gold-light sm:text-[42px] lg:text-[46px]"
      >
        {children}
      </Tag>
      <LeafDivider align={align} className="mt-4" />
      {subtitle ? (
        <p
          className={`mt-5 text-[15px] leading-[1.7] text-muted-foreground sm:text-base ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
