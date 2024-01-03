'use client';

import { useState } from 'react';

import Navigation from './Navigation';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mb-10 flex w-full items-center justify-between px-3 py-4 sm:mb-20 lg:mb-10">
      <Logo />
      <Navigation isOpen={isOpen} handleClick={handleClick} />
      <HamburgerButton handleClick={handleClick} />
    </header>
  );
}
