import { FormComponent } from "@/app/Components/FormComponent";

export default function EditActivity({ params }) {
  return (
    <div className="mt-10 mx-10 flex gap-10">
      <a href="/" className="py-2 pt-3 px-4 text-white bg-red-800 h-12 mt-2">
        Volver a las actividades
      </a>
      <FormComponent id={params} />
    </div>
  );
}
