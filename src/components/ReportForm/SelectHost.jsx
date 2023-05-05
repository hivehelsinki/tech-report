'use client';

import buildHostSuggestion from '@/lib/buildHostSuggestion';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@components/ui/command.jsx';
import { useEffect, useState } from 'react';

// TODO: add logic when pressing enter to select host

const SelectHost = ({ setValue, register, errors }) => {
  const [hostValue, setHostValue] = useState('');
  const [ip, setIP] = useState('');
  const [hostSuggestion, setHostSuggestion] = useState('');
  const [open, setOpen] = useState(false);
  const [hostsList, setHostsList] = useState([]);

  useEffect(() => {
    const fetchHosts = async () => {
      const res = await fetch('/api/hosts');
      const data = await res.json();
      return data.hosts;
    };
    const getData = async () => {
      const data = await fetchHosts();
      setHostsList(data);
    };
    getData();
    const getIP = async () => {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      setIP(data.ip);
    };
    getIP();
  }, []);

  useEffect(() => {
    if (hostsList.length > 0 && ip) {
      const suggestion = buildHostSuggestion(ip, hostsList);
      setHostSuggestion(suggestion);
    }
  }, [hostsList, ip]);
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
    <div className="mt-5 md:mt-10">
      <label className="text-xl font-bold">Hostname</label>
      {errors.host && (
        <p className="mt-3 font-light text-hred md:px-5">
          {errors.host.message}
        </p>
      )}
      <div className="mt-4 flex flex-col md:flex-row-reverse md:justify-end md:pl-5">
        {hostSuggestion && (
          <p className="py-2 md:ml-12">
            Are you connected on
            <span
              className="cursor-pointer underline underline-offset-4"
              onClick={() => handleHostChange(hostSuggestion)}
            >
              {' '}
              {hostSuggestion}
            </span>
            ?
          </p>
        )}
        <Command className="rounded-none border md:w-2/5">
          <CommandInput
            name="host"
            placeholder="Type a host or search..."
            value={hostValue}
            onFocus={() => setOpen(true)}
            onValueChange={(value) => handleHostChange(value, 'key')}
            className="text-base"
            {...register('host', { required: 'This is required' })}
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
