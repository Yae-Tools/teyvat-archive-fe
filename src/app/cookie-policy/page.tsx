"use server";

import { Metadata } from "next";
import Paragraph from "~/components/common/typography/paragraph";
import PageTitle from "~/components/common/typography/pageTitle";
import TitleHeading from "~/components/common/typography/titleHeading";

export async function generateMetaData(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Cookie Policy",
    description: "Welcome to Teyvat Archive!",
  };
}

export default async function CookiePolicy() {
  return (
    <div className="w-full pt-3 mt-3 mx-2 px-2 flex flex-col items-center">
      <PageTitle title="Cookie policy" />
      <div className="flex flex-col items-center justify-center space-y-2 w-full">
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="Last Updated: March 25, 2025"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="Welcome to Teyvat Archive! This Cookie Policy explains how we use cookies and similar technologies, like local storage, to make your experience on our site smooth and personalized. We’re not about tracking you—just keeping things functional." />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="What Are Cookies and Local Storage?"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="Cookies are small text files stored on your device when you visit our site. We use them in the headers to save your preferences, like your chosen theme (e.g., dark mode or light mode). Local storage is a similar tool we use to store settings data directly in your browser. Both help us remember your choices so the site works the way you like it." />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="How We Use Them"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We only use cookies and local storage for essential purposes to improve your experience. Here’s the breakdown:" />
          <ul className="list-disc">
            <li>
              <strong>Cookies:</strong>
              <Paragraph text=" Store your theme preferences (e.g., dark mode/light mode) so the site looks how you want it every time you visit.  " />
            </li>
            <li>
              <strong>Local storage:</strong>
              <Paragraph text="Saves additional settings data to keep your customizations in place." />
            </li>
          </ul>
          <Paragraph text="That’s it! We don’t use cookies for tracking or advertising, and we don’t share your data with third parties." />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="No Third-Party Sharing"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We don’t share data from cookies or local storage with anyone. It stays between your browser and our site." />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="How Long Do They Last?"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <ul className="list-disc">
            <li>
              <Paragraph text="Cookies stick around until you clear them from your browser or they expire (we set them to last 1 month unless you delete them sooner)." />
            </li>
            <li>
              <Paragraph text="Local storage hangs out in your browser until you clear it manually or reset your settings." />
            </li>
          </ul>
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="Your Control"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="You’re in charge! You can manage or delete cookies and local storage through your browser settings:  " />
          <ul className="list-disc">
            <li>
              <Paragraph text="Check your browser’s “Privacy” or “Cookies” section to block or remove them." />
            </li>
            <li>
              <Paragraph text="Note: Blocking these might mess with how the site looks or works since they’re tied to basic functionality." />
            </li>
          </ul>
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="Do We Need Your Consent?"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="Since we’re only using these technologies for essential purposes (not tracking or profiling), we don’t require a pop-up consent banner under most regulations. Still, we’re letting you know what’s up because transparency is the right thing to do." />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="Updates to This Policy"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We might tweak this policy as our site evolves. Any changes will be posted here with an updated “Last Updated” date, so check back if you’re curious." />
        </div>
        <div className="mt-4 lg:mt-6 xl:mt-8 flex flex-col items-center justify-center space-y-2 text-left px-4">
          <TitleHeading
            text="Questions?"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="Got thoughts or need clarification? Contact us via our email, and we’ll get back to you as soon as we can." />
        </div>
      </div>
    </div>
  );
}
