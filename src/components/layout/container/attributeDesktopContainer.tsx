import { memo, type ReactNode } from "react";

import TitleHeading from "~/components/common/typography/titleHeading";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};

function AttributeDesktopContainer({ children, title }: Readonly<Props>) {
  return (
    <div className="w-full overflow-hidden px-7 py-4">
      <span className="mt-8 flex w-full items-center">
        <span className="shrink-0 pe-4 text-gray-900 dark:text-white">
          <TitleHeading text={title} />
        </span>
        <span className="h-1 flex-1 rounded-lg bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
      </span>
      <div className="flex w-full flex-col items-center justify-start">
        {children}
      </div>
    </div>
  );
}

export default memo(AttributeDesktopContainer);
