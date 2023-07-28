'use client'
import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "@/store/store";
import MainCanvas from "../MainCanvas";

const Layout: FC<{
  children: ReactNode;
}> = ({children}) => {
  return (
    <Provider store={store}>
      <main className='absolute top-0 left-0 h-screen w-screen bg-transparent font-main'>
        <Header />
        <Footer />
        {children}
        <MainCanvas/>
      </main>
    </Provider>
    );
};

export default Layout;