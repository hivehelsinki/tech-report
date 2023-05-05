import './globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from '@components/ui/toaster';
import { getCurrentUser } from '@/lib/session';

export const metadata = {
  title: 'Karen | Report issues',
  description: 'Report technical issues you encounter on the school equipment',
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <Toaster />
        {user && <Navbar user={user} />}
        <div>{children}</div>
      </body>
    </html>
  );
}
