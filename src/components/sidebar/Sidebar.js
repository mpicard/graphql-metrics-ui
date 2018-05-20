import './Sidebar.css';

import React from 'react';

import Link from '../link/Link';

const Sidebar = () => (
  <nav className="Sidebar">
    <ul>
      <li>
        <Link href="/">Operations</Link>
      </li>
      <li>
        <Link href="/schema">Schema</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
