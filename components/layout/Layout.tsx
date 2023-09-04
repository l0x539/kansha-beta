'use client'
import { FC, ReactNode, useLayoutEffect, useState } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/store/store";
import MainCanvas from "../MainCanvas";
import NavigationControls from "../gui/NavigationControls";
import { useSearchParams } from "next/navigation";
import { Leva } from "leva";
import { getGPUTier } from "detect-gpu";

const Layout: FC<{
  children: ReactNode;
}> = ({children}) => {
  const searchParams  = useSearchParams();
  const [gpuTier, setGpuTier] = useState(navigator.userAgent.indexOf('Mac OS X') == -1 ? 3 : 2);
  useLayoutEffect(() => {
    getGPUTier().then((gpuTier) => {
      setGpuTier(navigator.userAgent.indexOf('Mac OS X') == -1 ? gpuTier.tier : Math.min(gpuTier.tier, 2));
    })
  }, []);

  return (
    <Provider store={store}>
      <NavigationControls>
        <Header />
        {children}
        <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
          <MainCanvas gpuTier={gpuTier} />
        </div>
      </NavigationControls>

      <Leva collapsed={false} hidden={!searchParams.get('controls')} />
    </Provider>
    );
};

export default Layout;