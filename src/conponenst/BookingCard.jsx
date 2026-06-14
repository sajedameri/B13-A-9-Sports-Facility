"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Label } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const BookingCard = ({facility }) => {
  const [bookingDate, setBookingDate]=useState(null);
  
   const{ facilityName, pricePerHour, availableTimeSlots,_id,image ,location,} =facility   
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState("");
    const { 
          data: session, 
         
      } = authClient.useSession()
      console.log(session) 
      const user= session?.user;
      const handleBooking = async()=>{
        const bookingData ={
          userId:user?.id,
          userImage:user?.image,
          userName:user?.name,
          userEmail:user?.email,
          facilityId:_id,
          facilityName,
          pricePerHour,
          image,
          location,
          availableTimeSlots,
          bookingDate:new Date(bookingDate)

        };
       
        const res = await fetch("http://localhost:5000/booking",{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(bookingData)
        })
        const data = await res.json();
        console.log(data)
        toast.success("you booked successfully !")

      }
  

 
  return (
   <Card className='border rounded-none mt-5'>
   <h2 className=''>Book This Facility</h2>
   <h2>{facilityName}</h2>
   <h2 className='text-cyan-500 font-bold text-3xl'>${ pricePerHour}</h2>
      <DateField onChange={setBookingDate} className="w-[256px]" name="date">
      <Label> Booking Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>

      {/* Time Slot */}

<h2>{ availableTimeSlots}</h2>
  <div className="border p-2 w-full bg-gray-100">
  Total: {pricePerHour * Number(hours)}
</div>
    <Link href={"/my-booking"}><Button onClick={handleBooking} className={"w-full rounded-none"}>Book now</Button></Link>
    <Toaster />
   </Card>
  );
};

export default BookingCard;
