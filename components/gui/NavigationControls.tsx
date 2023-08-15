'use client'
import { decrementView, incrementView, selectGl, updateView } from "@/store/features/gl/glSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useWheel } from "@use-gesture/react";
import { FC, ReactNode, useCallback, useEffect } from "react";
import {
  throttle
} from 'lodash';
import { useRouter } from 'next/navigation';

const NavigationControls: FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleIncScroll = useCallback(throttle(() => {
    dispatch(updateView(1));
  }, 1500, {
    leading: true,
    trailing: false
  }), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleDecScroll = useCallback(throttle(() => {
    dispatch(updateView(0));
  }, 1500, {
    leading: true,
    trailing: false
  }), []);
  const {
    currentView
  } = useAppSelector(selectGl);
  const bind = useWheel(({
    direction: [_, y]
  }) => {
    if (currentView < 1 && y === 1)
      throttleIncScroll();
    // else (currentView > 0 && y === -1)
    //   throttleDecScroll()
  });

  useEffect(() => {
    if (currentView === 1) {
      router.push('/services')
    }
  }, [currentView, router])
  return (<main {...bind()} className='top-0 left-0 h-screen w-screen bg-transparent font-main'>
      {children}
    </main>);
};

export default NavigationControls;