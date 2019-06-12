import React from 'react';

const MenuTabs = ({ pageRoute, pageName, isActive }) => {
  return (
    <a href={pageRoute} className={`${isActive} item`}>
      {pageName}
    </a>
  );
};

// Need to break down the tabs into the route I want it to follow
// The name of the actual page
// and whether or not the tab is active
