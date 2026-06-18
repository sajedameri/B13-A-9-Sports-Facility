import BookingCard from "@/conponenst/BookingCard";
import DeletAlert from "@/conponenst/DeletAlert";
import { EditModal } from "@/conponenst/EditModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const FacilityDetailPage = async ({ params }) => {
  const {token} = await auth.api.getToken({
  headers:await headers()
  })


  const { id } = await params;
  
  const res = await fetch(`http://localhost:5000/facility/${id}`,{
    headers:{
      authorization:`bearer ${token}`
    }
  });
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
    <div className="max-w-7xl mx-auto my-10 lg:my-20 px-4">
  <h1 className="text-2xl md:text-3xl font-bold py-6 md:py-10">
    Facility Details
  </h1>

  {/* Edit & Delete Button */}
  <div className="flex flex-col sm:flex-row items-center gap-4 justify-end mb-6">
    <EditModal facility={facility} />
    <DeletAlert facility={facility} />
  </div>

  {/* Facility Image */}
  <div>
    <Image
      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-xl"
      alt={facilityName}
      src={image}
      width={1200}
      height={600}
    />
  </div>

  {/* Content Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
    {/* Left Side */}
    <div>
      <div className="flex items-center gap-2 text-gray-600">
        <LuMapPin />
        <span>{location}</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-4">
        {facilityName}
      </h2>

      <div className="flex items-center gap-2 mt-4 text-gray-600">
        <FaRegCalendar />
        <span>{availableTimeSlots}</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mt-4">
        ${pricePerHour}
      </h2>

      <h2 className="text-2xl font-bold mt-8">
        Overview
      </h2>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>
    </div>

    {/* Right Side */}
    <div className="w-full">
      <BookingCard facility={facility} />
    </div>
  </div>
</div>
  );
};

export default FacilityDetailPage;
