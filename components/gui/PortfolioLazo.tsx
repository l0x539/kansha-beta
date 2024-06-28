import Image from "next/image";
import { Footer } from "./PartnersPage";
import FooterContent from "../FooterContent";

const PortfolioLazo = () => {
  return (
    <div className="relative">
      <div className="h-full mt-40 flex justify-center">
        <div className="w-[94.5rem]">
          <div className="mx-14 flex justify-between">
            <h1 className="text-right text-8xl text-white">
              Lazo
              <br />
              Startups + VC
            </h1>
            <div className="grid grid-cols-2 gap-x-28 gap-y-8">
              <div className="flex items-end text-white text-lg pb-4">
                Business design
              </div>
              <div className="flex items-end text-white text-lg">
                Website <br />
                Site VDR solution
              </div>
              <div className="text-white text-lg">Brand design</div>
              <div className="text-white text-lg">Content Strategy</div>
            </div>
          </div>
          <div className="mx-14 flex mt-44 text-lg">
            <h6 className="w-96 text-white">Introduction</h6>
            <div>
              <p className="text-white leading-[normal]">
                Lazo is your financial partner, making
                <br />
                the process seamless and managing
                <br />
                your fund in one place.
                <br />
                <br />
                Lazo allows you to focus on building
                <br />
                your business, as they take care of the
                <br />
                financial and legal aspects.
              </p>
              <div className="mt-16">
                <Image
                  src={"/assets/images/lazo_app.png"}
                  width={1079}
                  height={1026}
                  alt="Lazo App by Kansha"
                />
              </div>
            </div>
          </div>
          <div className="mx-8 grid grid-cols-2 gap-y-7 mt-20">
            <Image
              src="/assets/images/lazo_desktop.png"
              width={592}
              height={411}
              alt="Lazo Desktop by Kansha"
            />
            <div></div>
            <Image
              src="/assets/images/lazo_mobile.png"
              width={592}
              height={411}
              alt="Lazo Mobile by Kansha"
            />
            <div className="flex flex-col justify-end">
              <h3 className="text-white text-6xl font-semibold">Strategy</h3>
              <p className="text-white mt-16 leading-[normal] text-lg font-light">
                Easily start and manage your startup in the US with VC standards
                from day one! Together as partners, we've crafted affordable,
                tailor-made, and comprehensive incorporation packages through
                Lazo. Launch your startup from anywhere in the world with
                confidence.
              </p>
            </div>
          </div>
          <div className="mx-8 mt-24">
            <h1 className="text-white text-5xl leading-[3.62569rem] tracking-[-0.01444rem]">
              “The All-in-One Financial, legal, and fundraising
              <br />
              SAAS Platform for VC-Backed Startups”
            </h1>
            <div className="mt-24 grid grid-cols-2 gap-y-11">
              <div></div>
              <Image
                src="/assets/images/lazo_graph.png"
                width={718}
                height={414}
                alt="Lazo graph by Kansha"
              />
              <p className="text-white leading-[normal] text-lg font-light">
                Lazo, built upon trust and integrity, is dedicated to helping
                our startups thrive. As partners, we understand the importance
                of founder commitment and work tirelessly to provide the
                necessary support and resources for your startup's success.
              </p>
              <p className="text-white leading-[normal] text-lg font-light">
                Let Lazo handle the tedious task of bookkeeping, allowing you to
                focus on building your startup with confidence. Through our
                partnership, we've collaborated to ensure our platform and
                expert team organize and maintain your financial data
                accurately, right from the start
              </p>
            </div>
          </div>
          <div className="mx-8 mt-16 grid grid-cols-[2fr_1fr]">
            <div className="flex flex-wrap">
              <Image
                className="mr-4"
                src="/assets/images/lazo_tabs.png"
                width={592}
                height={354}
                alt="Lazo tabs by Kansha"
              />
              <Image
                src="/assets/images/lazo_card.png"
                width={348}
                height={354}
                alt="Lazo card by Kansha"
              />
              <Image
                className="mr-4 mt-4"
                src="/assets/images/lazo_logo.png"
                width={347}
                height={367}
                alt="Lazo logo by Kansha"
              />
              <Image
                className="mt-4"
                src="/assets/images/lazo_faq.jpg"
                width={592}
                height={367}
                alt="Lazo faq by Kansha"
              />
            </div>
            <Image
              className="ml-2"
              src="/assets/images/lazo_phones.png"
              width={469}
              height={739}
              alt="Lazo phones by Kansha"
            />
          </div>
          <div className="mx-8 mt-7">
            <Image
              src="/assets/images/lazo_brand.jpg"
              width={1446}
              height={655}
              alt="Lazo brand by Kansha"
            />
          </div>
          <div className="mx-8 mt-20 grid grid-cols-2">
            <div></div>
            <p className="text-white leading-[normal] text-lg font-light">
              None of us is as smart as all of us, and we can only achieve our
              <br />
              objectives together. Through our partnership with Lazo, we embrace{" "}
              <br />
              the value of teamwork, recognizing that collaboration is essential
              <br />
              for growth and success.
            </p>
          </div>
          <div className="mx-8 mt-20">
            <Image
              src="/assets/images/lazo_preview.png"
              width={1448}
              height={1248}
              alt="Lazo preview by Kansha"
            />
          </div>
        </div>
      </div>
      <Footer />
      <FooterContent />
    </div>
  );
};

export default PortfolioLazo;
