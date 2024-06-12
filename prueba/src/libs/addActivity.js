import { db } from "./firebaseConfig";

import { addActivityToDb } from "../app/page";
import { collection, getCountFromServer } from "firebase/firestore";

export default async function addActivity(
  e,
  name,
  description,
  numberParticipants
) {
  e.preventDefault();
  console.log(db);

  const coll = collection(db, "activities");
  const key = (await getCountFromServer(coll)).data().count;

  console.log(key);

  await addActivityToDb(name, description, numberParticipants, key);
}
