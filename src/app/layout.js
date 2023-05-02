import './globals.css';
import Navbar from '../components/Navbar';
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
        {user && <Navbar user={user} />}
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
