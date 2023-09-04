'use client'
import { useEffect } from "react";
import DesignDevelopment from "../DesignDevelopment";
import FinesseLaunch from "../FinesseLaunch";
import ResearchDiscovery from "../ResearchDiscovery";
import StrategyDirection from "../StrategyDirection";
import SupportManagement from "../SupportManagement";
import Tabs, { Tab } from "../layout/Tabs";
import { useAppDispatch } from "@/store/hooks";
import { updateView } from "@/store/features/gl/glSlice";
import OurMethodTab from "../OurMethodTab";

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

  return (
    <Tabs defaultTabLabel="research">
      {TABS.map(({content, label, title}, index) => <Tab key={0} label={label} title={title}>
        {content}
      </Tab>)}
    </Tabs>);
};

export default OurMethodPage;