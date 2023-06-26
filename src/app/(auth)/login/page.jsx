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
        <Image
          src={landingPageLogo}
          alt="school logo"
          width={400}
          height={96}
        />

        <div className="mt-4 flex flex-col items-center gap-2 text-center md:mt-32">
          <p>Welcome to the Technical Issue Reporting System.</p>
          <p>Login to report an issue.</p>
        </div>
        <Button
          className="mt-40 lg:mt-32"
          onClick={() => signIn('42-school', { callbackUrl: '/' })}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
