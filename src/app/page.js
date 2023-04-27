import { redirect } from 'next/navigation';
import ReportForm from '../components/ReportForm';
import { getCurrentUser } from '@/lib/session';

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect('/login');
  }

  return (
    <main className="p-2">
      <ReportForm />
    </main>
  );
}
