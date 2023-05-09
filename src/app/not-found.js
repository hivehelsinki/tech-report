import Image from 'next/image';
import notFound from '@public/not-found.webp';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <main className="p-2">
      <div className="flex h-screen flex-col items-center justify-center gap-10 text-hdark lg:px-24">
        <div className="relative">
          <Image src={notFound} alt="404" width={900} height={743} />
          <p className="absolute right-4 top-0 text-7xl font-semibold mix-blend-overlay md:text-9xl">
            404
          </p>
        </div>
        <p className="text-lg md:text-2xl">
          Come on buddy, let{"'"}s go{' '}
          <Link
            href={'/'}
            className="cursor-pointer underline underline-offset-4"
          >
            Home
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
