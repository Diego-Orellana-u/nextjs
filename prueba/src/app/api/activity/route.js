import "server-only";
export const dynamic = "force-dynamic";
import { getFirestore } from "firebase-admin/firestore";

export async function GET(request) {
  const id = request;
  try {
    const db = getFirestore();
    const ref = (await db.collection("activities").doc(id).get()).data();
    return new Response(JSON.stringify(ref), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to load activity" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request) {
  const { name, description, nParticipants, id } = await request.json();

  try {
    const db = getFirestore();
    const ref = db.collection("activities").doc(id.id);

    const res = ref.update({ name, description, nParticipants });
    return new Response(
      JSON.stringify(
        { message: "app updated successfully" },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      )
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to update activity" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
