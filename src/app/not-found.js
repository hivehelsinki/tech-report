import Image from 'next/image';
import notFound from '@public/not-found.webp';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <main className="p-2 pt-20">
      <div className="flex h-full flex-col items-center justify-center gap-12 text-hdark lg:px-24">
        <div className="relative">
          <Image src={notFound} alt="404" width={500} height={500} />
          <p className="absolute right-4 top-1 text-7xl text-white mix-blend-overlay md:text-8xl">
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
