import "server-only";
export const dynamic = "force-dynamic";
import { getFirestore } from "firebase-admin/firestore";

export async function POST(request) {
  try {
    const { name, description, numberParticipants } = await request.json();

    const db = getFirestore();
    const coll = db.collection("activities");
    const snapshot = await coll.count().get();
    const key = snapshot.data().count;

    await coll.add({
      name: name,
      description: description,
      nParticipants: numberParticipants,
      key: key,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to add activity" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request) {
  const db = getFirestore();
  const snapshot = await db
    .collection("activities")
    .orderBy("key", "desc")
    .get();
  const documents = snapshot.docs.map((doc) => ({
    name: doc.data().name,
    description: doc.data().description,
    nParticipants: doc.data().nParticipants,
    key: doc.data().key,
    activityId: doc.id,
  }));
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
