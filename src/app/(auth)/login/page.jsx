'use client';
import { signIn } from 'next-auth/react';
import Button from '@/components/Button';
import Image from 'next/image';
import landingPageLogo from '@public/landingPageLogo.svg';
import '@/app/globals.css';

export default function SignIn() {
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

        <Button onClick={() => signIn('42-school', { callbackUrl: '/' })}>
          Login
        </Button>
      </div>
    </div>
  );
}
