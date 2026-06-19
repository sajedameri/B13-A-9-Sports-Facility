import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";

const FeaturedFacilities = async () => {
  console.log("Fetching featured facilities from:", `${process.env.NEXT_PUBLIC_API_URL}/FeaturedFacilities`);
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/FeaturedFacilities`);
  
  console.log("Fetch response:", res);

  if (!res.ok) {
    console.error("Failed to fetch facilities. Status:", res.status);
    return <div>Error loading facilities.</div>;
  }

  const facilities = await res.json();
  console.log("Successfully fetched facilities count:", facilities?.length);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Featured Facilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Card key={facility._id}>
            <Image
              className="h-48 w-auto object-cover"
              alt={facility.facilityName}
              src={facility.image}
              width={300}
              height={300}
            />

            <div className="flex items-center gap-2">
              <LuMapPin />
              <span>{facility.location}</span>
            </div>

            <h2 className="text-xl font-bold">{facility.facilityName}</h2>

            <div className="flex items-center gap-2">
              <FaRegCalendar />
              <span>{facility.availableTimeSlots}</span>
            </div>

            <h2 className="text-2xl font-bold">${facility.pricePerHour}</h2>

            <Link href={`/all-facilities/${facility._id}`}>
              <Button variant="ghost" className="mt-2">
                <RiExternalLinkLine />
                Book Now
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFacilities;