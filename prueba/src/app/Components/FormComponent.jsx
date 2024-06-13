"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const FormComponent = ({ setActivities }) => {
  const [formData, setFormData] = useState({
    actName: "",
    actDesc: "",
    nParticipants: "",
  });

  const path = usePathname();

  // const updateActivity = async () => {
  //   const docRef = doc(db, "activities", id.id);
  //   await updateDoc(docRef, { name, description, nParticipants });
  // };

  //done
  const createActivity = async () => {
    const { actName, actDesc, nParticipants } = formData;

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: actName,
          description: actDesc,
          numberParticipants: nParticipants,
        }),
      });
      if (res.ok) {
        setFormData({ actName: "", actDesc: "", nParticipants: "" });
      } else {
        console.error("Failed");
      }
    } catch (err) {
      console.error("Error adding activity", err);
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
              required
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
