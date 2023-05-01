import MovieCard from "./MovieCard";

const PopularMovie = ({ movies, genres }: { movies: any; genres: any }) => {
  return (
    <div className="bg-white-700 mx-auto pb-10 px-4 gap-4">
      <h1 className="text-black text-2xl mt-8 mb-5">NEW & UPCOMING MOVIES</h1>
      <div className="max-[768px]:flex max-[768px]:overflow-x-auto  gap-2 grid grid-cols-6">
        {movies.map((movie: any) => {
          if (genres) {
            if (movie?.genres.includes(genres))
              return <MovieCard movie={movie} key={movie._id} />;
          } else return <MovieCard movie={movie} key={movie._id} />;
        })}
      </div>
    </div>
  );
};

export default PopularMovie;
