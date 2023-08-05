'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CookiesConsent from "../CookiesConsent";
import Footer from "../layout/Footer";
import { selectGl, updateView } from "@/store/features/gl/glSlice";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateView(0));
  }, [dispatch]);

  return (<>
    <Footer />
    <CookiesConsent />
  </>);
};

export default HomePage;