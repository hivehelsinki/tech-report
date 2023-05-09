import './globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from '@components/ui/toaster';
import { getCurrentUser } from '@/lib/session';
import fs from 'fs';
import yaml from 'js-yaml';

export const metadata = {
  title: 'Report issues',
  description: 'Report technical issues you encounter on the school equipment',
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();
  const ymlData = yaml.load(fs.readFileSync(`./config.yml`, 'utf8'));
  const appName = ymlData.app_name;
  return (
    <html lang="en">
      <body>
        <Toaster />
        {user && <Navbar user={user} appName={appName} />}
        <div>{children}</div>
      </body>
    </html>
  );
}
