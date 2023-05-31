'use client';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { forwardRef, useEffect, useState } from 'react';
import Label from '@components/Label';

const SelectDevice = forwardRef(({ register, setValue }, ref) => {
  const [devicesList, setDevicesList] = useState([]);
  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch('/api/devices');
      const data = await res.json();
      return data.devices;
    };
    const getData = async () => {
      const data = await fetchDevices();
      setDevicesList(data);
    };
    getData();
  }, []);
  const handleDeviceChange = (event) => {
    setValue('device', event.target.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const devices = devicesList.map((device) => {
    return (
      <RadioGroup.Item
        className="inline-flex items-center"
        value={device}
        key={device}
        ref={ref}
        {...register('device', {
          type: 'radio',
          required: true,
        })}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-400">
          <RadioGroup.Indicator>
            <div className="h-3 w-3 rounded-full bg-hyellow dark:bg-gray-300 " />
          </RadioGroup.Indicator>
        </div>
        <label className="pl-2" htmlFor="r1">
          {device}
        </label>
      </RadioGroup.Item>
    );
  });

  return (
    <>
      <Label>Faulty device</Label>
      <RadioGroup.Root
        name="device"
        className="mt-4 flex flex-col space-y-4 md:pl-5"
        onChange={(event) => handleDeviceChange(event)}
        defaultValue="iMac"
      >
        {devices.length > 0 ? (
          devices
        ) : (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 "></div>
            <div className="mb-2.5 h-2.5 max-w-[360px] rounded-full bg-gray-200 "></div>
            <div className="mb-2.5 h-2.5 rounded-full bg-gray-200 "></div>
            <div className="mb-2.5 h-2.5 max-w-[330px] rounded-full bg-gray-200 "></div>
            <div className="mb-2.5 h-2.5 max-w-[300px] rounded-full bg-gray-200 "></div>
            <div className="h-2.5 max-w-[360px] rounded-full bg-gray-200 "></div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </RadioGroup.Root>
    </>
  );
});
SelectDevice.displayName = 'SelectDevice';

export default SelectDevice;
