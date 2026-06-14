"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";



export function BookingCancelAlert({bookingId}) {
  const handleCancelBooking =async ()=>{
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
    })
    const data = await res.json()
    console.log(data)
    window.location.reload();

  }
  return (
    <AlertDialog>
      <Button variant="outline" className={"rounded-none mt-3 border-red-500 text-red-500"}><TrashBin/>Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
           
            </AlertDialog.Body>
            <AlertDialog.Footer>
             
              <Button onClick={handleCancelBooking} type="submit" slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}