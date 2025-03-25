type Props = {
  text: string;
  textAlignment?: "left" | "center" | "right" | "justify";
};

export default function Paragraph({
  text,
  textAlignment = "left",
}: Readonly<Props>) {
  return (
    <p className={`primary-text text-md lg:text-lg mt-1 text-${textAlignment}`}>
      {text}
    </p>
  );
}
