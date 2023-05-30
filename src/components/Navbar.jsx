'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Avatar from './Avatar';
import ToggleTheme from '@/components/toggletheme';

const Navbar = ({ user, appName }) => {
  return (
    <header className="h-16 w-full border-b text-hdark dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
      <div className="container h-full">
        <nav className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center justify-between">
            <div className="inline-flex cursor-pointer gap-2 ">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 37 37"
                width="28"
                height="28"
                className="fill-[#383838] dark:fill-gray-300"
              >
                <path
                  id="Layer"
                  d="m18.5 37c-10.2 0-18.5-8.3-18.5-18.5 0-10.2 8.3-18.5 18.5-18.5 10.2 0 18.5 8.3 18.5 18.5 0 10.2-8.3 18.5-18.5 18.5zm9-29.4h-4.3v8.8h-9.5v-8.8h-4.2v21.8h4.2v-9h9.5v9h4.3z"
                />
              </svg>
              <span className="bold text-xl font-bold">{appName}</span>
            </div>
          </Link>
          <div className="flex gap-3 md:hidden">
            <ToggleTheme />
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
                    <Link href="/issues">Reports</Link>
                  </DropdownMenu.Item>
                  {process.env.NODE_ENV !== 'production' && (
                    <DropdownMenu.Item className="outline-none hover:cursor-pointer hover:underline hover:underline-offset-4">
                      <Link href="/dev">Components</Link>
                    </DropdownMenu.Item>
                  )}
                  <DropdownMenu.Item
                    className="outline-none hover:cursor-pointer hover:underline hover:underline-offset-4"
                    onSelect={(event) => {
                      event.preventDefault();
                      signOut({
                        callbackUrl: `${window.location.origin}/login`,
                      });
                    }}
                  >
                    Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          <div className="hidden md:inline-flex md:items-center md:gap-20">
            <ul className="inline-flex gap-9">
              <li>
                <Link
                  href="/issues"
                  className="cursor-pointer underline-offset-4 hover:underline"
                >
                  Reports
                </Link>
              </li>
              {process.env.NODE_ENV !== 'production' && (
                <li>
                  <Link
                    href="/dev"
                    className="cursor-pointer underline-offset-4 hover:underline"
                  >
                    Components
                  </Link>
                </li>
              )}
            </ul>
            <div className="inline-flex items-center gap-5">
              <ToggleTheme />
              <div className="inline-flex items-center gap-3">
                <Avatar user={user} />
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    signOut({
                      callbackUrl: `${window.location.origin}/login`,
                    });
                  }}
                >
                  <ExitIcon className="h-6 w-6 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
