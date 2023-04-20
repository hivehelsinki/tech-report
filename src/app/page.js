import Button from '../components/Button';
import Badge from '../components/Badge';
import Accordion from '../components/Accordion';

export default function Home() {
  return (
    <main className="p-2">
      <h1>Next.js + Tailwind CSS</h1>
      <Button>component example</Button>
      <Accordion></Accordion>
      <Badge>badge example</Badge>
    </main>
  );
}
