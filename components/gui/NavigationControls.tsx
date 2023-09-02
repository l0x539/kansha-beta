'use client'
import {  useWheel } from "@use-gesture/react";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { COMING_SOON } from "@/utils/constants";
import { Lethargy } from 'lethargy-ts';

const lethargy = new Lethargy();

const NavigationControls: FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams  = useSearchParams();
  const [scrollHint, setScrollHint] = useState(false);
  const [initScroll, setInitScroll] = useState(false);
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    setTimeout(() => {
      setScrollHint(() => {
        if (!initScroll)
          return true;
        else return false;
      });
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleIncScroll = () => {
    switch (pathname) {
      case '/':
        const currentPan = parseInt(`${searchParams.get('pan')}`) || 0;
        if (currentPan === 4)
          if (searchParams.get('demo'))
            router.push('/services?' + createQueryString('demo', `${searchParams.get('demo')}`))
          else
            router.push('/services');
        else
          router.push('/?' + createQueryString('pan', `${currentPan+1}`));
        break;
      case '/services':
        if (searchParams.get('demo'))
            router.push('/services/discovery?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/discovery');
        break;
      case '/services/discovery':
        if (searchParams.get('demo'))
            router.push('/services/development?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/development');
        break;
      case '/services/development':
        if (searchParams.get('demo'))
          router.push('/services/team?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/team');
        break;
      case '/services/team':
        if (searchParams.get('demo'))
          router.push('/services/design?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/design');
        break;
      case '/services/design':
        if (searchParams.get('demo'))
          router.push('/services/services?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/services');
        break;
      case '/services/services':
        if (searchParams.get('demo'))
          router.push('/services/our-method?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/our-method');
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleDecScroll = () => {
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
        if (searchParams.get('demo'))
          router.push('/services?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services');
        break;
      case '/services/development':
        if (searchParams.get('demo'))
          router.push('/services/discovery?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/discovery');
        break;
      case '/services/team':
        if (searchParams.get('demo'))
          router.push('/services/development?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/development');
        break;
      case '/services/design':
        if (searchParams.get('demo'))
          router.push('/services/team?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/team');
        break;
      case '/services/services':
        if (searchParams.get('demo'))
          router.push('/services/design?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/design');
        break;
      case '/contact':
        if (searchParams.get('demo'))
          router.push('/partners?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/partners');
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  };

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

  const mainRef = useRef<HTMLElement>(null);

  const bind = useWheel(({
    direction: [_, y],
    intentional,
    first,
    last,
    event
  }) => {
    setInitScroll(true);
    setScrollHint(false);
    if (intentional) {
      event.stopPropagation();
      if (first) {
        if (y === 1) {
          if (pathname == '/partners') {
            if ((window.innerHeight + Math.round(window.scrollY)) >= (mainRef.current?.offsetHeight??0))
              if (searchParams.get('demo'))
                router.push('/contact?' + createQueryString('demo', `${searchParams.get('demo')}`))
              else
                router.push('/contact');
          } else if (pathname === '/contact')
            if (searchParams.get('demo'))
              router.push('/contact/form?' + createQueryString('demo', `${searchParams.get('demo')}`))
            else
              router.push('/contact/form');
        } else if (y === -1) {
          throttleDecScroll();
        }
      } else if (last) {
        if (y === 1) {
          if (pathname !== '/partners') 
            throttleIncScroll();
        }
      }
    }
    
  }, {
    eventOptions: {
      passive: false
    },
    preventDefault: true,
  });

  return (<main ref={mainRef} {...(COMING_SOON && !searchParams.get('demo') ? {} : bind())} className='absolute top-0 left-0 w-screen min-h-screen bg-transparent font-main'>
      {children}
      <div className={`transition-all duration-800 scroll-hint absolute bottom-12 left-1/2 transition-all ${scrollHint && searchParams.get('demo') ? 'opacity-100' : 'opacity-0'}`}><span></span></div>
    </main>);
};

export default NavigationControls;