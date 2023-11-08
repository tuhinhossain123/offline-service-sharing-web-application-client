import { useLoaderData } from "react-router-dom";
import Show from "../Show/Show";
import { useState } from "react";

const AllServices = () => {
  const showAll = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
  const [showAllCards, setShowAllCards] = useState(false);

  const filterData = showAll?.filter((item) =>
    item.service_name?.toLowerCase().includes(searchItem.toLowerCase())
  );

  const visibleCards = showAllCards ? filterData : filterData.slice(0, 4);

  const toggleShowAllCards = () => {
    setShowAllCards(true);
  };

  return (
    <div>
      <div className="my-16 mb-10 flex justify-center">
        <input
          type="search"
          name=""
          id=""
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search Service"
          className="p-3 bg-gray-200 text-lg text-slate-600 rounded w-[60%]"
        />
      </div>
      <div className="">
        {visibleCards.map((show) => (
          <Show
            key={show._id}
            show={show}
            searchItem={searchItem}
            setSearchItem={setSearchItem}
          ></Show>
        ))}
      </div>
      <div className="flex justify-center">
        {!showAllCards && filterData.length > 4 && (
          <button
            onClick={toggleShowAllCards}
            className="py-2 px-3 rounded bg-[#02a388] font-semibold text-white "
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllServices;
