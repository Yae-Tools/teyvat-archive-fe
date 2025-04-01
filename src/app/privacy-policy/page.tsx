"use server";

import { Metadata } from "next";

import PageTitle from "~/components/common/typography/pageTitle";
import Paragraph from "~/components/common/typography/paragraph";
import TitleHeading from "~/components/common/typography/titleHeading";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Privacy Policy",
    description: "Welcome to Teyvat Archive!"
  };
}

export default async function PrivacyPolicy() {
  return (
    <div className="mx-2 mt-3 flex w-full flex-col items-center px-2 pt-3">
      <PageTitle title="Privacy Policy" />
      <div className="flex w-full flex-col items-center justify-center space-y-2">
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="Effective Date: March 25, 2025"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="At Teyvat Archive, we value your privacy and are committed to protecting any information we collect while you use our website. This Privacy Policy explains what data we collect, how we use it, and your options for managing it. Our practices are designed to ensure a functional and user-friendly experience." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="1. Information We Collect"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We collect limited information through the following methods to enhance your experience on our site:" />
          <ul className="list-disc">
            <li>
              <strong>Cookies:</strong>
              <Paragraph text="We use cookies in the website headers to store your theme preferences, such as your choice of dark mode or light mode.  " />
            </li>
            <li>
              <strong>Local storage:</strong>
              <Paragraph text="We use local storage in your browser to save additional settings data, ensuring your preferences persist across visits." />
            </li>
          </ul>
          <Paragraph text="This information is not used to identify you personally and is solely for operational purposes." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="2. How We Use Your Information"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="The data we collect serves the following purposes:" />
          <ul className="list-disc">
            <li>
              <Paragraph text="To apply and remember your chosen theme (e.g., dark mode or light mode)." />
            </li>
            <li>
              <Paragraph text="To maintain your settings for a consistent and personalized experience." />
            </li>
          </ul>
          <Paragraph text="We do not use this information for tracking, marketing, or any other purpose beyond site functionality." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="3. Sharing Your Information"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We do not share, sell, or disclose data collected via cookies or local storage with any third parties. This information remains stored locally on your device and is only accessed by our website to deliver its core features." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="4. Data Retention"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <ul className="list-disc">
            <li>
              <Paragraph text="Cookies are retained on your device until they expire (set to 1 month) or until you manually delete them through your browser." />
            </li>
            <li>
              <Paragraph text="Local storage persists in your browser until you clear it or reset your settings." />
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="5. Your Choices and Rights"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="You have full control over the data we collect:" />
          <ul className="list-disc">
            <li>
              <strong>Browser settings:</strong>
              <Paragraph text="You can disable or delete cookies and clear local storage at any time through your browser’s privacy or security settings. Note that disabling these features may affect the website’s appearance or functionality." />
            </li>
            <li>
              <strong>Opt-out:</strong>
              <Paragraph text="Since we only collect data essential to the site’s operation, there is no additional opt-out process beyond managing your browser settings." />
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="6. Third-Party Services"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We do not use third-party analytics, advertising, or tracking services that collect data from our users. Our site operates independently of such tools." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="7. Security"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We take reasonable steps to ensure our website operates securely. However, since the data we collect is stored locally on your device, its security largely depends on your own system and browser protections." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="8. International Users"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="This website is operated from Sri Lanka. If you access it from another jurisdiction (e.g., the European Union), local privacy laws like the General Data Protection Regulation (GDPR) may apply. Our use of cookies and local storage for essential purposes aligns with exemptions from consent requirements under such laws, but we provide this policy for transparency." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="9. Changes to This Policy"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="We may update this Privacy Policy to reflect changes in our practices or applicable laws. Any updates will be posted here with a revised “Effective Date.” We encourage you to review this page periodically." />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-4 text-left lg:mt-6 xl:mt-8">
          <TitleHeading
            text="10. Contact Us"
            customClass="text-xl lg:text-2xl ml-4 font-sans"
          />
          <Paragraph text="If you have questions or concerns about this Privacy Policy or our practices, please contact us at [your contact email or form link]. We’re happy to assist." />
        </div>
      </div>
    </div>
  );
}
