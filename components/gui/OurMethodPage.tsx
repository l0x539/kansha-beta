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

export const TABS = [
  {
    label: 'research',
    title: 'RESEARCH & DISCOVERY',
    content: <ResearchDiscovery />
  },
  {
    label: 'strategy',
    title: 'STRATEGY & DIRECTION',
    content: <StrategyDirection />
  },
  {
    label: 'design',
    title: 'DESIGN & DEVELOPMENT',
    content: <DesignDevelopment />
  },
  {
    label: 'finesse',
    title: 'FINESSE & LAUNCH',
    content: <FinesseLaunch />
  },
  {
    label: 'support',
    title: 'SUPPORT & MANAGEMENT',
    content: <SupportManagement />
  },
];

const OurMethodPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateView(6));
  }, [dispatch]);

  return (
    <Tabs defaultTabLabel="research">
      {TABS.map(({content, label, title}, index) => <Tab key={index} label={label} title={title}>
        {content}
      </Tab>)}
    </Tabs>);
};

export default OurMethodPage;