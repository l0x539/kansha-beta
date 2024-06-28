"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { FC, ReactNode, useCallback, useEffect } from "react";
import FooterContent from "../FooterContent";
import Logo from "../Logo";
import { updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch } from "@/store/hooks";
import { COMING_SOON } from "@/utils/constants";
import { useSearchParams } from "next/navigation";

const PartnersPage = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateView(3));
  }, [dispatch]);

  return (
    <div className="relative">
      <h1 className="animate-fade-in mx-32 text-8xl text-white pt-40">
        Partners
      </h1>
      <div className="animate-fade-in delay-400">
        <Partner
          title="CryptoMate"
          className="hover:bg-crypto-mate"
          more={
            "/portfolio/cryptomate" +
            (searchParams.get("demo") && COMING_SOON
              ? "?" + createQueryString("demo", `${searchParams.get("demo")}`)
              : "")
          }
        >
          Cryptomate offers a regulated exchange and user-friendly API
          solutions, bridging the gap between Web2 and Web3. Our partnership
          focuses on creating cutting-edge digital products that integrate
          decentralized functionalities, ensuring accessibility for users from
          diverse backgrounds. Join us in navigating the decentralized landscape
          with Cryptomate, where innovation meets simplicity.
        </Partner>
        <Partner
          title="Lazo"
          className="hover:bg-lazo"
          more={
            "/portfolio/lazo" +
            (searchParams.get("demo") && COMING_SOON
              ? "?" + createQueryString("demo", `${searchParams.get("demo")}`)
              : "")
          }
        >
          Revolutionizing Financial Management Together. As partners, we've
          played a pivotal role in the development of Lazo, streamlining
          financial management and legal processes into one unified platform.
          Join us in empowering businesses to thrive while we handle the
          financial intricacies, together with Lazo.
        </Partner>
        <Partner
          title="La Palma"
          className="hover:bg-la-palma"
          more={
            "/portfolio/lapalma" +
            (searchParams.get("demo") && COMING_SOON
              ? "?" + createQueryString("demo", `${searchParams.get("demo")}`)
              : "")
          }
        >
          La Palma FC isn't just a football club; it's a collaborative community
          where decisions are shaped by passionate members. As proud partners,
          we're excited to revolutionize the fan experience through NFT
          technology, bringing fans closer to the game than ever before.
        </Partner>
        <Partner
          title="Soy Rada"
          className="hover:bg-soy-rada"
          more={
            "/portfolio/soyrada" +
            (searchParams.get("demo") && COMING_SOON
              ? "?" + createQueryString("demo", `${searchParams.get("demo")}`)
              : "")
          }
        >
          Unleashing Magic Together with AXION Energy. Join us as partners in
          celebrating the magic of Soy Rada, crafted in collaboration with AXION
          Energy. Together, we've curated an enchanting gift set available at
          AXION service stations, bringing joy and wonder to audiences
          worldwide. Experience the wonder of magic like never before!
        </Partner>
      </div>
      <h1 className="mx-32 text-8xl text-[#5E5E5E] mt-20">
        Let{"'"}s start a<br />
        project together
      </h1>
      <div className="mx-32 mt-16 inline-flex gap-1.5">
        <Button type="primary" notFixedWidth size="xl" onClick={() => {}}>
          <Link href={"/contact/form"}>
            <span className="text-xs">Drop us a line</span>
          </Link>
        </Button>

        <Button icon type="primary" notFixedWidth size="xl" onClick={() => {}}>
          <Link href={"/contact/form"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M29.641 21.7177L15.9908 21.7177M23.3751 15.3593L29.6454 21.7177L23.3751 28.1288"
                stroke="currentColor"
                strokeMiterlimit="8"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </Button>
      </div>
      <Footer />
      <FooterContent />
    </div>
  );
};

const Partner: FC<{
  children: ReactNode;
  title: string;
  className?: string;
  more?: string;
}> = ({ children, title, className = "", more }) => {
  return (
    <div
      className={`relative px-32 hover:bg-cover grid grid-cols-2 py-24 border-b last:border-b-0 first:cursor-auto bg-transparent h-full ${className}`}
    >
      <div className="">
        <h4 className="text-[#999] font-semibold">{title}</h4>
      </div>
      <div className="text-white">
        <p className="w-[37rem]">{children}</p>
        <div className="mt-7 inline-flex gap-1.5">
          {more && (
            <>
              <Link href={more}>
                <Button
                  type="secondary"
                  notFixedWidth
                  size="xl"
                  onClick={() => {}}
                >
                  <span className="text-xs">Find out more</span>
                </Button>
              </Link>
              <Link href={more}>
                <Button
                  icon
                  type="secondary"
                  notFixedWidth
                  size="xl"
                  onClick={() => {}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <path
                      d="M29.641 21.7177L15.9908 21.7177M23.3751 15.3593L29.6454 21.7177L23.3751 28.1288"
                      stroke="currentColor"
                      strokeMiterlimit="8"
                      strokeLinecap="square"
                    />
                  </svg>
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const Footer: FC<{
  className?: string;
}> = ({ className = "mt-48" }) => {
  return (
    <div className={`pb-48 ${className}`}>
      <div className="grid px-32 w-screen grid-cols-footer">
        <FooterSection>
          <Logo width={90} height={13} />
          <span className="absolute pb-9 text-sm text-[#5E5E5E] bottom-0">
            2022 - 2023 - All rights reserved
          </span>
        </FooterSection>
        <FooterSection>
          <h6 className="text-white mb-8">Main</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLink href={"/services"}>Services</FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={"/culture"}>Culture</FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={"/partners"}>Partners</FooterLink>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h6 className="text-white mb-8">Contact</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLink href={"/services"}>Contact@kanshalab.com</FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={"/culture"}>info@kanshalab.com</FooterLink>
            </li>
            <li className="mb-1 text-[#5E5E5E] mt-6">
              Ciudad Autónoma de
              <br /> Buenos Aires
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h6 className="text-white mb-8">Contact</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLink href={"/services"}>Contact@kanshalab.com</FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={"/culture"}>info@kanshalab.com</FooterLink>
            </li>
            <li className="mb-1 text-[#5E5E5E] mt-6">
              Ciudad Autónoma de
              <br /> Buenos Aires
            </li>
          </ul>
        </FooterSection>
      </div>
    </div>
  );
};

const FooterLink: FC<{
  children: ReactNode;
  href: string;
}> = ({ children, href }) => {
  return (
    <Link href={href}>
      <span className="text-[#5E5E5E] hover:text-white transition-all">
        {children}
      </span>
    </Link>
  );
};

const FooterSection: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="relative px-6 pb-12 first:ml-0 font-flink border-l first:border-l-0 border-b border-[#6C6C6C]/50">
      {children}
    </div>
  );
};

export default PartnersPage;
