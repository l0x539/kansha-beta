'use client'
import {  useWheel } from "@use-gesture/react";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { COMING_SOON, tracking } from "@/utils/constants";
import { Lethargy } from 'lethargy-ts';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectGl, setProgress } from "@/store/features/gl/glSlice";

const lethargy = new Lethargy();
const handleWheelProgress = (pathname: string, pan: 0 | 1 | 2 | 3 = 0, delta: number, last: boolean, preProgress: number, setPreProgress: (value: number) => void) => {
  let min: number, max;
  switch (pathname) {
    case '/':
      const currentPan = pan;
      min = tracking['/'].pans[currentPan].min
      max = tracking['/'].pans[currentPan].max
      break;
    case '/services':
      min = tracking['/services'][0].min
      max = tracking['/services'][0].max
      break;
    case '/services/discovery':
      min = tracking['/services/discovery'][0].min
      max = tracking['/services/discovery'][0].max
      break;
    case '/services/development':
      min = tracking['/services/development'][0].min
      max = tracking['/services/development'][0].max
      break;
    case '/services/team':
      min = tracking['/services/team'][0].min
      max = tracking['/services/team'][0].max
      break;
    case '/services/design':
      min = tracking['/services/design'][0].min
      max = tracking['/services/design'][0].max
      break;
    case '/services/services':
      min = tracking['/services/services'][0].min
      max = tracking['/services/services'][0].max
      break;
    case '/contact':
      min = tracking['/contact'][0].min
      max = tracking['/contact'][0].max
      break;
    case '/contact/form':
      min = tracking['/contact/form'][0].min
      max = tracking['/contact/form'][0].max
      break;
    case '/contact/info':
      min = tracking['/contact/info'][0].min
      max = tracking['/contact/info'][0].max
      break;
    default:
      min = tracking.default[0].min
      max = tracking.default[0].max
      break;
  }
  if (!last)
    setPreProgress(Math.max(Math.min(preProgress + (delta * 0.1), max), min));
  else
    setPreProgress(min);
}
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
  const {progress: preProgress} = useAppSelector(selectGl);
  const dispatch = useAppDispatch();
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
      case '/contact':
        if (searchParams.get('demo'))
          router.push('/contact/form?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/form');
        break;
      case '/contact/form':
        if (searchParams.get('demo'))
          router.push('/contact/info?' + createQueryString('demo', `${searchParams.get('demo')}`))
        else
          router.push('/services/info');
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
    event,
    delta: [deltaX, deltaY]
  }) => {
    setInitScroll(true);
    setScrollHint(false);
    handleWheelProgress(pathname, (parseInt(`${searchParams.get('pan')}`) || 0) as 0 | 1 | 2 | 3, deltaY, false, preProgress, setPreProgress);
    if (intentional) {
      event.stopPropagation();
      if (first) {
        if (y === 1) {
          if (pathname !== '/partners') 
            throttleIncScroll();
          else if (pathname == '/partners') {
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
      }
      //  else if (last) {
      //   if (y === 1) {
      //     if (pathname !== '/partners') 
      //       throttleIncScroll();
      //   }
      // }
    }
    
  }, {
    eventOptions: {
      passive: false
    },
    preventDefault: true,
  });

  const setPreProgress = (value: number) => {
    dispatch(setProgress(value));
  }
  
  return (<main ref={mainRef} {...(COMING_SOON && !searchParams.get('demo') ? {} : bind())} className='absolute top-0 left-0 w-screen min-h-screen bg-transparent font-main'>
      {children}
      <ScrollHint scrollHint={scrollHint} />
    </main>);
};

const ScrollHint: FC<{
  scrollHint: boolean;
}> = ({
  scrollHint
}) => {
  const pathname = usePathname();
  const searchParams  = useSearchParams();

  return (
    <div className={`transition-all duration-800 scroll-hint absolute ${pathname === '/' ? 'bottom-12':'bottom-8'} left-1/2 transition-all ${scrollHint && searchParams.get('demo') ? 'opacity-100' : 'opacity-0'}`}><span></span></div>
  )
}

export default NavigationControls;