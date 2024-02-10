import { useLoaderData } from "react-router-dom";
import Show from "../Show/Show";
import { useState } from "react";
import AllServiceBanner from "../../components/SheardBanner/AllServiceBanner/AllServiceBanner";

const AllServices = () => {
  const showAll = useLoaderData();
  const [searchItem, setSearchItem] = useState("");

  const filterData = showAll?.filter((item) =>
    item.service_name?.toLowerCase().includes(searchItem.toLowerCase())
  );


  return (
    <div>
      <AllServiceBanner></AllServiceBanner>
      <div className="my-16 mb-10 flex justify-center ">
        <input
          type="search"
          name=""
          id=""
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search Service"
          className="input bg-gray-100 focus:bg-green-100 border-[#3e7172] focus:border-none  rounded-md py-1 px-2 w-[30%]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 my-16">
        {showAll.map((show) => (
          <Show
            key={show._id}
            show={show}
            searchItem={searchItem}
            setSearchItem={setSearchItem}
          ></Show>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
