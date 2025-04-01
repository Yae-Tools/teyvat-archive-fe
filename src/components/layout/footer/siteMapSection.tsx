export default function SiteMapSection() {
  const LINKS = [
    {
      name: "About Us",
      link: "/about"
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy"
    },
    {
      name: "Cookie Policy",
      link: "/cookie-policy"
    }
  ];

  return (
    <div className="mb-6 flex flex-col items-center md:items-end">
      <h5 className="mb-2.5 font-bold uppercase">Links</h5>
      <ul className="mb-0 flex list-none flex-col items-center text-slate-400 md:items-end">
        {LINKS.map((link) => (
          <li
            key={link.name}
            className="cursor-pointer hover:text-slate-500 hover:underline"
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
