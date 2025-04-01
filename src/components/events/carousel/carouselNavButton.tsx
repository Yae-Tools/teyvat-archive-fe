type Props = {
  icon: React.ReactNode;
  onClick: () => void;
};

export default function CarouselNavButton({ icon, onClick }: Readonly<Props>) {
  return (
    <button
      className="btn m-[0_0.25rem] cursor-pointer rounded-full bg-[rgba(255,255,255,0.5)] p-1 text-[rgba(0,0,0,0.7)] hover:bg-[rgba(255,255,255,0.3)]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
