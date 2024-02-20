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
      <div className="w-[70%] mx-auto rounded-xl caret-black mb-4 mt-10 px-10">
        <input
          type="name"
          placeholder="Search Service"
          name="from_name"
          required
          className="input bg-[#3e7172] text-white text-lg w-full p-2"
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
