import { useLoaderData } from "react-router-dom";
import Show from "../Show/Show";
import { useState } from "react";

const AllServices = () => { 
  const showAll = useLoaderData();
  const [searchItem, setSearchItem]=useState("");

  const filterData = showAll?.filter((item)=>item.service_name.toLowerCase().includes(searchItem.toLowerCase()))

  return (
    <div>
      <div className="my-16 mb-10 flex justify-center">
        <input
          type="search"
          name=""
          id=""
          value={searchItem}
          onChange={(e)=>setSearchItem(e.target.value)}
          placeholder="Search Service"
          className=" p-3 bg-[#02a388] text-lg text-white rounded w-[60%]"
        />
      </div>
      <div className="">
        {filterData?.map((show) => (
          <Show key={show._id} show={show} searchItem={searchItem} setSearchItem={setSearchItem}></Show>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
