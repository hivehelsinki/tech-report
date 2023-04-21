'use client';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { ExitIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Navbar = () => {
  return (
    <div className="h-20 w-screen shadow-lg">
      <div className="container">
        <div className="mt-auto flex items-center justify-between pt-7">
          <div className="inline-flex gap-3">
            <Image src={logo} alt="school logo" className="w-6" />
            <p className="bold text-xl font-bold">Karen</p>
          </div>
          <div className="md:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>...</DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={8}
                  arrowPadding={3}
                  className="mr-6 flex-col justify-between border bg-white px-5 drop-shadow-xl"
                >
                  <DropdownMenu.Item className="my-5 hover:bg-hblue">
                    issues
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="my-5 hover:bg-hblue">
                    logout
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          <div className="hidden md:inline-flex md:items-center md:gap-24">
            <a href="#">issues</a>
            <div className="inline-flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-around rounded-full bg-hgreen">
                A
              </div>
              <ExitIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
