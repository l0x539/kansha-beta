'use client'

import Button from "@/components/Button";
import Link from "next/link";
import { FC, ReactNode, useEffect } from "react";
import FooterContent from "../FooterContent";
import Logo from "../Logo";
import { updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch } from "@/store/hooks";

const PartnersPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateView(3));
  }, [dispatch]);

  return (<div className="relative">
    <h1 className="mx-32 text-8xl text-white pt-40">
      Partners
    </h1>
    <div>
      <Partner title="Titular - Descripción de sección">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="CryptoMate" className="hover:bg-crypto-mate" more="/portfolio/cryptomate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="Lazo" className="hover:bg-lazo" more="/portfolio/lazo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="La Palma" className="hover:bg-la-palma" more="/portfolio/lazo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="Soy Rada" className="hover:bg-soy-rada" more="/portfolio/lazo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
    </div>
    <h1 className="mx-32 text-8xl text-[#5E5E5E] mt-20">
    Let{"'"}s start a<br />
    project together
    </h1>
    <div className="mx-32 mt-16 inline-flex gap-1.5">
      <Link href={""}>
        <Button type="primary" notFixedWidth size="xl" onClick={() => {}}>
          <span className="text-xs">Drop us a line</span>
        </Button>
      </Link>
      <Link href={"/contact/form"}>
        <Button icon type="primary" notFixedWidth size="xl" onClick={() => {}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M29.641 21.7177L15.9908 21.7177M23.3751 15.3593L29.6454 21.7177L23.3751 28.1288" stroke="currentColor" strokeMiterlimit="8" strokeLinecap="square"/>
        </svg>
        </Button>
      </Link>
    </div>
    <Footer />
    <FooterContent />
  </div>);
}

const Partner: FC<{
  children: ReactNode;
  title: string;
  className?: string;
  more?: string;
}> = ({
  children,
  title,
  className = "",
  more
}) => {
  return (
    <div className={`relative px-32 hover:bg-cover grid grid-cols-2 py-24 border-b last:border-b-0 first:cursor-auto bg-transparent h-full ${className}`}>
      <div className="">
        <h4 className="text-[#999] font-semibold">
          {title}
        </h4>
      </div>
      <div className="text-white">
        <p className="w-[37rem]">
          {children}
        </p>
        <div className="mt-7 inline-flex gap-1.5">
          {more && <>
            <Link href={more}>
              <Button type="secondary" notFixedWidth size="xl" onClick={() => {}}>
                <span className="text-xs">Find out more</span>
              </Button>
            </Link>
            <Link href={more}>
              <Button icon type="secondary" notFixedWidth size="xl" onClick={() => {}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path d="M29.641 21.7177L15.9908 21.7177M23.3751 15.3593L29.6454 21.7177L23.3751 28.1288" stroke="currentColor" strokeMiterlimit="8" strokeLinecap="square"/>
              </svg>
              </Button>
            </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export const Footer: FC<{
  className?: string;
}> = ({
  className = "mt-48"
}) => {
  return (
    <div className={`pb-48 ${className}`}>
      <div className="grid px-32 w-screen grid-cols-footer">
        <FooterSection>
          <Logo width={90} height={13} />
          <span className="absolute pb-9 text-sm text-[#5E5E5E] bottom-0">2022 - 2023 - All rights reserved</span>
        </FooterSection>
        <FooterSection>
          <h6 className="text-white mb-8">Main</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLink href={'/services'}>
                Services
              </FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={'/culture'}>
                Culture
              </FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={'/partners'}>
                Partners
              </FooterLink>
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h6 className="text-white mb-8">Contact</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLink href={'/services'}>
                Contact@kanshalab.com
              </FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={'/culture'}>
                info@kanshalab.com
              </FooterLink>
            </li>
            <li className="mb-1 text-[#5E5E5E] mt-6">
              Ciudad Autónoma de<br /> Buenos Aires
            </li>
          </ul>
        </FooterSection>
        <FooterSection>
        <h6 className="text-white mb-8">Contact</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLink href={'/services'}>
                Contact@kanshalab.com
              </FooterLink>
            </li>
            <li className="mb-1">
              <FooterLink href={'/culture'}>
                info@kanshalab.com
              </FooterLink>
            </li>
            <li className="mb-1 text-[#5E5E5E] mt-6">
              Ciudad Autónoma de<br /> Buenos Aires
            </li>
          </ul>
        </FooterSection>
      </div>
    </div>
  );
}

const FooterLink: FC<{
  children: ReactNode;
  href: string;
}> = ({
  children,
  href
}) => {
  return (<Link href={href}>
      <span className="text-[#5E5E5E] hover:text-white transition-all">{children}</span>
    </Link>);
}

const FooterSection: FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  return (
    <div className="relative px-6 pb-12 first:ml-0 font-flink border-l first:border-l-0 border-b border-[#6C6C6C]/50">
      {children}
    </div>
  );
}

export default PartnersPage;