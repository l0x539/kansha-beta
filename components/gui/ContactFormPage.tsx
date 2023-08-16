import { FC, ReactNode } from "react";
import { FooterLink } from "../layout/Footer";
import Link from "next/link";

const ContactFormPage = () => {
  return (<>
  <div className="pt-40">
    <h1 className="mx-32 mb-28 text-8xl text-white">
      Let{"'"}s start a<br />
      project together
    </h1>
    <div className="mx-32 grid grid-cols-2">
      <div>
        <FormInput name="name" index="01" label="What's your name?" placeholder="Name, last name *" />
        <FormInput name="organization" index="02" label="What's the name of your organization?" placeholder="Name of the organization *" />
        <FormInput name="email" index="03" label="What's your email?" placeholder="email@name.com*" />
        <FormInput name="message" index="04" label="Your message" placeholder="Hello, can you help me with... *" />
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <div className="">
          <div className="mb-16 font-medium">
            <h5 className="uppercase text-[#5E5E5E] mb-1">
              Contact Details
            </h5>
            <ul>
              <li>
                <FooterLink type="secondary" href="mailto:kansha.lab@gmail.com">
                  kansha.lab@gmail.com
                </FooterLink>
              </li>
              <li>
                <FooterLink type="secondary" href="tel:+00 0 . 00 00 00 00">
                  +00 0 . 00 00 00 00
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="mb-16">
            <h5 className="uppercase text-[#5E5E5E] mb-1">
              BUSINESS DETAILS
            </h5>
            <ul>
              <li>
                <FooterLink type="secondary" href="#">
                  Location: Lorem Ipsum dolor
                </FooterLink>
              </li>
              <li>
                <FooterLink type="secondary" href="#">
                  Lorem Ipsum dolor
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="mb-16">
            <h5 className="uppercase text-[#5E5E5E] mb-1">
              SOCIALS
            </h5>
            <ul>
              <li>
                <FooterLink type="secondary" opener href="https://instagram.com">
                  Instagram
                </FooterLink>
              </li>
              <li>
                <FooterLink type="secondary" opener href="https://linkedin.com">
                  LinkedIn
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>        
      </div>
    </div>
    <div className="flex w-full justify-center py-14">
      <Link href={'/contact/form'} className="relative group hover:cursor-pointer select-none">
        <div  className={`h-full w-full absolute top-0 flex justify-center items-center rounded-full border mix-blend-difference shadow-[0px_2.2926828861236572px_2.2926828861236572px_0px_rgba(0,0,0,0.25)_inset] backdrop-opacity-70 group-hover:animate-ping`}></div>
        <div className={`flex justify-center items-center text-white font-gothic font-semibold text-5xl px-16 py-8`}>
          Send it!
        </div>
      </Link>
    </div>
  </div>
  </>);
};

export default ContactFormPage;

const FormInput: FC<{
  index: string;
  label: string;
  placeholder: string;
  name: string;
}> = ({
  index,
  label,
  placeholder,
  name
}) => {
  return (
    <>
      <div className="flex pt-5 mb-8 border-t border-[#5E5E5E]">
        <span className="h-full flex justify-center items-center text-[#5E5E5E] font-medium mr-16">{index}</span>
        <div className="w-full">
          <label className="text-white font-medium" htmlFor={name}>{label}</label>
          <input className="block placeholder:text-[#5E5E5E] bg-transparent focus:outline-none font-medium text-[#8E8E8E] mt-1 w-full" type="text" name={name} placeholder={placeholder} />
        </div>
      </div>
    </>
  );
};