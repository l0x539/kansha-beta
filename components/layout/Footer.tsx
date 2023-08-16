import React, { FC, ReactNode } from "react";

const Footer = () => {
  return (<footer className="absolute bottom-0 left-0 w-screen flex justify-between px-28 pb-8">
    <ul>
      <li>
        <FooterLink href="mailto:contact@kanshalab.com">
          Contact@kanshalab.com
        </FooterLink>
      </li>
      <li>
        <FooterLink href="tel:+34672300910">
          +34 672300910
        </FooterLink>
      </li>
    </ul>
    <ul>
      <li>
        <FooterLink opener href="https://linkedin.com">
          LinkedIn
        </FooterLink>
      </li>
      <li>
        <FooterLink opener href="https://instagram.com">
          Instagram
        </FooterLink>
      </li>
    </ul>
  </footer>);
};

export const FooterLink: FC<{
  href: string;
  children: ReactNode;
  opener?: boolean;
  type?: 'primary' | 'secondary';
}> = ({href, children, opener = false, type = 'primary'}) => {
  return (<a {...(opener ? {target: "_blank", rel:"noopener noreferrer"} : {})} className={`text-flink text-base ${type === 'primary' ? 'text-[#535353] hover:text-white' :'text-white hover:text-white' } transition-all`} href={href}>{children}</a>);
}

export default Footer;