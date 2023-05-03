import { getCurrentUser } from '@/lib/session';
import ReportForm from '../components/ReportForm/ReportForm';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) redirect('/login');
  // if (user.admin) redirect('/issues');
  return (
    <main className="p-2">
      <div className="container lg:px-24">
        <ReportForm />
      </div>
    </main>
  );
}
