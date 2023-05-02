'use client';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import Link from 'next/link';

// TODO: split error by capital letter and display that!
const Error = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="flex h-screen flex-col items-center justify-around">
      <div className="flex flex-col items-center gap-44 md:gap-72">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-2xl">{error}</h1>
          <p className="text text-lg">You do not have permission to sign in.</p>
        </div>
        <Link href={'/'}>
          <Button>Try Again</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
