'use client';

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@components/ui/command.jsx';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import Label from '@components/Label';
import ClustersMaps from './ClustersMaps';

// TODO: add logic when pressing enter to select host

const SelectHost = ({ setValue, register, errors }) => {
  const [hostValue, setHostValue] = useState('');
  const [open, setOpen] = useState(false);
  const [hostsList, setHostsList] = useState([]);
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    const fetchHosts = async () => {
      const res = await fetch('/api/hosts');
      const data = await res.json();
      return data.hosts;
    };
    const fetchClusters = async () => {
      const res = await fetch('/api/hosts/map');
      const data = await res.json();
      return data.clusters;
    };
    const getData = async () => {
      const hosts = await fetchHosts();
      const clustersData = await fetchClusters();
      setHostsList(hosts);
      setClusters(clustersData);
    };
    getData();
  }, []);

  const hosts = hostsList.map((host, i) => {
    return (
      <CommandItem className="cursor-pointer text-base" key={i} value={host}>
        {host}
      </CommandItem>
    );
  });
  const handleHostChange = (value, source) => {
    setHostValue(value);
    setValue('host', value, { shouldValidate: true, shouldDirty: true });
    if (source !== 'key') setOpen(false);
  };
  return (
    <div className="mt-7 md:mt-10">
      <Label>Hostname</Label>

      {errors.host && (
        <p className="mt-3 font-light text-hred md:px-5">
          {errors.host.message}
        </p>
      )}
      <div className="mt-4 flex flex-col md:flex-row-reverse md:items-center md:justify-end md:gap-6 md:pl-5">
        <ClustersMaps clusters={clusters} />
        {/* <p className="py-2 md:ml-12">
          Are you connected on{' '}
          <span className="cursor-pointer underline underline-offset-4">
            TODO: use 42 API or data sent via profile?
          </span>
          ?
        </p> */}
        {hostValue && (
          <Cross2Icon
            className="absolute right-14 mt-3 h-5 w-5 cursor-pointer md:relative md:right-0 md:-ml-8 md:mt-3"
            onClick={() => handleHostChange('')}
          />
        )}
        <Command className="rounded-none border dark:bg-stone-950 md:w-2/5">
          <CommandInput
            name="host"
            placeholder="Type a host or search..."
            value={hostValue}
            onFocus={() => setOpen(true)}
            onValueChange={(value) => handleHostChange(value, 'key')}
            className="text-base"
            {...register('host', {
              required: 'This is required',
              validate: (value) =>
                hostsList.includes(value) || 'This host does not exist',
            })}
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
