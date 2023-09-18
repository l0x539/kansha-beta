'use client'
import { FC, ReactNode, useEffect, useLayoutEffect, useState } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/store/store";
import MainCanvas from "../MainCanvas";
import NavigationControls from "../gui/NavigationControls";
import { useSearchParams } from "next/navigation";
import { Leva } from "leva";
import { getGPUTier } from "detect-gpu";
import { usePathname } from 'next/navigation';

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const searchParams = useSearchParams();
  const [gpuTier, setGpuTier] = useState(typeof navigator !== 'undefined' ? navigator.userAgent.indexOf('Mac OS X') == -1 ? 3 : 2 : 0);
  const [isClient, setIsClient] = useState(false);
  
  /* SS - Check what page we are on to add conditional class to main wrapper */
  const pathname = usePathname();
  const fullPages = ["/", "/contact", "/culture"];
  const isFullPage = fullPages.includes(pathname) || pathname.startsWith('/services');

  useLayoutEffect(() => {
    getGPUTier().then((gpuTier) => {
      setGpuTier(navigator.userAgent.indexOf('Mac OS X') == -1 ? gpuTier.tier : Math.min(gpuTier.tier, 2));
    })
  }, []);

  useEffect(() => {
    setIsClient(true);
    document.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, false);
  }, [])

  return (
    <Provider store={store}>
      <main className={isFullPage ? 'fullScreen mainWrapper' : 'mainWrapper'}>
        <NavigationControls>
          <Header />
          {children}
          <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
            {isClient ? <MainCanvas gpuTier={gpuTier} /> : <></>}
          </div>
        </NavigationControls>

        <Leva collapsed={false} hidden={!searchParams.get('controls')} />
      </main>
    </Provider>
  );
};

export default Layout;