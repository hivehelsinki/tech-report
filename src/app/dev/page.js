'use client';
import { notFound } from 'next/navigation';
import Button from '@components/Button';
import Badge from '@components/Badge';
// import SelectStatus from '@/components/IssuesTable/SelectStatus';
import { toast } from '@components/ui/use-toast';

export default function Home() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return (
    <main className="p-2">
      <h1>Next.js + Tailwind CSS</h1>

      <h2 className="my-5 text-2xl font-bold">Components</h2>

      <div id="wrapper" className="flex flex-wrap gap-y-10">
        <div className="basis-full md:basis-1/2">
          <h3 className="mb-3 text-xl font-bold">Buttons</h3>
          <Button>component example</Button>
        </div>
        {/* <div className="basis-full md:basis-1/2">
          <h3 className="mb-3 text-xl font-bold">PopOver</h3>
          <SelectStatus />
        </div> */}

        <div className="basis-full md:basis-1/2">
          <h3 className="mb-3 text-xl font-bold">Badges</h3>
          <div className="flex flex-row gap-3">
            <Badge />
            <Badge variant="ongoing" />
            <Badge variant="resolved" />
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <h3 className="mb-3 text-xl font-bold">Toast</h3>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                toast({ title: 'Hello', description: 'Description' });
              }}
            >
              Toast
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: 'Hello',
                  description: 'Description',
                  variant: 'destructive',
                });
              }}
            >
              Error
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
