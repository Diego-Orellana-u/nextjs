import { FormComponent } from "@/app/Components/FormComponent";
import { GET } from "@/app/api/activity/route";
import { initAdmin } from "@/libs/firebaseAdmin";

export default async function EditActivity({ params }) {
  await initAdmin();
  const id = params.id;
  const req = await GET(id);
  const activity = await req.json();

  return (
    <div className="mt-10 mx-10 flex gap-10">
      <a
        href="/"
        className="py-2 pt-3 px-4 text-white bg-red-800 h-full rounded-md mt-2"
      >
        Volver a las actividades
      </a>
      <FormComponent id={params} activity={activity} />
    </div>
  );
}
