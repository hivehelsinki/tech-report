import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Karen | Report issues',
  description: 'Report technical issues you encounter on the school equipment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
