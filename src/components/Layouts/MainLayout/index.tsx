import React from "react";

import { SidebarItem } from "./components";

/**
 * @param children Children content to be displayed inside the main template
 */
const MainTemplate: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex h-screen">
    <div className="bg-white hidden lg:block lg:w-[281px] h-full shadow-md fixed">
      <div className="p-4">
        <div className="text-[18px] font-bold mb-4">Sidebar</div>
        <SidebarItem icon="product" src="/product">
          Product
        </SidebarItem>
      </div>
    </div>
    <div className="flex flex-col ml-auto w-full lg:w-[calc(100%-281px)]">
      <div className="bg-white p-4 shadow-md sha">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[18px]">
            Test Frontend Made By Muhammad Zidane Al Saadawi
          </h1>
        </div>
      </div>
      <div className="px-4 py-8 lg:p-8">{children}</div>
    </div>
  </div>
);

export default MainTemplate;
