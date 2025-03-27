type Props = {
  icon: React.ReactNode;
  onClick: () => void;
};

export default function CarouselNavButton({ icon, onClick }: Readonly<Props>) {
  return (
    <button
      className="btn bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] m-[0_0.25rem] p-1 rounded-full cursor-pointer hover:bg-[rgba(255,255,255,0.3)]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
