import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ title, poster, released_date, rating }) => {
  return (
    <div className="mt-2 border border-1 mx-1 p-3">
      <LazyLoadImage
        className=" object-cover"
        src={poster}
        alt={title}
        width={"100%"}
      />

      <div className="m-4">

        <div className="text-left text-2xl">
          <h3 className="text-wrap font-Oxanium">{title}</h3>
        </div>
        <div className="flex mt-9">
          
          <div className="flex">
            <img src="/images/rating-star-vector.svg" width={21} />
            <span className="ml-2 font-Oxanium text-xl">{rating}</span>
          </div>
          <span className="flex-1 font-Oxanium text-right">Relesed Date {released_date}</span>
        </div>

      </div>
    </div>
  );
};
export default MovieCard;
