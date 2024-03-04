import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ title, poster, released_date, rating }) => {
  return (
    <div className="mt-2 border border-1 mx-1 p-3">
      <LazyLoadImage src={poster} alt={title} width={"100%"} />

      <div className="text-left text-2xl">
        <h3>{title}</h3>
      </div>
      <div className="grid grid-cols-2">
        <span>{rating}</span>
        <span>{released_date}</span>
      </div>
    </div>
  );
};
export default MovieCard;
