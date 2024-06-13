"use client";

import rightArrow from "/public/rightArrow.svg";
import editIcon from "/public/editIcon.svg";
import deleteIcon from "/public/deleteIcon.svg";

import { useEffect, useState } from "react";
import Image from "next/image";

export const ActivitiesComponent = () => {
  const [activities, setActivities] = useState([]);

  // useEffect(() => {

  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const activitiesArray = [...activities];

  //     querySnapshot.forEach((doc) => {
  //       const docData = doc.data();
  //       // Todo: add id in the creation of the note instead doing it here each time
  //       docData.activityId = doc.id;

  //       activitiesArray.push(docData);
  //     });
  //     setActivities(activitiesArray);
  //   });

  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const res = fetch("/api", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((res) => setActivities(res));
  }, []);

  // useEffect(() => {
  //   getAllActivities();
  // }, []);

  const deleteActivity = async (id) => {
    console.log(id);
    const docRef = doc(db, "activities", id);
    console.log(docRef);
    await deleteDoc(docRef);
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

              <Image
                src={deleteIcon}
                alt="delete icon"
                className="cursor-pointer"
                width={17}
                height={17}
                onClick={() => deleteActivity(doc.activityId)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
