type Props = {
  buttonLabel: string;
  onClick: () => void;
};

export default function ReadButton({ buttonLabel, onClick }: Readonly<Props>) {
  return (
    <button
      className="mt-2 text-sm/relaxed text-gray-500 font-semibold dark:text-gray-400 cursor-pointer underline"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
}
