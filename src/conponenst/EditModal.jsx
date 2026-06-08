"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Select,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({facility}) {
   const {
    facilityName,
    description,
    capacity,
    image,
    availableTimeSlots,
    pricePerHour,
    facilityType,
    location,
    
  } = facility;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
   
  };
  return (
    <Modal>
      <div className="flex justify-end">
        <Button variant="outline" className="rounded-none my-3">
        
          <BiEdit />
          Edit
        </Button>
      </div>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              
              <Modal.Heading>Edit Facility</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-10 space-y-8 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={facilityName} name="FacilityName" isRequired>
                        <Label>Facility Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
   
                    <TextField defaultValue={location} name="country" isRequired>
                      <Label>Location</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select defaultValue={facilityType}
                        name="Facility Type"
                        isRequired
                        className="w-full"
                        placeholder={facilityType}
                      >
                        <Label >Facility Type</Label>
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
                      <TextField defaultValue = {pricePerHour} name="pricePerHour" isRequired>
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
                    <TextField defaultValue={availableTimeSlots} name="duration" isRequired>
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
                      <TextField defaultValue = {image} name="imageUrl" isRequired>
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
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
