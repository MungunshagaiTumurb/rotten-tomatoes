import axios from "axios";
import Image from "next/image";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import moment from "moment";
import Chips from "@/components/Chips";
import Comment from "@/components/Comment";
import { useEffect, useState } from "react";

const Movie = ({ movie }: { movie: any }) => {
  const [comments, setComments] = useState([]);

  const getAllComments = async () => {
    const response = await axios(`${server}/comments/${movie._id}`);
    const data = await response.data;
    setComments(data);
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="container max-w-xxxl mx-auto pt-6">
      <div>
        <Meta title={movie.title} />
        <div className="px-1 flex justify-between align-center gap-x-5">
          <Image
            src={movie.poster ? movie.poster : "/Babylon.jpeg"}
            width={500}
            height={300}
            className="rounded-md"
            alt={movie.title}
          />
          <div>
            <h1 className="font-bold text-3xl my-2 text-gray-700">
              {movie.title}
            </h1>
            <p className="text-gray-600 text-sm mt-4">{movie.plot}</p>
            <p className="mt-5 text-gray-600 text-sm">Genres: </p>
            {movie?.genres ? <Chips datas={movie?.genres} /> : "Generic"}
            <p className="mt-5 text-gray-600 text-sm">languages: </p>
            {movie?.languages ? <Chips datas={movie?.languages} /> : "Generic"}
            <p className="mt-5 text-gray-600 text-sm">Casts:</p>{" "}
            {movie?.cast ? <Chips datas={movie?.cast} /> : ""}
            <p className="mt-5 text-gray-600 text-sm">Writers:</p>{" "}
            {movie?.writers ? <Chips datas={movie?.writers} /> : ""}
            <p className="text-gray-600 text-sm">
              Release Date:{" "}
              <span className="font-bold">
                {moment(movie.released).format("MMM Do YYYY")}
              </span>
            </p>
            <p>Rate: {movie?.rated}</p>
            <div className="flex grow gap-x-12">
              <div className="align-center">
                <p className="text-xl text-gray-700 font-bold">Imdb</p>
                <p> Rating: {movie.imdb?.rating}</p>
                <p> Votes: {movie.imdb?.votes}</p>
              </div>
              <div className="align-center">
                <h2 className="text-xl text-gray-700 font-bold">Tomatoes</h2>
                <p> Rating: {movie.tomatoes?.viewer?.rating}</p>
                <p> Meter: {movie.tomatoes?.viewer?.numReviews}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-4xl text-gray-700  italic">Review section</p>
        <p className="text-3xl text-gray-700 italic">
          Comments {comments.length}
        </p>
        {comments.length > 0 ? <Comment comments={comments} /> : ""}
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const res = await axios(`${server}/movie/${id}`);
  const movie = await res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(`${server}/movies`);
  const movies = await res.data;

  const ids = movies.map((movie: any) => movie._id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
