import '@/app/globals.css';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function IssuesLayout({ children }) {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  return <div className="md:container">{children}</div>;
}
