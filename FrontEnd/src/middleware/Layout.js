import React, { useState } from 'react';
import Aside from '../Sidebar/Aside';
import Main from '../content/Main';
import Footer from '../content/Footer';

function Layout({ setLocale }) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className='app'>
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <Footer />
    </div>
  );
}

export default Layout;
