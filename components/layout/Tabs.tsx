'use client'
import { useGesture } from "@use-gesture/react";
import { Children, FC, ReactNode, cloneElement, isValidElement, useCallback, useState } from "react";
import { TABS } from "../gui/OurMethodPage";
import { useRouter, useSearchParams } from "next/navigation";

interface ITab {
  children: ReactNode;
  label: string;
  title: string;
};

const Tabs: FC<{
  children: ReactNode;
  defaultTabLabel: string;
}> = ({
  children,
  defaultTabLabel
}) => {
  const [activeTab, setActiveLabel] = useState(defaultTabLabel);
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
    setActiveLabel(tabs[tabIndex]);
    router.push('/services/our-method?' + createQueryString('tab', `${tabIndex+1}`));
  }
  
  const bind = useGesture({
    onWheelEnd: ({
      direction: [_, y],
      intentional,
      xy
    }) => {
      const tabIndex = tabs.findIndex(tab => tab === activeTab);
      if (y === 1 && intentional) {
        console.log(tabIndex, tabs.length);
        
        if (tabIndex + 1 === tabs.length)
          router.push('/partners');
        else {
          setActiveTab(tabs[tabIndex+1]);
        }

      } else if (y === -1 && intentional) {
        if (tabIndex > 0) {
          setActiveTab(tabs[tabIndex-1])
        }
      }
      // else (currentView > 0 && y === -1)
      //   throttleDecScroll()
    }
  });

  return (<div {...bind()}>
    {Children.map(children, (child, index) => {
      if (!isValidElement<ITab>(child)) {
        return child
      }
      let elementChild: React.ReactElement<ITab> = child;
      if (elementChild.props.label === activeTab)
        return elementChild;
    })}
    <div className="fixed bottom-0 w-screen grid grid-cols-5">
      {Children.map(children, (child, index) => {
        if (!isValidElement<ITab>(child)) {
          return child
        }

        return <TabButton key={index} onClick={setActiveTab} label={child.props.label} isActive={activeTab === child.props.label}>
          {child.props.title}
        </TabButton>
      })}
    </div>
  </div>);
};

const TabButton: FC<{
  children: ReactNode;
  onClick: (value: string) => void;
  label: string;
  isActive?: boolean;
}> = ({
  children,
  onClick,
  label,
  isActive = false
}) => {
  return (<button
    onClick={() => onClick(label)}
    className={`py-5 flex border-t justify-center ${isActive ? 'text-white font-extrabold border-slate-50' : 'text-[#5E5E5E] border-slate-700'} hover:border-slate-50 hover:text-white text-sm hover:font-extrabold transition-all duration-300`}
    >
    {children}
  </button>);
};

export const Tab: FC<ITab> = ({
  children,
}) => {
  return (<>
    {children}
  </>);
}

export default Tabs;