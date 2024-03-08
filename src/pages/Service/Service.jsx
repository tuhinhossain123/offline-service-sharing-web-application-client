// /* eslint-disable react/prop-types */

// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

// const Service = ({ manage, handleDelete }) => {
//   const {
//     _id,
//     service_provider_img,
//     service_provider_name,
//     service_name,
//     service_price,
//     service_area,
//   } = manage;
//   // const {user}=useContext(AuthContext)
//   // console.log(user);

//   return (
//     // <div className="rounded-b-lg bg-base-100 shadow-xl">
//     //   <img src={service_img} alt="" className="rounded-t-lg w-full" />
//     //   <div className="p-4 space-y-4">
//     //     <div className="">
//     //       <h2 className="text-2xl font-semibold">{service_name}</h2>
//     //     </div>
//     //     <div className="flex justify-between px-2 ">
//     //       <button
//     //         onClick={() => handleDelete(_id)}
//     //         className="p-3 font-bold rounded bg-[#02a388] text-white"
//     //       >
//     //         Delete
//     //       </button>
//     //       <p className="p-3 font-bold rounded bg-[#02a388] text-white">
//     //         <Link to={`/update/${_id}`}>Update</Link>
//     //       </p>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="">
//       <div className="">
//         {/* <h2 className="text-4xl md:px-10 text-center pb-10 md:-pb-0 md:text-5xl text-[#5f988f] font-semibold ">
//           Manage Your Service
//         </h2> */}
//         <table className=" table w-[70%] mx-auto">
//           <thead>
//             <tr className="text-lg bg-[#3e7172] text-white text-center ">
//               <th>No</th>
//               <th>Provider Img</th>
//               <th>Provider Name</th>
//               <th>Service Name</th>
//               <th>Service Price</th>
//               <th>Services Area</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="text-center font-bold">
//               <th>1</th>
//               <td>
//                 <div className="flex justify-center items-center gap-3">
//                   <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                       <img
//                         src={service_provider_img}
//                         alt="Avatar Tailwind CSS Component"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>{service_provider_name}</td>
//               <td>{service_name}</td>
//               <td>{service_price} $</td>
//               <td>{service_area}</td>
//               <div className="flex justify-center items-center  gap-3 text-center">
//                 <button className="btn bg-[#5f988f] hover:bg-[#5f988f] text-white">Update</button>
//                 <button className="btn bg-red-500 hover:bg-red-500 text-white">Delete</button>
//               </div>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Service;
