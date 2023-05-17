import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@components/ui/toaster';
import { getCurrentUser } from '@/lib/session';
import fs from 'fs';
import yaml from 'js-yaml';
const ymlData = yaml.load(fs.readFileSync(`./config.yml`, 'utf8'));

export const metadata = {
  title: `${ymlData.app_name} | Report issues`,
  description: 'Report technical issues you encounter on the school equipment',
};

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();
  const appName = ymlData.app_name;
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        {user && <Navbar user={user} appName={appName} />}
        <div>{children}</div>
        {user && <Footer />}
      </body>
    </html>
  );
}
