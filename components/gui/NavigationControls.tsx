'use client'
import { decrementView, incrementView, selectGl, updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGesture, useWheel } from "@use-gesture/react";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import {
  debounce,
  throttle
} from 'lodash';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavigationControls: FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams  = useSearchParams();  

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleIncScroll = useCallback(throttle(() => {
    switch (pathname) {
      case '/':
        const currentPan = parseInt(`${searchParams.get('pan')}`) || 0;
        if (currentPan === 4)
          router.push('/services');
        else
          router.push('/?' + createQueryString('pan', `${currentPan+1}`));
        break;
      case '/services':
        router.push('/services/discovery');
        break;
      case '/services/discovery':
        router.push('/services/development');
        break;
      case '/services/development':
        router.push('/services/team');
        break;
      case '/services/team':
        router.push('/services/design');
        break;
      case '/services/design':
        router.push('/services/services');
        break;
      case '/services/services':
        router.push('/services/our-method');
        break;
    }
  }, 50, {
    leading: false,
    trailing: true
  }), [pathname, searchParams.get('pan')]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleDecScroll = useCallback(throttle(() => {
    switch (pathname) {
      case '/':
        const currentPan = parseInt(`${searchParams.get('pan')}`) || 0;
        if (currentPan !== 0)
          router.push('/?' + createQueryString('pan', `${currentPan-1}`));
        break;
      case '/services':
        router.push('/?' + createQueryString('pan', `${4}`));
        break;
      case '/services/discovery':
        router.push('/services');
        break;
      case '/services/development':
        router.push('/services/discovery');
        break;
      case '/services/team':
        router.push('/services/development');
        break;
      case '/services/design':
        router.push('/services/team');
        break;
      case '/services/services':
        router.push('/services/design');
        break;
      case '/contact':
        router.push('/partners');
        break;
    }
  }, 50, {
    leading: false,
    trailing: true
  }), [pathname, searchParams.get('pan')]);

  // const bind = useGesture({
  //   onWheelEnd: ({
  //     direction: [_, y],
  //     intentional
  //   }) => {
  //     if (y === 1 && intentional) {
  //       if (pathname !== '/partners') 
  //         throttleIncScroll();
  //     } else if (y === -1 && intentional)
  //       throttleDecScroll();
  //   },
  //   onWheelStart: (({
  //     direction: [_, y],
  //     intentional
  //   }) => {
  //     if (y === 1 && intentional)
  //       if (pathname == '/partners') {
  //         if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight)
  //           router.push('/contact');
  //       } else if (pathname === '/contact')
  //         router.push('/contact/form');
  //   })
  // });

  const bind = useWheel(({
    direction: [_, y],
    intentional,
    first,
    last
  }) => {
    if (first) {
      if (y === 1 && intentional) {
        if (pathname == '/partners') {
          if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight)
            router.push('/contact');
        } else if (pathname === '/contact')
          router.push('/contact/form');
      } else if (y === -1 && intentional) {
        throttleDecScroll();
      }
    } else if (last) {
      if (y === 1 && intentional) {
        if (pathname !== '/partners') 
          throttleIncScroll();
      }
    }
    
  }, {
  
  })

  return (<main {...bind()} className='top-0 left-0 w-screen bg-transparent font-main'>
      {children}
    </main>);
};

export default NavigationControls;