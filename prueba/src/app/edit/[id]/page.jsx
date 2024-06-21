import { AddMaterials } from "@/app/Components/AddMaterials";
import { FormComponent } from "@/app/Components/FormComponent";
import { GET } from "@/app/api/activity/route";
import { initAdmin } from "@/libs/firebaseAdmin";

export default async function EditActivity({ params }) {
  let id = null;
  let req = null;
  let activity = null;

  await initAdmin();
  id = params.id;
  req = await GET(id);
  activity = await req.json();

  return (
    <div className="mt-10 mx-10 flex flex-col gap-10 items-center">
      <a
        href="/"
        className="py-2 pt-3 px-4 w-[250px] text-center text-white bg-red-800 h-full rounded-md mt-2"
      >
        Volver a las actividades
      </a>
      {activity && (
        <div>
          <h2 className="text-xl text-white">Editar actividad</h2>
          <FormComponent id={params} activity={activity} />
        </div>
      )}
      <AddMaterials id={params} activity={activity} />
    </div>
  );
}
