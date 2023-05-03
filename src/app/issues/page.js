import IssuesTable from '@/components/IssuesTable/IssuesTable';
import { getCurrentUser } from '@/lib/session';

export default async function Issues() {
  const user = await getCurrentUser();
  return (
    <main className="p-2">
      <IssuesTable user={user} />
    </main>
  );
}
