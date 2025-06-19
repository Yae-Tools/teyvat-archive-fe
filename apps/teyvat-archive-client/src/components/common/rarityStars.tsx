import { StarIcon } from "lucide-react";
import { memo } from "react";

type Props = {
  stars: number;
};

function RarityStars({ stars }: Readonly<Props>) {
  return (
    <div className="flex w-max items-center justify-start">
      {Array(stars)
        .fill("")
        .map((_, i) => (
          <StarIcon
            className="size-3 text-[gold] lg:h-4 lg:w-4 xl:h-6 xl:w-6"
            fill="currentColor"
            strokeWidth={1}
            key={`star-${i + 1}`}
          />
        ))}
    </div>
  );
}

export default memo(RarityStars);
