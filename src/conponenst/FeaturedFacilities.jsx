import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { RiExternalLinkLine } from "react-icons/ri";

const FeaturedFacilities = async () => {
  const res = await fetch(
    "http://localhost:5000/FeaturedFacilities"
  );

  const facilities = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        Featured Facilities
      </h2>

      <div className="  grid grid-cols-1 md:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Card key={facility._id}>
            <Image
              className="h-50 w-auto"
              alt={facility.facilityName}
              src={facility.image}
              width={300}
              height={300}
            />

            <div className="flex items-center gap-2">
              <LuMapPin/>
              <span>{facility.location}</span>
            </div>

            <h2 className="text-xl font-bold">
              {facility.facilityName}
            </h2>

            <div className="flex items-center gap-2">
              <FaRegCalendar />
              <span>
                {facility.availableTimeSlots}
              </span>
            </div>

            <h2 className="text-2xl font-bold">
              ${facility.pricePerHour}
            </h2>

            <Link
              href={`/all-facilities/${facility._id}`}
            >
              <Button
                variant="ghost"
                className="mt-2"
              >
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