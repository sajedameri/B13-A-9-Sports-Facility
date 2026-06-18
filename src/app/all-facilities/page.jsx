import FacilityCard from "@/conponenst/FacilityCard";
import { auth } from "@/lib/auth";

import { Label, SearchField } from "@heroui/react";
import { headers } from "next/headers";


const AllFacilitiesPage = async () => {
    const {token} = await auth.api.getToken({
    headers:await headers()
    })
  const res = await fetch("http://localhost:5000/facility",{
      headers:{
      authorization:`Bearer ${token}`
    }
  });
  const facilities = await res.json();
  
  

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mt-20 text-2xl font-bold">All Facilities </h2>

     <div className="my-5">
   
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
