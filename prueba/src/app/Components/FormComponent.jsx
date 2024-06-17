"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const FormComponent = ({ id, activity }) => {
  const [formData, setFormData] = useState({
    actName: "",
    actDesc: "",
    nParticipants: "",
  });

  const router = useRouter();

  const path = usePathname();

  useEffect(() => {
    if (path.includes("edit")) {
      setFormData({
        actName: activity.name,
        actDesc: activity.description,
        nParticipants: activity.nParticipants,
      });
    }
  }, []);

  const updateActivity = async () => {
    const { actName, actDesc, nParticipants } = formData;

    try {
      const res = await fetch("/api/activity", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: actName,
          description: actDesc,
          nParticipants: nParticipants,
          id: id,
        }),
      });

      if (res.ok) {
        // router.push("/");
      } else {
        console.error("Failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  //done
  const createActivity = async () => {
    const { actName, actDesc, nParticipants } = formData;

    try {
      const res = await fetch("/api/activities", {
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
        location.reload();
      } else {
        console.error("Failed");
      }
    } catch (err) {
      console.error("Error adding activity", err);
    }
  };

  const handleSubmit = (e) => {
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
