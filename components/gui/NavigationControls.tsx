'use client'
import {  useWheel } from "@use-gesture/react";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { COMING_SOON, tracking } from "@/utils/constants";
import { Lethargy } from 'lethargy-ts';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectGl, setProgress } from "@/store/features/gl/glSlice";
import { throttle } from "lodash";

const handleWheelProgress = (pathname: string, pan: 0 | 1 | 2 | 3 = 0, delta: number, last: boolean, preProgress: number, setPreProgress: (value: number) => void, deltaFactor: number = 0.001) => {
  let min: number, max;
  switch (pathname) {
    case '/':
      const currentPan = pan;
      min = tracking['/'].pans[currentPan].min
      max = tracking['/'].pans[currentPan].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/services':
      min = tracking['/services'][0].min
      max = tracking['/services'][0].max
      setPreProgress(Math.min(Math.max((preProgress/5) + (delta * deltaFactor), min), max));
      break;
    case '/services/discovery':
      min = tracking['/services/discovery'][0].min
      max = tracking['/services/discovery'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/services/development':
      min = tracking['/services/development'][0].min
      max = tracking['/services/development'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/services/team':
      min = tracking['/services/team'][0].min
      max = tracking['/services/team'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/services/design':
      min = tracking['/services/design'][0].min
      max = tracking['/services/design'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/services/services':
      min = tracking['/services/services'][0].min
      max = tracking['/services/services'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/contact':
      min = tracking['/contact'][0].min
      max = tracking['/contact'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/contact/form':
      min = tracking['/contact/form'][0].min
      max = tracking['/contact/form'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    case '/contact/info':
      min = tracking['/contact/info'][0].min
      max = tracking['/contact/info'][0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
    default:
      min = tracking.default[0].min
      max = tracking.default[0].max
      setPreProgress(Math.min(Math.max(preProgress + (delta * deltaFactor), min), max));
      break;
  }
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
  const throttleIncScroll = throttle(() => {
    switch (pathname) {
      case '/':
        const currentPan = parseInt(`${searchParams.get('pan') || 0}`) as 0|1|2|3|4;
        
        if (currentPan === 4) {
          if (searchParams.get('demo')) {
            router.replace('/services?' + createQueryString('demo', `${searchParams.get('demo')}`), {
              scroll: true
            })
          }
          else {
            router.replace('/services', {
              scroll: true
            });
          }
          setPreProgress(tracking['/services'][0].min)
        }
        else {
          const nextP = currentPan+1 as 0|1|2|3|4;
          setPreProgress(tracking['/'].pans[nextP].min)
          router.replace('/?' + createQueryString('pan', `${currentPan+1}`), {
            scroll: true
          });
        }
        break;
      case '/services':
        if (searchParams.get('demo')) {
          router.replace('/services/discovery?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/discovery', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/discovery'][0].min)
        break;
      case '/services/discovery':
        if (searchParams.get('demo')) {
          router.replace('/services/development?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/development', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/development'][0].min)
        break;
      case '/services/development':
        if (searchParams.get('demo')) {
          router.replace('/services/team?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/team', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/team'][0].min)
        break;
      case '/services/team':
        if (searchParams.get('demo')) {
          router.replace('/services/design?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/design', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/design'][0].min)
        break;
      case '/services/design':
        if (searchParams.get('demo')) {
          router.replace('/services/services?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/services', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/services'][0].min)
        break;
      case '/services/services':
        if (searchParams.get('demo')) {
          router.replace('/services/our-method?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/our-method', {
            scroll: true
          });
        }
        break;
      case '/contact':
        if (searchParams.get('demo')) {
          router.replace('/contact/form?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/contact/form', {
            scroll: true
          });
        }
        setPreProgress(tracking['/contact/form'][0].min)
        break;
      // case '/contact/form':
      //   if (searchParams.get('demo'))
      //     router.replace('/contact/info?' + createQueryString('demo', `${searchParams.get('demo')}`))
      //   else
      //     router.replace('/contact/info');
      //   break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, 10, {
    leading: true,
    trailing: false
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleDecScroll = throttle(() => {
    switch (pathname) {
      case '/':
        const currentPan = parseInt(`${searchParams.get('pan') || 0}`) as 0|1|2|3|4;
        if (currentPan > 0) {
          const pan = (currentPan-1) as 0|1|2|3|4;
          router.replace('/?' + createQueryString('pan', `${pan}`), {
            scroll: true
          });
          setPreProgress(tracking['/'].pans[pan].min)
        } else {
          setPreProgress(tracking['/'].pans[0].min)
        }
        break;
      case '/services':
        router.replace('/?' + createQueryString('pan', `${4}`), {
          scroll: true
        });
        break;
      case '/services/discovery':
        if (searchParams.get('demo')) {
          router.replace('/services?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services'][0].min)
        break;
      case '/services/development':
        if (searchParams.get('demo')) {
          router.replace('/services/discovery?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/discovery', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/discovery'][0].min)
        break;
      case '/services/team':
        if (searchParams.get('demo')) {
          router.replace('/services/development?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/development', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/development'][0].min)
        break;
      case '/services/design':
        if (searchParams.get('demo')) {
          router.replace('/services/team?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/team', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/team'][0].min)
        break;
      case '/services/services':
        if (searchParams.get('demo')) {
          router.replace('/services/design?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/services/design', {
            scroll: true
          });
        }
        setPreProgress(tracking['/services/design'][0].min)
        break;
      case '/contact':
        if (searchParams.get('demo')) {
          router.replace('/partners?' + createQueryString('demo', `${searchParams.get('demo')}`), {
            scroll: true
          })
        }
        else {
          router.replace('/partners', {
            scroll: true
          });
        }
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, 10, {
    leading: true,
    trailing: false
  });

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
  //           router.replace('/contact');
  //       } else if (pathname === '/contact')
  //         router.replace('/contact/form');
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
    event.stopPropagation();
    if (!intentional) return;
    setInitScroll(true);
    setScrollHint(false);
    const currentPan = parseInt(`${searchParams.get('pan') || 0}`) as 0|1|2|3|4;
    handleWheelProgress(pathname, (parseInt(`${searchParams.get('pan')}`) || 0) as 0 | 1 | 2 | 3, deltaY, false, preProgress, setPreProgress, (pathname === '/' && currentPan < 4)?0.0001:0.001);
    // if (intentional) {
    if (first) {
      if (y === 1) {
        if (pathname !== '/partners') 
          throttleIncScroll();
        else if (pathname == '/partners') {
          if ((window.innerHeight + Math.round(window.scrollY)) >= (mainRef.current?.offsetHeight??0))
            if (searchParams.get('demo'))
              router.replace('/contact?' + createQueryString('demo', `${searchParams.get('demo')}`), {
                scroll: true
              })
            else
              router.replace('/contact', {
                scroll: true
              });
        } else if (pathname === '/contact')
          if (searchParams.get('demo'))
            router.replace('/contact/form?' + createQueryString('demo', `${searchParams.get('demo')}`), {
              scroll: true
            })
          else
            router.replace('/contact/form', {
              scroll: true
            });
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
    // }
    
  }, {
    eventOptions: {
      passive: false
    },
    preventDefault: true,
  });

  const setPreProgress = useCallback((value: number) => {
    // console.log("setting to: ", value);
    dispatch(setProgress(value));
  }, [dispatch])

  useEffect(() => {
    const path = pathname as keyof typeof tracking;
    if (path !== '/')
      setPreProgress(tracking[path]? tracking[path][0].min : tracking['default'][0].min)
    else {
      const currentPan = parseInt(`${searchParams.get('pan') || 0}`) as 0|1|2|3|4;
      setPreProgress(tracking[path].pans[currentPan].min)
    }

  }, [pathname, searchParams, setPreProgress])

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
    <div className={`transition-all duration-800 scroll-hint absolute ${pathname === '/' ? 'bottom-12':'bottom-8'} left-1/2 transition-all ${scrollHint && !COMING_SOON ? 'opacity-100' : 'opacity-0'}`}><span></span></div>
  )
}

export default NavigationControls;