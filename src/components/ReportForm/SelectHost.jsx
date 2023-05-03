'use client';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@components/ui/command.jsx';
import { useState } from 'react';

// TODO: add logic when pressing enter to select host
const SelectHost = () => {
  const [hostValue, setHostValue] = useState('');
  const [open, setOpen] = useState(false);
  const hosts = [
    'c1r1p1',
    'c1r1p2',
    'c1r1p3',
    'c1r1p4',
    'c1r1p5',
    'c1r1p6',
    'c1r1p7',
    'c1r1p8',
    'c1r1p9',
    'c1r1p10',
    'c1r1p11',
    'c1r2p1',
    'c1r2p2',
    'c1r2p3',
    'c1r2p4',
    'c1r2p5',
    'c1r2p6',
    'c1r3p1',
    'c1r3p2',
    'c1r3p3',
    'c1r3p4',
    'c1r3p5',
    'c1r3p6',
    'c1r3p7',
    'c1r3p8',
    'c1r3p9',
    'c1r4p1',
    'c1r4p2',
    'c1r4p3',
    'c1r4p4',
    'c1r4p5',
    'c1r4p6',
    'c1r4p7',
    'c1r4p8',
    'c1r4p9',
    'c1r4p10',
    'c1r4p11',
    'c1r5p1',
    'c1r5p2',
    'c1r5p3',
    'c1r5p4',
    'c1r5p5',
    'c1r5p6',
    'c1r5p7',
    'c1r5p8',
    'c1r5p9',
    'c1r5p10',
    'c1r5p11',
    'c1r5p12',
    'c1r5p13',
    'c1r5p14',
    'c1r5p15',
    'c1r5p16',
    'c1r5p17',
    'c1r5p18',
    'c1r5p19',
    'c1r5p20',
    'c1r5p21',
    'c1r6p1',
    'c1r6p2',
    'c1r6p3',
    'c1r6p4',
    'c1r6p5',
    'c1r6p6',
    'c1r6p7',
    'c1r6p8',
    'c1r6p9',
    'c1r6p10',
    'c1r6p11',
    'c1r6p12',
    'c1r6p13',
    'c1r6p14',
    'c1r6p15',
    'c1r6p16',
    'c1r6p17',
    'c1r6p18',
    'c1r6p19',
    'c1r6p20',
    'c1r6p21',
    'c2r1p1',
    'c2r1p2',
    'c2r1p3',
    'c2r1p4',
    'c2r1p5',
    'c2r1p6',
    'c2r1p7',
    'c2r1p8',
    'c2r1p9',
    'c2r1p10',
    'c2r1p11',
    'c2r1p12',
    'c2r2p1',
    'c2r2p2',
    'c2r2p3',
    'c2r2p4',
    'c2r2p5',
    'c2r2p6',
    'c2r2p7',
    'c2r2p8',
    'c2r2p9',
    'c2r2p10',
    'c2r2p11',
    'c2r2p12',
    'c2r2p13',
    'c2r3p1',
    'c2r3p2',
    'c2r3p3',
    'c2r3p4',
    'c2r3p5',
    'c2r3p6',
    'c2r3p7',
    'c2r3p8',
    'c2r3p9',
    'c2r3p10',
    'c2r3p11',
    'c2r3p12',
    'c2r3p13',
    'c2r4p1',
    'c2r4p2',
    'c2r4p3',
    'c2r4p4',
    'c2r4p5',
    'c2r4p6',
    'c2r4p7',
    'c2r4p8',
    'c2r4p9',
    'c2r4p10',
    'c2r4p11',
    'c2r4p12',
    'c2r5p1',
    'c2r5p2',
    'c2r5p3',
    'c2r5p4',
    'c2r5p5',
    'c2r5p6',
    'c2r5p7',
    'c2r5p8',
    'c2r5p9',
    'c2r5p10',
    'c2r5p11',
    'c2r5p12',
    'c2r5p13',
    'c2r6p1',
    'c2r6p2',
    'c2r6p3',
    'c2r6p4',
    'c2r6p5',
    'c2r6p6',
    'c2r6p7',
    'c2r6p8',
    'c2r6p9',
    'c2r6p10',
    'c2r6p11',
    'c2r6p12',
    'c2r6p13',
    'c3r1p1',
    'c3r1p2',
    'c3r1p3',
    'c3r1p4',
    'c3r1p5',
    'c3r1p6',
    'c3r1p7',
    'c3r2p1',
    'c3r2p2',
    'c3r2p3',
    'c3r2p4',
    'c3r2p5',
    'c3r2p6',
    'c3r2p7',
    'c3r3p1',
    'c3r3p2',
    'c3r3p3',
    'c3r3p4',
    'c3r3p5',
    'c3r3p6',
    'c3r4p1',
    'c3r4p2',
    'c3r4p3',
    'c3r4p4',
    'c3r4p5',
    'c3r4p6',
    'c3r5p1',
    'c3r5p2',
    'c3r5p3',
    'c3r5p4',
    'c3r5p5',
    'c3r5p6',
  ].map((host, i) => {
    return (
      <CommandItem className="cursor-pointer text-base" key={i} value={host}>
        {host}
      </CommandItem>
    );
  });
  const handleHostChange = (value, source) => {
    setHostValue(value);
    if (source !== 'key') setOpen(false);
  };
  return (
    <div className="mt-5 md:mt-10">
      <label className="text-xl font-bold">Hostname</label>
      <div className="mt-4 flex flex-col md:flex-row-reverse md:justify-end md:pl-5">
        <p className="py-2 md:ml-12">
          Are you connected on
          <span
            className="cursor-pointer underline underline-offset-4"
            onClick={() => handleHostChange('c2r2p12')}
          >
            {' '}
            c2r2p12
          </span>
          ?
        </p>
        <Command className="rounded-none border md:w-2/5">
          <CommandInput
            placeholder="Type a host or search..."
            value={hostValue}
            onFocus={() => setOpen(true)}
            onValueChange={(value) => handleHostChange(value, 'key')}
            className="text-base"
          />
          <CommandList
            className={!open && 'hidden'}
            onClick={(event) =>
              handleHostChange(event.target.getAttribute('data-value'))
            }
          >
            <CommandEmpty>No results found.</CommandEmpty>
            {hosts}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default SelectHost;
