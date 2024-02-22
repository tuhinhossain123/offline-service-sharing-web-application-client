import { useLoaderData } from "react-router-dom";
import Show from "../Show/Show";
import { useState } from "react";
import AllServiceBanner from "../../components/SheardBanner/AllServiceBanner/AllServiceBanner";

const AllServices = () => {
  const showAll = useLoaderData();
  const [seeAll, setSeeAll] = useState(6);
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
          className="input bg-gray-100 text-white text-lg w-full p-2 focus:outline-none placeholder:text-black"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-16">
        {showAll?.slice(0, seeAll).map((show) => (
          <Show
            key={show._id}
            show={show}
            searchItem={searchItem}
            setSearchItem={setSearchItem}
          ></Show>
        ))}
      </div>
      <div className="flex justify-center mt-6 mb-16">
        <button
          onClick={() => setSeeAll(showAll.length)}
          className="py-4 px-8 text-xl font-bold text-[#5f988f] border-2 border-[#5f988f] text-center"
          
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default AllServices;
