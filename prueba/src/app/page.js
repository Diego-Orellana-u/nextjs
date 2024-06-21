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
//todo: convertir activities list en server component -> hecho pero ocasionó problemas en el deployment
//todo: crear objeto dentro de documento: Listo
//todo: crear documento que se pueda referenciar en otra parte --> No se puede, se debe usar id
//todo: refactorizar el formulario con react hooks form
//todo: agregar react query

//todo: playwright y jest/vitest
