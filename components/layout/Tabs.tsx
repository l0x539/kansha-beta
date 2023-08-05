'use client'
import { Children, FC, ReactNode, cloneElement, isValidElement, useState } from "react";

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
  const [activeTab, setActiveTab] = useState(defaultTabLabel);
  return (<>
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
  </>);
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