'use client'
import { COMING_SOON } from "@/utils/constants";
import CookiesConsent from "../CookiesConsent";
import Footer from "../layout/Footer";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const searchParams  = useSearchParams();

  return (<>
    <Footer />
    {COMING_SOON && !searchParams.get('demo') ? <></>: <CookiesConsent />}
  </>);
};

export default HomePage;