'use client';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { CheckIcon } from '@radix-ui/react-icons';

const SelectDevice = () => {
  const devices = ['iMac', 'Mouse', 'Keyboard', 'Other'].map((device) => {
    return (
      <RadioGroup.Item
        className="inline-flex items-center"
        value={device}
        id={device}
        key={device}
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
      <label className="font-bold">Faulty device</label>
      <RadioGroup.Root className="mt-5 flex flex-col space-y-4 pl-5">
        {devices}
      </RadioGroup.Root>
    </>
  );
};

export default SelectDevice;
