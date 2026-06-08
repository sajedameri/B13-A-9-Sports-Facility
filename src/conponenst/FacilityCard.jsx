
"use client"
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";
const FacilityCard = ({ facility }) => {
  console.log(facility)
  const {
    facilityName,
    description,
    capacity,
    image,
    availableTimeSlots,
    pricePerHour,
    facilityType,
    location,
    _id,
  } = facility;
  return <div>
<Card>
 <Image
  className="h-50 w-auto"
  alt={facilityName}
  src={image}
  width={300}
  height={300}
/>

  <div className="">
      <div className="flex items-center gap-2">
      <LuMapPin /><span>{location}</span>
    </div>
  </div>

  <div>
    <h2 className="text-xl font-bold">{facilityName}</h2>
  </div>

  <div className="flex items-center gap-2">
    <FaRegCalendar /><span>{ availableTimeSlots}</span>
  </div>
  <div><h2 className="text-2xl font-bold">${ pricePerHour}</h2></div>
<Link href={`/all-facilities/${_id}`}>

  <Button variant="ghost" className="mt-2"><RiExternalLinkLine />
  Book Now
</Button>
</Link>
</Card>

  </div>;
};

export default FacilityCard;
