// "use client";

import rightArrow from "/public/rightArrow.svg";
import editIcon from "/public/editIcon.svg";
import deleteIcon from "/public/deleteIcon.svg";

import Image from "next/image";
import { GET } from "../api/activities/route";

export const ActivitiesComponent = async () => {
  let req = null;
  let activities = null;

  req = await GET();
  activities = await req.json();

  const deleteActivity = async (id) => {
    try {
      const res = await fetch("/api/activities", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
      location.reload();
    } catch (err) {}
  };

  return (
    <div className="flex flex-col border-t-[1px] border-[#555]">
      {activities &&
        activities.map((doc) => (
          <div
            key={doc.activityId}
            className="flex justify-between px-16 border-b-[1px] border-[#555] py-5"
          >
            <div>
              <span>{doc.name}</span>
            </div>
            <div className="flex gap-4">
              {/* todo: create clickable icon component */}
              <a href={`/${doc.activityId}`}>
                <Image
                  src={rightArrow}
                  alt="right arrow icon"
                  width={20}
                  height={20}
                />
              </a>
              <a href={`/edit/${doc.activityId}`}>
                <Image src={editIcon} alt="edit icon" width={20} height={20} />
              </a>

              {/* <Image
                src={deleteIcon}
                alt="delete icon"
                className="cursor-pointer"
                width={17}
                height={17}
                onClick={() => deleteActivity(doc.activityId)}
              /> */}
            </div>
          </div>
        ))}
    </div>
  );
};
