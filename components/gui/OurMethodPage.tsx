'use client'
import Tabs, { Tab } from "../layout/Tabs";

const TABS = [
  {
    label: 'research',
    title: 'RESEARCH & DISCOVERY',
    content: <div className="absolute flex justify-center items-center w-screen h-screen text-3xl top-0 left-0 text-white"><span>RESEARCH</span></div>
  },
  {
    label: 'strategy',
    title: 'STRATEGY & DIRECTION',
    content: <div className="absolute flex justify-center items-center w-screen h-screen text-3xl top-0 left-0 text-white"><span>STRATEGY</span></div>
  },
  {
    label: 'design',
    title: 'DESIGN & DEVELOPMENT',
    content: <div className="absolute flex justify-center items-center w-screen h-screen text-3xl top-0 left-0 text-white"><span>DESIGN</span></div>
  },
  {
    label: 'finesse',
    title: 'FINESSE & LAUNCH',
    content: <div className="absolute flex justify-center items-center w-screen h-screen text-3xl top-0 left-0 text-white"><span>FINESSE</span></div>
  },
  {
    label: 'support',
    title: 'SUPPORT & MANAGEMENT',
    content: <div className="absolute flex justify-center items-center w-screen h-screen text-3xl top-0 left-0 text-white"><span>SUPPORT</span></div>
  },
];

const OurMethodPage = () => {
  return (
    <Tabs defaultTabLabel="research">
      {TABS.map(({content, label, title}, index) => <Tab key={index} label={label} title={title}>
        {content}
      </Tab>)}
    </Tabs>);
};

export default OurMethodPage;