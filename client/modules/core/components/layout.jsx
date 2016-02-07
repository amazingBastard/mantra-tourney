import React from 'react';
import Logo from './logo.jsx';
import Copyright from './copyright.jsx';

const Layout = ({content = () => null }) => (
  <main className="layout">
    <header className="header">
      <Logo />
    </header>

    <content className="content">
      {content()}
    </content>

    <footer className="footer">
      <Copyright />
    </footer>
  </main>
);

export default Layout;
