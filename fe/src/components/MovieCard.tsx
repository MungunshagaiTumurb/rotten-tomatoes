import Image from "next/image";
import Link from "next/link";
import StarRate from "./StarRate";

const MovieCard = ({ movie }: { movie: any }) => {
  return (
    <Link href={`/movie/${movie._id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer basis-2/12">
        <Image
          src={movie.poster ? movie.poster : "/Babylon.jpeg"}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        />

        <div className="px-6 py-2 ">
          <div className="flex gap-1 items-center align-middle">
            <Image src="/tomatometer.svg" height={30} width={30} alt="img" />
            {movie.tomatoes?.viewer?.rating}
          </div>
          <div className="font-medium text-xs  text-gray-700">
            {movie.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
