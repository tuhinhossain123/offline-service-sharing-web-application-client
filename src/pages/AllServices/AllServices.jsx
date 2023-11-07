import { useLoaderData } from "react-router-dom";
import Show from "../Show/Show";

const AllServices = () => {
    const showAll = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16">
           {
            showAll?.map(show => <Show key={show._id} show={show}></Show>)
           }
        </div>
    );
};

export default AllServices;