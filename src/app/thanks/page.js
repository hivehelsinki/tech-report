import Button from '@components/Button';
import Image from 'next/image';
import success from '@public/success.svg';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

// TODO: transition from top for the checkmark
const Success = async () => {
  const user = await getCurrentUser();

  if (!user) redirect('/login');
  return (
    <div className="container flex h-screen flex-col items-center justify-center gap-10">
      <Image
        className="animate-bounce"
        src={success}
        alt="school logo"
        width={150}
        height={150}
      />
      <p className="text-hblack text-lg md:text-2xl">
        Thank you for your contribution!
      </p>

      <a href="/">
        <Button>Home</Button>
      </a>
    </div>
  );
};

export default Success;
