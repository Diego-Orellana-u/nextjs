import { doc, getDoc } from "firebase/firestore";
import { db } from "../../libs/firebaseConfig";

// const getIndActivity = async (docId) => {
//   const docRef = doc(db, "activities", docId);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     console.log("No such document!");
//   }
// };

export default async function Activity({ params }) {
  // const activity = await getIndActivity(params.activityId);
  // return (
  //   <div className="pt-10 px-10">
  //     <a href="/">Back to activities</a>
  //     <div className="mt-16 border-[1px] border-red-300 h-[700px] px-10 py-12 text-white">
  //       <h2 className="text-2xl mb-4">{activity.name}</h2>
  //       <p className="text-base mb-5">{activity.description}</p>
  //       <span className="text-sm">
  //         Amount of participants: {activity.nParticipants}
  //       </span>
  //     </div>
  //   </div>
  // );
}
