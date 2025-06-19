type Props = {
  buttonLabel: string;
  onClick: () => void;
};

export default function ReadButton({ buttonLabel, onClick }: Readonly<Props>) {
  return (
    <button
      className="mt-2 cursor-pointer text-sm/relaxed font-semibold text-gray-500 underline dark:text-gray-400"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
}
