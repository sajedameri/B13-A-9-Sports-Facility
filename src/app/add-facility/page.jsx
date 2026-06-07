"use client";
import { FieldError, Input, Label, TextField, Select, Button, ListBox, TextArea, Card, } from '@heroui/react';
import React from 'react';

const AddFacilityPage = () => {
  const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const facility = Object.fromEntries(formData.entries());
    // console.log(facility)
    const res= await fetch('http://localhost:5000/facility',{
      method:'post',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(facility)
    })

    const data = await res.json()

    console.log(data)
  }
  return (
    <div className='p-5 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold py-5 '>Add Facility</h1>
  <Card>
     <form onSubmit={onSubmit}
            className="p-10 space-y-8 w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="FacilityName" isRequired>
                  <Label>Facility Name</Label>
                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label>Location</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="Facility Type"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Facility Type</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id=" Football" textValue=" Football">
                       Football
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cricket" textValue="Cricket">
                       Cricket
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Badminton" textValue="Badminton">
                       Badminton
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Tennis" textValue="Tennis">
                    Tennis
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    
                    
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
         <div>
  <TextField name="pricePerHour" isRequired>
    <Label>Price Per Hour</Label>
    <Input
      type="number"
      placeholder="Enter price per hour"
      className="rounded-3xl"
    />
    <FieldError />
  </TextField>
</div>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Available Time Slots</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Departure Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>
              <div>
  <TextField name="capacity" isRequired>
    <Label>Capacity</Label>
    <Input
      type="number"
      placeholder="Enter capacity"
      className="rounded-3xl"
    />
    <FieldError />
  </TextField>
</div>
              

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
          
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
        Add Facility
            </Button>
          </form>
  </Card>
    </div>
  );
};

export default AddFacilityPage;
