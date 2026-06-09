import DeletAlert from "@/conponenst/DeletAlert";
import { EditModal } from "@/conponenst/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const FacilityDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/facility/${id}`);
  const facility = await res.json();
  console.log(facility);
  const {
    facilityName,
    description,

    image,
    availableTimeSlots,
    pricePerHour,

    location,
  } = facility;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-2xl font-bold py-10"> Facility Details</h1>
     <div className="flex items-center gap-4 justify-end">
       <EditModal facility={facility} />
       <DeletAlert facility={facility} />
     </div>
      <div>
        <div>
          <Image
            className="h-100 w-full object-cover"
            alt="facilityName"
            src={image}
            width={800}
            height={500}
          />
        </div>
        <div>
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <LuMapPin />
              <span>{location}</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold ">{facilityName}</h2>
          </div>

          <div className="flex items-center gap-2">
            <FaRegCalendar />
            <span>{availableTimeSlots}</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">${pricePerHour}</h2>
          </div>
          <h2 className="text-2xl font-bold mt-10">Overview</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailPage;
