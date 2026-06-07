import FacilityCard from "@/conponenst/FacilityCard";
import React from "react";

const AllFacilitiesPage = async () => {
  const res = await fetch("http://localhost:5000/facility");
  const facilities = await res.json();
  console.log(facilities);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mt-20 text-2xl font-bold">All FacilitiesPage</h2>
      <div className="grid grid-cols-3 gap-4 py-10 lg:gap-10 py-20">
        {facilities.map((facility) => (
  <FacilityCard
    key={facility._id}
    facility={facility}
  />
))}
      </div>
    </div>
  );
};

export default AllFacilitiesPage;
