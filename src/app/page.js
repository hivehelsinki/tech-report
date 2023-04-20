import Button from '../components/Button';
import Badge from '../components/Badge';

export default function Home() {
  return (
    <main className="p-2">
      <h1>Next.js + Tailwind CSS</h1>

      <h2 className="text-2xl font-bold my-5">Components</h2>

      <div id="wrapper" className="flex flex-wrap">
        <div className="basis-1/3">
          <h3 className="font-bold text-xl mb-3">Buttons</h3>
          <Button>component example</Button>
        </div>

        <div className="basis-1/3">
          <h3 className="font-bold text-xl mb-3">Badges</h3>
          <div className="flex gap-3 flex-row">
            <Badge />
            <Badge variant="ongoing" />
            <Badge variant="resolved" />
          </div>
        </div>
        <div className="basis-1/3">
          <h3 className="font-bold text-xl mb-3">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
            consequatur recusandae, possimus distinctio voluptas quos reiciendis
            cum accusantium ab. Asperiores a excepturi corporis perferendis.
            Ipsa beatae id fugiat nobis!
          </p>
        </div>
        <div className="basis-1/3">
          <h3 className="font-bold text-xl mb-3">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
            consequatur recusandae, possimus distinctio voluptas quos reiciendis
            cum accusantium ab. Asperiores a excepturi corporis perferendis.
            Ipsa beatae id fugiat nobis!
          </p>
        </div>
        <div className="basis-1/3">
          <h3 className="font-bold text-xl mb-3">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
            consequatur recusandae, possimus distinctio voluptas quos reiciendis
            cum accusantium ab. Asperiores a excepturi corporis perferendis.
            Ipsa beatae id fugiat nobis!
          </p>
        </div>
      </div>
    </main>
  );
}
