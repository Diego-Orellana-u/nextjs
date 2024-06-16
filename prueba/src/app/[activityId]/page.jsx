import { initAdmin } from "@/libs/firebaseAdmin";
import { GET } from "../api/activity/route";

export default async function Activity({ params }) {
  await initAdmin();
  const id = params.activityId;

  const getActivity = await GET(id);

  const activity = await getActivity.json();

  // Cuando haces la peticion desde un server component, no debes hacer un fetch, si no que simplemente ejecutar la funcion

  return (
    <div className="pt-10 px-10">
      <a href="/">Back to activities</a>
      <div className="mt-16 border-[1px] border-red-300 h-[700px] px-10 py-12 text-white">
        <h2 className="text-2xl mb-4">{activity.name}</h2>
        <p className="text-base mb-5">{activity.description}</p>
        <span className="text-sm">
          Amount of participants: {activity.nParticipants}
        </span>
      </div>
    </div>
  );
}
