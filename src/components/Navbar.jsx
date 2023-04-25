'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import { ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Navbar = () => {
  return (
    <header className="h-16 w-full text-hdark shadow">
      <div className="container h-full">
        <nav className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center justify-between">
            <div className="inline-flex cursor-pointer gap-2">
              <Image src={logo} alt="school logo" width={28} height={28} />
              <span className="bold text-xl font-bold">Karen</span>
            </div>
          </Link>
          <div className="md:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <HamburgerMenuIcon className="h-7 w-7" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={8}
                  className="mr-6 flex-col justify-between space-y-5 border bg-white px-8 py-5 drop-shadow-xl md:hidden"
                >
                  <DropdownMenu.Item className="outline-none hover:cursor-pointer hover:underline hover:underline-offset-4">
                    <Link href="#">Issues</Link>
                  </DropdownMenu.Item>
                  {process.env.NODE_ENV !== 'production' && (
                    <DropdownMenu.Item className="outline-none hover:cursor-pointer hover:underline hover:underline-offset-4">
                      <Link href="/dev">Components</Link>
                    </DropdownMenu.Item>
                  )}
                  <DropdownMenu.Item className="outline-none hover:cursor-pointer ">
                    <button className="border-none hover:underline hover:underline-offset-4">
                      Logout
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          <div className="hidden md:inline-flex md:items-center md:gap-20">
            <ul className="inline-flex gap-9">
              <li>
                <Link
                  href="#"
                  className="cursor-pointer underline underline-offset-4"
                >
                  Issues
                </Link>
              </li>
              {process.env.NODE_ENV !== 'production' && (
                <li>
                  <Link
                    href="/dev"
                    className="cursor-pointer underline underline-offset-4"
                  >
                    Components
                  </Link>
                </li>
              )}
            </ul>
            <div className="inline-flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-around rounded-full bg-hgreen">
                A
              </div>
              <button>
                <ExitIcon className="h-6 w-6 cursor-pointer" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
