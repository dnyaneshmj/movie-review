import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ title, poster, released_date, rating }) => {
  return (
    <div className="mt-2 border border-1 mx-1 p-3">
      <LazyLoadImage
        className="min-h-96 max-h-96 object-cover"
        src={poster}
        alt={title}
        width={"100%"}
      />

      <div className="m-4">

        <div className="text-left text-2xl">
          <h3 className="text-wrap font-Oxanium">{title}</h3>
        </div>
        <div className="grid grid-cols-2">
          
          <div className="flex">
            <img src="/images/rating-star-vector.svg"/>
            <span className="ml-2">{rating}</span>
          </div>
          <span>{released_date}</span>
        </div>

      </div>
    </div>
  );
};
export default MovieCard;
