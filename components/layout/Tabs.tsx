'use client'
import { useGesture, useWheel } from "@use-gesture/react";
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
  tab: string;
  setActiveTab: (value: string) => void;
}> = ({
  children,
  tab,
  setActiveTab
}) => {

  return (<div>
    {Children.map(children, (child, index) => {
      if (!isValidElement<ITab>(child)) {
        return child
      }
      let elementChild: React.ReactElement<ITab> = child;
      if (elementChild.props.label === tab)
        return elementChild;
    })}
    <div className="fixed bottom-0 w-screen grid grid-cols-5">
      {Children.map(children, (child, index) => {
        if (!isValidElement<ITab>(child)) {
          return child
        }

        return <TabButton key={index} onClick={setActiveTab} label={child.props.label} isActive={tab === child.props.label}>
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