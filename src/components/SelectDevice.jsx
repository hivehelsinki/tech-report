'use client';
import * as RadioGroup from '@radix-ui/react-radio-group';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const SelectDevice = () => {
  const { data, error, isLoading } = useSWR('/api/devices', fetcher);

  // TODO: the following conditions and logic can be done better.
  if (isLoading) {
    return (
      <>
        <label className="font-bold">Faulty device</label>
        {/* TODO: PLEASE DO BETTER! */}
        <p>Loading...</p>
      </>
    );
  }
  if (error) {
    return (
      <>
        <label className="font-bold">Faulty device</label>
        <p>Error while loading devices</p>
      </>
    );
  }
  return (
    <>
      <label className="font-bold">Faulty device</label>
      <RadioGroup.Root className="mt-5 flex flex-col space-y-4 pl-5">
        {data.devices.map((device, key) => (
          <RadioGroup.Item
            className="inline-flex items-center"
            value={device}
            id={device}
            key={key}
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
        ))}
      </RadioGroup.Root>
    </>
  );
};

export default SelectDevice;
