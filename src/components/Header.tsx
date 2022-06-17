import React from 'react';

const Header: React.FC = ({ children }) => {
  return (
    <header className="p-4 border-b-4 border-background flex justify-between items-center">
      <h1 className="text-3xl font-semibold">CB | Lanches</h1>
      <nav>{children}</nav>
    </header>
  );
};

export default Header;
