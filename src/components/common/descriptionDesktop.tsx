import { memo } from "react";

type Props = {
  description: string;
  align?: "left" | "center" | "right";
};

function DescriptionDesktop({ description, align = "left" }: Readonly<Props>) {
  return (
    <p
      className={`mt-6 w-full text-xl leading-6 tracking-wide text-white italic text-${align}`}
      style={{
        textShadow: "2px 2px 2px rgba(0, 0, 0, 0.9)"
      }}
    >
      "{description}"
    </p>
  );
}

export default memo(DescriptionDesktop);
