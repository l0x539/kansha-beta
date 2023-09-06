import ContactPage from "@/components/gui/ContactPage";

export default function Contact() {
  return (<>
    <ContactPage />
  </>);
}

export const dynamic = 'force-static';
export const revalidate = false;