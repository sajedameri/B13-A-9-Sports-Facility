import { BookingCancelAlert } from "@/conponenst/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto my-10 lg:my-20">
      <h1 className="text-3xl font-bold mb-5">My Bookings Page</h1>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
            <Image className="h-50 w-[40%] object-cover"
              src={booking.image}
              alt={booking.facilityName}
              height={200}
              width={200}
            />

            <div>
              <h2 className="text-xl font-bold">Name :{booking.facilityName}</h2>
              <h2>TimeSlot :{booking.availableTimeSlots}</h2>
              <p>Date :{new Date(booking.bookingDate).toLocaleDateString()}</p>
              <p>Id :{booking._id}</p>
              <p className="text-3xl text-cyan-700 font-bold">
                ${booking.pricePerHour}
              </p>
              <BookingCancelAlert bookingId ={booking._id}/>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
