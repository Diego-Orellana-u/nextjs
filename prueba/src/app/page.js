import { FormComponent } from "./Components/FormComponent";

import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../libs/firebaseConfig";
import { ActivitiesComponent } from "./Components/ActivitiesComponent";

export async function addActivityToDb(name, description, nParticipants, key) {
  try {
    await addDoc(collection(db, "activities"), {
      name: name,
      description: description,
      nParticipants: nParticipants,
      key: key,
    });

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export default async function Home() {
  return (
    <main className="w-full pt-5">
      <FormComponent />
      <ActivitiesComponent />
    </main>
  );
}

//todo: crear componente de forms reutilizable: Listo
//todo: refactorizar el formulario con react hooks form
//todo: llevar firebase al lado del servidor para incrementar seguridad
//todo: crear subcoleccion
//todo: crear documento que se pueda referenciar en otra parte
//todo: agregar react query

//todo: playwright y jest/vitest
