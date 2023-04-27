import { signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

import Button from '@/components/Button';
import Image from 'next/image';
import landingPageLogo from '@public/landingPageLogo.svg';
import '../app/globals.css';

export default function SignIn({ providers }) {
  return (
    <div className="flex h-screen flex-col items-center justify-around">
      <div className="flex flex-col items-center justify-between">
        <div className="pb-4 md:pb-32">
          <Image
            src={landingPageLogo}
            alt="school logo"
            width={400}
            height={200}
          />
        </div>
        <p className="pb-40 lg:pb-32">Technical issue report system.</p>

        <Button onClick={() => signIn('42-school')}>Login</Button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } };
  }

  return {
    props: {},
  };
}
