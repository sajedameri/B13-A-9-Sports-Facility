"use client";

import { useEffect, useState } from "react";

import { SearchField } from "@heroui/react";

const SearchPage = () => {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");
  console.log(search)

  useEffect(() => {
    fetch(
      `http://localhost:5000/facility?search=${search}&sport=${sport}`
    )
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, [search, sport]);

  return (
    <div className="">
     

      <div className="my-5">
        <SearchField
          value={search}
          onChange={setSearch}
        >
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              className="w-[280px]"
              placeholder="Search facility..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <select
        className="border p-2 rounded mb-5"
        value={sport}
        onChange={(e) => setSport(e.target.value)}
      >
        <option value="">All Sports</option>
        <option value="Football">Football</option>
        <option value="Cricket">Cricket</option>
        <option value="Badminton">Badminton</option>
        <option value="Tennis">Tennis</option>
      </select>

     
    </div>
  );
};

export default SearchPage;