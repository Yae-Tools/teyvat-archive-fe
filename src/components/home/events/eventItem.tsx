import { useState } from "react";
import ReadButton from "./readButton";

type Props = {
  event: IEvent;
};

export default function EventItem({ event }: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25 max-w-[calc(100vw/12*10)] ${
        isExpanded ? "row-span-4" : ""
      } border border-gray-700`}
    >
      <img alt={event.title} src={event.imageUrl} className="w-full" />

      <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
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
