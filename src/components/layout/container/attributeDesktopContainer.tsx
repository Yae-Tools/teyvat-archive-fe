import { memo, type ReactNode } from "react";

import TitleHeading from "~/components/common/typography/titleHeading";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};

function AttributeDesktopContainer({ children, title }: Readonly<Props>) {
  return (
    <div className="w-full overflow-hidden px-7 py-4">
      <div className="mt-8 flex w-full flex-col items-start justify-center">
        <TitleHeading text={title} />
      </div>
      <div className="flex w-full flex-col items-center justify-start">
        {children}
      </div>
    </div>
  );
}

export default memo(AttributeDesktopContainer);
