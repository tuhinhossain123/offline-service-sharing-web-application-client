import axios from "axios";
import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {_id, service_img, service_name}=service;

    const handleDelete = ()=>{

        axios.delete(`http://localhost:5000/services/${_id}`)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="rounded-b-lg bg-base-100 shadow-xl">
        <img src={service_img} alt=""  className="rounded-t-lg w-full"/>
         <div className="space-y-4 mt-4 pl-3 mb-6">
           <h2 className="text-2xl font-semibold">{service_name}</h2>
         </div>
         <div>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/update/${_id}`}>Update</Link>
         </div>
       </div>
    );
};

export default Service;