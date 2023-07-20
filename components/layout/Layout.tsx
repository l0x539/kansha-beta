'use client'
import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "@/store/store";

const Layout: FC<{
  children: ReactNode;
}> = ({children}) => {
  return (
    <Provider store={store}>
      <main className='absolute top-0 left-0 h-screen w-screen bg-transparent font-main'>
        <Header />
        <Footer />
        {children}
      </main>
    </Provider>
    );
};

export default Layout;