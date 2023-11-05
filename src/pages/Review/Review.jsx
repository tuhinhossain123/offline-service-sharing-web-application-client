import review from "../../assets/review.jpg";
const Review = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center text-3xl font-semibold text-orange-500 mb-4 px-1">
        CUSTOMER TESTIMONIALS
      </h1>
      <hr className="w-[200px] border-2 border-black mx-auto mb-6" />
      <div className="md:flex justify-center items-center gap-5">
        <div className="w-f">
          <img
            src={review}
            alt=""
            className="w-[150px] h-[150px] rounded-full mx-auto"
          />
        </div>
        <div className="w-3/4 ml-10 text-lg  font-serif">
          “We've used your firm for several years, with tours in a number of
          international cities. We recently completed a trip that included 13
          tours in 5 different countries. WITHOUT EXCEPTION, the tours were
          excellent and the guides thoroughly helpful, interesting, kind, and
          professional (and we tend to be picky). What a great record!
          Congratulations and keep up the good work!”
        </div>
      </div>
    </div>
  );
};

export default Review;
