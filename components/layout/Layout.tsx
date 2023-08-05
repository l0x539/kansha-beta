'use client'
import { FC, ReactNode } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/store/store";
import MainCanvas from "../MainCanvas";
import NavigationControls from "../gui/NavigationControls";

const Layout: FC<{
  children: ReactNode;
}> = ({children}) => {
  return (
    <Provider store={store}>
      <NavigationControls>
        <Header />
        {children}
        <MainCanvas/>
      </NavigationControls>
    </Provider>
    );
};

export default Layout;