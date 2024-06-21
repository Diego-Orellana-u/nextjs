"use client";

import { useEffect, useState } from "react";

export const AddMaterials = ({ id, activity }) => {
  const [material, setMaterial] = useState({
    materialName: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    setMaterial({
      materialName: activity.materialName ?? "",
      quantity: activity.quantity ?? "",
      price: activity.price ?? "",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { materialName, quantity, price } = material;

    try {
      const res = await fetch("/api/activity", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          materialName,
          quantity,
          price,
          id,
          field: "material",
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-white self-start">Add Materials</h2>
      <div className="flex flex-col items-center mb-10">
        <form className="relative" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-5">
            <div>
              <label htmlFor="materialName" className="block cursor-auto">
                Material Name
              </label>
              <input
                id="materialName"
                required
                value={material.materialName}
                onChange={(e) =>
                  setMaterial((prevState) => ({
                    ...prevState,
                    materialName: e.target.value,
                  }))
                }
                name="materialName"
                className="py-3 w-[400px] px-4 text-black bg-slate-200 rounded"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block cursor-auto">
                Quantity
              </label>
              <input
                id="quantity"
                value={material.quantity}
                onChange={(e) =>
                  setMaterial((prevState) => ({
                    ...prevState,
                    quantity: e.target.value,
                  }))
                }
                name="quantity"
                className="py-3 w-[400px] px-4 text-black bg-slate-200 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                value={material.price}
                onChange={(e) =>
                  setMaterial((prevState) => ({
                    ...prevState,
                    price: e.target.value,
                  }))
                }
                name="price"
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
    </div>
  );
};
