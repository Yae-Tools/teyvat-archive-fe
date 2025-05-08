import { useState } from "react";

import OptimizedImage from "~/components/common/basic/optimizedImage";
import { IEvent } from "~/types/ambr.types";

import ReadButton from "./readButton";

type Props = {
  event: IEvent;
};

export default function EventItem({ event }: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`max-w-[calc(100vw/12*10)] overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25 ${
        isExpanded ? "row-span-4" : ""
      } border border-gray-700`}
      style={{ backgroundColor: "rgba(16, 24, 40, 0.7)" }}
    >
      <OptimizedImage
        alt={event.title}
        src={event.imageUrl}
        className="w-full"
        width={500}
        height={100}
      />

      <div className="p-4 sm:p-6">
        <time className="block text-xs text-gray-500 dark:text-gray-400">
          Until {new Date(event.end).toLocaleDateString()}
        </time>

        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
          {event.title}
        </h3>

        {isExpanded ? (
          <div className="mt-2 text-sm/relaxed text-gray-500 dark:text-gray-400">
            <p
              className="mt-2 text-sm/relaxed text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />

            <ReadButton
              buttonLabel="Read Less"
              onClick={() => setIsExpanded(false)}
            />
          </div>
        ) : (
          <ReadButton
            buttonLabel="Read More"
            onClick={() => setIsExpanded(true)}
          />
        )}
      </div>
    </article>
  );
}
