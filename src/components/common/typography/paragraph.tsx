type Props = {
  text: string;
  textAlignment?: "left" | "center" | "right" | "justify";
};

export default function Paragraph({
  text,
  textAlignment = "left"
}: Readonly<Props>) {
  return (
    <p className={`primary-text text-md mt-1 lg:text-lg text-${textAlignment}`}>
      {text}
    </p>
  );
}
