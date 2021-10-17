import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt } from 'react-icons/fa';
import { WiDayCloudyHigh, WiTsunami, WiSunset, WiMoonWaningCrescent4, WiMoonset, WiThermometer } from 'react-icons/wi'
import sidebarBg from '../assets/bg1.jpg';

const Aside = ({ collapsed, handleToggleSidebar, toggled }) => {
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Directory
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            <a href="/">Dashboard</a>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            title="Maritime Weather Anlysis"
            icon={<WiThermometer />}
          >
            <MenuItem><a href="/surface">Surface Analysis</a></MenuItem>
          </SubMenu>
          <SubMenu
            title="Forecast"
            icon={<WiDayCloudyHigh />}
          >
            <MenuItem><a href="/socalfcstgraphic">Southern California Operational Area (SOCAL)</a></MenuItem>
            <MenuItem><a href="/dgoparea">Diego Garcia Operational Area</a></MenuItem>
          </SubMenu>
          <SubMenu
            title="Arabian Gulf"
            icon={<WiMoonWaningCrescent4 />}
          >
            <MenuItem><a href="/ag">Arabian Gulf Text Report</a></MenuItem>
          </SubMenu>
          <SubMenu
            title="Arabian Seas"
            icon={<WiMoonset />}
          >
            <MenuItem><a href="/as">Arabian Seas Text Report</a></MenuItem>
          </SubMenu>
          <SubMenu
            title="Red Sea"
            icon={<WiTsunami />}
          >
            <MenuItem><a href="/rs">Red Sea Text Report</a></MenuItem>
          </SubMenu>
          <SubMenu
            title="Tropical Links"
            icon={<WiSunset />}
          >
            <MenuItem><a href="https://www.metoc.navy.mil/jtwc/jtwc.html">JTWC Tropical Feed</a></MenuItem>
            <MenuItem><a href="https://www.metoc.navy.mil/fnmoc/fnmoc.html">FNMOC Satellite Data Tropical Cyclone Webpage (TCWEB)</a></MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
