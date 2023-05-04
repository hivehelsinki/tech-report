'use client';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { forwardRef, useEffect, useState } from 'react';

const SelectDevice = forwardRef(({ register }, ref) => {
  const [devicesList, setDevicesList] = useState([]);
  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch('/api/devices');
      const data = await res.json();
      return data.devices;
    };
    const getData = async () => {
      const data = await fetchDevices();
      console.log(data);
      setDevicesList(data);
    };
    getData();
  }, []);

  const devices = devicesList.map((device) => {
    return (
      <RadioGroup.Item
        className="inline-flex items-center"
        value={device}
        key={device}
        ref={ref}
        {...register('device', { required: true })}
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-400">
          <RadioGroup.Indicator>
            <div className="h-4 w-4 rounded-full bg-hyellow " />
          </RadioGroup.Indicator>
        </div>
        <label className="pl-4" htmlFor="r1">
          {device}
        </label>
      </RadioGroup.Item>
    );
  });

  return (
    <>
      <label className="text-xl font-bold">Faulty device</label>
      <RadioGroup.Root
        name="device"
        className="mt-5 flex flex-col space-y-4 md:pl-5"
      >
        {devices.length > 0 ? devices : <p>Loading...</p>}
      </RadioGroup.Root>
    </>
  );
});
SelectDevice.displayName = 'SelectDevice';

export default SelectDevice;
