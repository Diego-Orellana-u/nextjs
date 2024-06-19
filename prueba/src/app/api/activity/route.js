import "server-only";
export const dynamic = "force-dynamic";
import { getFirestore } from "firebase-admin/firestore";

export async function GET(request) {
  const id = request;
  try {
    const db = getFirestore();
    const ref = (await db.collection("activities").doc(id).get()).data();
    if (ref) {
      return new Response(JSON.stringify(ref), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to load activity" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request) {
  const {
    field,
    name,
    description,
    nParticipants,
    id,
    materialName,
    quantity,
    price,
  } = await request.json();

  try {
    const db = getFirestore();
    const ref = db.collection("activities").doc(id.id);

    if (field !== "material") {
      ref.update({ name, description, nParticipants });
      return new Response(
        JSON.stringify(
          { message: "app updated successfully" },
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        )
      );
    } else {
      ref.update({ material: { materialName, quantity, price } });
      return new Response(
        JSON.stringify(
          { message: "materials updated successfully" },
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        )
      );
    }
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
