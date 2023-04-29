import '@/app/globals.css';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function LoginLayout({ children }) {
  const user = await getCurrentUser();
  if (user) redirect('/');

  return <div className="container">{children}</div>;
}
