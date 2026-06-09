"use client"
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';

import { useRouter } from 'next/navigation';
import React from 'react';

const DeletAlert = ({facility}) => {
  const router = useRouter()
  console.log("facility:", facility);
  const{_id ,facilityName} = facility;
const handleDelete = async() =>{
  const res = await fetch(`http://localhost:5000/facility/${_id}`,{

    method:"DELETE",
   headers:{
        'content-type' : 'application/json'
      },
  });
  const data = await res.json();
  router.push('/all-facilities')
  console.log(data);

};
  return (
    <div>
        <AlertDialog>
      <Button className="text-red-500 rounded-none" variant="outline"><TrashBin/>Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete}  variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  );
};

export default DeletAlert;