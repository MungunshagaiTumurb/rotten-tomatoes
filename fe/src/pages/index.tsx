import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";
import { useState, useEffect } from "react";
import Chips from "@/components/Chips";
import Category from "@/components/Category";
import { useRouter } from "next/router";

export default function Home({ movies }: { movies: any }) {
  const [genres, setGenres] = useState([String]);
  const route = useRouter();
  const queryParam = route.query.category;
  function uniqByReduce<T>(array: T[]): T[] {
    return array.reduce((acc: T[], cur: T) => {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []);
  }
  const getAllCategories = async () => {
    const categories_list = [String];

    const catgories = movies.forEach((movie: any) => {
      categories_list.push(...movie?.genres);
    });
    const unique_genre = uniqByReduce(categories_list);
    setGenres(unique_genre);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="bg-white-700">
      <Chips datas={genres} />
      <PopularMovie movies={movies} genres={queryParam} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(`${server}/movies?category`);
  const movies = res.data;
  return {
    props: { movies },
  };
}
