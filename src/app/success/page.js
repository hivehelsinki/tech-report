'use client';
import Button from '@components/Button';
import Image from 'next/image';
import success from '@public/success.svg';

// TODO: transition from top for the checkmark
const Success = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-around">
      <div className="flex flex-col items-center justify-between">
        <div className="pb-4 md:pb-32">
          <Image
            className="animate-bounce"
            src={success}
            alt="school logo"
            width={200}
            height={200}
          />
        </div>
        <p className="pb-40 pt-4 text-lg text-hgreen md:text-2xl lg:pb-32">
          Issue sucessfully reported. Thank you!
        </p>

        <Button onClick={() => window.location.replace('/')}>Done</Button>
      </div>
    </div>
  );
};

export default Success;
