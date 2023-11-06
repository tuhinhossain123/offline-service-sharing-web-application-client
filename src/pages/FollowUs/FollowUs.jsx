

const FollowUs = () => {
  return (
    <div className="bg-base-100 mt-16 w-3/4 mx-auto py-16 rounded px-3">
      <h1 className="text-center text-4xl font-bold">
        Sign up for our newsletter
      </h1>
      <p className="text-center text-lg pt-5">
        Stay up to date with the roadmap progress, announcements and exclusive <br />
        discounts feel free to sign up with your email.
      </p>
      <div className="flex justify-center items-center pt-10  mx-auto">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your email"
          className="bg-gray-300 text-white px-2 py-3 w-1/2 rounded-l-lg pl-4"
        />
        <button className="btn p-5 rounded-none rounded-r-lg bg-red-500 text-white">Subscribe</button>
        
      </div>
    </div>
  );
};

export default FollowUs;
