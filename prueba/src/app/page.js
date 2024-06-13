import { FormComponent } from "./Components/FormComponent";

import { ActivitiesComponent } from "./Components/ActivitiesComponent";

export default async function Home() {
  return (
    <main className="w-full pt-5">
      <FormComponent />
      <ActivitiesComponent />
    </main>
  );
}

//todo: crear componente de forms reutilizable: Listo
//todo: llevar firebase al lado del servidor para incrementar seguridad
//todo: refactorizar el formulario con react hooks form
//todo: crear subcoleccion
//todo: crear documento que se pueda referenciar en otra parte
//todo: agregar react query

//todo: playwright y jest/vitest