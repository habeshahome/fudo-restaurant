import React, { useEffect, useState } from "react";
import Image from 'next/image'

const Tabs = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="w-100 custom-tab" it="tab-section">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabsData.map(({ tab }, index) => (
            <li className="mr-2" key={index} >
            <a  
                href="#tab-section" 
                className={`${index === activeTab ? "active" : " "} flex flex-row items-center p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 active:text-green-300"`} 
                onClick={() => setActiveTab(index)}
                >
            <Image 
                src={`/img/Group-9047.png`} 
                alt="" 
                width="32" 
                height="32" 
            />
                <h3 className="pl-4"> {tab.name}  </h3>
            </a>
        </li>
        ))}
      </ul>

      <div className="tab-content p-3">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabsPane = ({ children }) => {
  return { children };
};

Tabs.TabsPane = TabsPane;

export default Tabs;