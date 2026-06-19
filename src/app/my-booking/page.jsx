import { BookingCancelAlert } from "@/conponenst/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
 
 const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const bookings = await res.json();
  console.log(bookings)

  return (
    <div className="max-w-7xl mx-auto px-4 my-10 lg:my-20">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        My Bookings Page
      </h1>

      <div className="space-y-5">
        {Array.isArray(bookings) &&
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col md:flex-row gap-5 border rounded-lg p-4 md:p-5"
            >
              {/* Image */}
              <div className="w-full md:w-[40%]">
                <Image
                  className="w-full h-48 md:h-60 object-cover rounded-md"
                  src={booking.image}
                  alt={booking.facilityName}
                  width={500}
                  height={300}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h2 className="text-lg md:text-xl font-bold">
                  Name: {booking.facilityName}
                </h2>

                <p className="text-sm md:text-base">
                  TimeSlot: {booking.availableTimeSlots}
                </p>

                <p className="text-sm md:text-base">
                  Date:{" "}
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </p>

                <p className="text-xs md:text-sm break-all">
                  ID: {booking._id}
                </p>

                <p className="text-xl md:text-3xl font-bold text-cyan-700">
                  ${booking.pricePerHour}
                </p>

                <div className="pt-2">
                  <BookingCancelAlert bookingId={booking._id} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyBookingPage;