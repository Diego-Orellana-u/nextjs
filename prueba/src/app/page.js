import { FormComponent } from "./Components/FormComponent";

import { ActivitiesComponent } from "./Components/ActivitiesComponent";
import { initAdmin } from "@/libs/firebaseAdmin";

export default async function Home() {
  await initAdmin();
  return (
    <main className="w-full pt-5">
      <FormComponent />
      <ActivitiesComponent />
    </main>
  );
}

//todo: crear componente de forms reutilizable: Listo
//todo: llevar firebase al lado del servidor para incrementar seguridad: Listo
//todo: refactorizar el formulario con react hooks form
//todo: crear subcoleccion
//todo: crear documento que se pueda referenciar en otra parte --> No se puede, se debe usar id
//todo: agregar react query

//todo: playwright y jest/vitest
