import { useAppSelector } from "@/store/hooks";
import CookiesConsent from "../CookiesConsent";
import Footer from "../layout/Footer";
import { selectGl } from "@/store/features/gl/glSlice";

const HomePage = () => {
  return (<>
    <Footer />
    <CookiesConsent />
  </>);
};

export default HomePage;