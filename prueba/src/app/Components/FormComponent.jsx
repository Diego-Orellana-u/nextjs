"use client";
import { useState } from "react";
import addActivity from "@/libs/addActivity";
import { usePathname } from "next/navigation";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/libs/firebaseConfig";

export const FormComponent = ({ id }) => {
  const [formData, setFormData] = useState({
    actName: "",
    actDesc: "",
    nParticipants: "",
  });

  let name = formData.actName;
  let description = formData.actDesc;
  let nParticipants = formData.nParticipants;

  const path = usePathname();

  const updateActivity = async () => {
    const docRef = doc(db, "activities", id.id);
    await updateDoc(docRef, { name, description, nParticipants });
  };

  const createActivity = (e) => {
    const addFunc = addActivity(e, name, description, nParticipants);
    if (addFunc) {
      setFormData({ actName: "", actDesc: "", nParticipants: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (path.includes("edit")) {
      updateActivity();
    } else if (path === "/") {
      createActivity(e);
    }
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <form className="relative" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <label htmlFor="actName" className="block cursor-auto">
              Activity Name
            </label>
            <input
              name="actName"
              required
              id="actName"
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  actName: e.target.value,
                }))
              }
              value={formData.actName}
              className="py-3 w-[400px] px-4 text-black bg-slate-200 rounded"
            />
          </div>

          <div>
            <label htmlFor="actDesc" className="block cursor-auto">
              Activity Description
            </label>
            <input
              name="actDesc"
              id="actDesc"
              value={formData.actDesc}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  actDesc: e.target.value,
                }))
              }
              className="py-3 w-[400px] px-4 text-black bg-slate-200 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nParticipants">N° of participants</label>
            <input
              id="nParticipants"
              name="nParticipants"
              value={formData.nParticipants}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  nParticipants: e.target.value,
                }))
              }
              className="py-3 w-[150px] px-4 text-black bg-slate-200 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-800 text-white rounded-lg py-3 px-5 text-lg mt-5"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
