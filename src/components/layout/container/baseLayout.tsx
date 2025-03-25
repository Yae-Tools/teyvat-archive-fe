import CustomCursor from "~/assets/cursor/cursor.png";
import Footer from "../footer/footer";
import Header from "../header/header";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Readonly<Props>) {
  return (
    <div
      className="bg-slate-200 dark:bg-gray-900 w-full flex flex-col items-center justify-start min-h-svh"
      style={{
        cursor: "url(" + CustomCursor.src + "), auto",
      }}
    >
      <Header />
      <main className="bg-slate-200 dark:bg-gray-900 primary-text flex-1 w-full flex flex-col items-center justify-start mt-4 md:mt-8 lg:mt-12 xl:mt-16 max-w-[1500px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
