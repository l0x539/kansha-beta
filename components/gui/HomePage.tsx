'use client'
import { COMMING_SOON } from "@/utils/constants";
import CookiesConsent from "../CookiesConsent";
import Footer from "../layout/Footer";
import { useSearchParams } from "next/navigation";

const HomePage = () => {
  const searchParams  = useSearchParams();

  return (<>
    <Footer />
    {COMMING_SOON && !searchParams.get('demo') ? <></>: <CookiesConsent />}
  </>);
};

export default HomePage;