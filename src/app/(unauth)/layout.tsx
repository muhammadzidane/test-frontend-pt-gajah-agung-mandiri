import React from "react";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white w-[360px] p-7 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
