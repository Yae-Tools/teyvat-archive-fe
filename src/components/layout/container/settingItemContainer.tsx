import React from "react";

type Props = {
  children: React.ReactNode;
  isDisabled?: boolean;
  label: string;
  description?: string;
  id: string;
};

export default function SettingItemContainer({
  children,
  id,
  isDisabled,
  label,
  description,
}: Readonly<Props>) {
  return (
    <>
      <div className="w-full flex items-center justify-between border border-slate-300 dark:border-slate-700 p-4 rounded-xl">
        <div className="flex flex-col items-start justify-between">
          <label
            htmlFor={id}
            className={`${isDisabled ? "text-gray-400" : "primary-text"}`}
          >
            {label}
          </label>
          {description && (
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {description}
            </p>
          )}
        </div>
        <div className="relative">{children}</div>
      </div>
      <div>
        {/* custom genshin button */}

        <svg
          width="86"
          height="54"
          viewBox="0 0 86 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_di_303_32)">
            <rect
              x="7"
              y="9"
              width="72"
              height="36"
              rx="18"
              fill="#353D4F"
              fillOpacity="0.6"
              shapeRendering="crispEdges"
            />
            <rect
              x="8"
              y="10"
              width="70"
              height="34"
              rx="17"
              stroke="#EBE4D8"
              strokeWidth="2"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_d_303_32)">
            <circle cx="25" cy="27" r="14" fill="#ECE5D8" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.8331 21.1666C30.1888 20.5223 29.1441 20.5223 28.4998 21.1666L24.9998 24.6666L21.5 21.1667C20.8557 20.5224 19.811 20.5224 19.1666 21.1667C18.5223 21.8111 18.5223 22.8558 19.1666 23.5001L22.6665 26.9999L19.1664 30.5C18.522 31.1444 18.522 32.189 19.1664 32.8334C19.8107 33.4777 20.8554 33.4777 21.4997 32.8334L24.9998 29.3333L28.5001 32.8335C29.1444 33.4779 30.1891 33.4779 30.8334 32.8335C31.4778 32.1892 31.4778 31.1445 30.8334 30.5002L27.3332 26.9999L30.8331 23.5C31.4775 22.8556 31.4775 21.8109 30.8331 21.1666Z"
            fill="#D3BC8E"
          />
          <defs>
            <filter
              id="filter0_di_303_32"
              x="1"
              y="3"
              width="84"
              height="48"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_303_32"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_303_32"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_303_32"
              />
            </filter>
            <filter
              id="filter1_d_303_32"
              x="5"
              y="7"
              width="40"
              height="40"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.92549 0 0 0 0 0.898039 0 0 0 0 0.847059 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_303_32"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_303_32"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
