'use client';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="h-20 w-full text-hdark shadow-lg">
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center justify-between">
            <div className="inline-flex cursor-pointer gap-3">
              <Image src={logo} alt="school logo" className="w-6" />
              <p className="bold text-xl font-bold">Karen</p>
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
                  <DropdownMenu.Item className="hover:cursor-pointer hover:underline hover:underline-offset-4">
                    Issues
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="hover:cursor-pointer hover:underline hover:underline-offset-4">
                    Logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          <div className="hidden md:inline-flex md:items-center md:gap-20">
            <ul className="inline-flex gap-9">
              <li>
                <a
                  href="#"
                  className="cursor-pointer underline underline-offset-4"
                >
                  Issues
                </a>
              </li>
            </ul>
            <div className="inline-flex items-center gap-3">
              <div className="flex h-7 w-7 cursor-pointer items-center justify-around rounded-full bg-hgreen">
                A
              </div>
              <ExitIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
