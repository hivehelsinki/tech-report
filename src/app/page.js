import Button from '../components/Button';
import Badge from '../components/Badge';
import ReportForm from '../components/ReportForm';

export default function Home() {
  return (
    <main className="p-2">
      {/* <div id="wrapper" className="flex flex-wrap">
        <div className="basis-1/3">
          <h3 className="mb-3 text-xl font-bold">Buttons</h3>
          <Button>component example</Button>
        </div>

        <div className="basis-1/3">
          <h3 className="mb-3 text-xl font-bold">Badges</h3>
          <div className="flex flex-row gap-3">
            <Badge />
            <Badge variant="ongoing" />
            <Badge variant="resolved" />
          </div>
        </div>
         <div className="basis-1/3">
          <h3 className="mb-3 text-xl font-bold">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
            consequatur recusandae, possimus distinctio voluptas quos reiciendis
            cum accusantium ab. Asperiores a excepturi corporis perferendis.
            Ipsa beatae id fugiat nobis!
          </p>
        </div>
        <div className="basis-1/3">
          <h3 className="mb-3 text-xl font-bold">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
            consequatur recusandae, possimus distinctio voluptas quos reiciendis
            cum accusantium ab. Asperiores a excepturi corporis perferendis.
            Ipsa beatae id fugiat nobis!
          </p>
        </div>
        <div className="basis-1/3">
          <h3 className="mb-3 text-xl font-bold">Lorem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
            consequatur recusandae, possimus distinctio voluptas quos reiciendis
            cum accusantium ab. Asperiores a excepturi corporis perferendis.
            Ipsa beatae id fugiat nobis!
          </p>
        </div>
      </div> */}
      <ReportForm />
    </main>
  );
}
