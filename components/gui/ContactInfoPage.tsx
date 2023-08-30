import { FC, ReactNode } from "react";
import { Mail, Paper, Phone } from "../Icons";
import FooterContent from "../FooterContent";

const ContactInfoPage = () => {
  return (
    <>
      <div className="pt-56">
        <h1 className="mx-32 mb-28 text-8xl text-white">
          What{"'"}s next?
        </h1>
        <div className="mx-32 grid grid-cols-3">
          <Section title="Promt response" icon={<Mail />}>
            We are notoriusly quick at 
            <br />getting back to emails. You{"'"}ll 
            <br />get a reply withing 3 business 
            <br />hours.
          </Section>
          <Section title="Schedule a call" icon={<Phone />}>
              Dive into your vision for the 
              <br />project on a quick call/Dive 
              <br />into the vision for your project 
              <br />on a quick call.
          </Section>
          <Section title="Get a quote" icon={<Paper />}>
            A whole team dedicated to calculating 
            <br />the quote will be working on our 
            <br />proposal, analysing, calculating and 
            <br />estimating. You{"'"}ll get a full-fledged 
            <br />document from us, fair and square.
          </Section>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

const Section: FC<{
  children: ReactNode;
  icon: ReactNode;
  title: ReactNode;
}> = ({
  children,
  icon,
  title
}) => {
  return (
    <div className="">
      <div className="border-b border-white pb-5 h-16 w-16">
        {icon}
      </div>
      <h3 className="my-6 text-2xl text-white">
        {title}
      </h3>
      <p className="text-[#5E5E5E] text-2xl">
        {children}
      </p>
    </div>
  )
}

export default ContactInfoPage;