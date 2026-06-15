import FacilityCard from "@/conponenst/FacilityCard";
import SearchPage from "@/conponenst/Search";
import { Label, SearchField } from "@heroui/react";


const AllFacilitiesPage = async () => {
  const res = await fetch("http://localhost:5000/facility");
  const facilities = await res.json();
  
  

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="mt-20 text-2xl font-bold">All Facilities </h2>

     <div className="my-5">
      <SearchPage/>
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
