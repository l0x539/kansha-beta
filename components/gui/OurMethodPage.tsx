'use client'
import { useCallback, useEffect } from "react";
import Tabs, { Tab } from "../layout/Tabs";
import { useAppDispatch } from "@/store/hooks";
import { updateView } from "@/store/features/gl/glSlice";
import OurMethodTab from "../OurMethodTab";
import { useWheel } from "@use-gesture/react";
import { useRouter, useSearchParams } from "next/navigation";

export const TABS = [
  {
    label: 'research',
    title: 'RESEARCH & DISCOVERY',
    content: <OurMethodTab tab={0} />
  },
  {
    label: 'strategy',
    title: 'STRATEGY & DIRECTION',
    content: <OurMethodTab tab={1} />
  },
  {
    label: 'design',
    title: 'DESIGN & DEVELOPMENT',
    content: <OurMethodTab tab={2} />
  },
  {
    label: 'finesse',
    title: 'FINESSE & LAUNCH',
    content: <OurMethodTab tab={3} />
  },
  {
    label: 'support',
    title: 'SUPPORT & MANAGEMENT',
    content: <OurMethodTab tab={4} />
  },
];

const OurMethodPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateView(6));
  }, [dispatch]);

  const router = useRouter();
  const searchParams  = useSearchParams();  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  );
  const tabs = TABS.map(tab => tab.label);

  const setActiveTab = (tab: string) => {
    const tabIndex = tabs.findIndex(t => t === tab);
    router.push('/services/our-method?' + createQueryString('tab', `${tabIndex+1}`), {
      scroll: true
    });
  }
  
  const bind = useWheel(({
    direction: [_, y],
    intentional,
    last
  }) => {
    if (last) {
      const tabIndex = parseInt(`${searchParams.get('tab')||1}`)-1;
      if (y === 1 && intentional) {
        if (tabIndex + 1 === tabs.length)
          if (searchParams.get('demo'))
            router.push('/partners?' + createQueryString('demo', `${searchParams.get('demo')}`), {
              scroll: true
            })
          else
            router.push('/partners', {
              scroll: true
            });
        else {
          setActiveTab(tabs[tabIndex+1]);
        }
  
      } else if (y === -1 && intentional) {
        if (tabIndex > 0) {
          setActiveTab(tabs[tabIndex-1])
        }
      }
    }
  });

  return (
    <div {...bind()}>
      <Tabs setActiveTab={setActiveTab} tab={tabs[parseInt(`${searchParams.get('tab')||1}`)-1]??'research'}>
        {TABS.map(({content, label, title}, index) => <Tab key={0} label={label} title={title}>
          {content}
        </Tab>)}
      </Tabs>
    </div>
    );
};

export default OurMethodPage;