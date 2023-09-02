'use client'
import { FC, ReactNode } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/store/store";
import MainCanvas from "../MainCanvas";
import NavigationControls from "../gui/NavigationControls";
import { useSearchParams } from "next/navigation";
import { Leva } from "leva";

const Layout: FC<{
  children: ReactNode;
}> = ({children}) => {
  const searchParams  = useSearchParams(); 
  return (
    <Provider store={store}>
      <NavigationControls>
        <Header />
        {children}
        <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
          <MainCanvas/>
        </div>
      </NavigationControls>

      <Leva collapsed={false} hidden={!searchParams.get('controls')} />
    </Provider>
    );
};

export default Layout;